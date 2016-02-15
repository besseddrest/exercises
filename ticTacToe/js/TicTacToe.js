var TicTacToeBoard = React.createClass({
  getInitialState: function() {
    return {
      headline: 'Tic Tac Toe',
      games: []
    };
  },

  add: function() {
    // adds a new game
    var games = this.state.games;

    // each game needs a unique ID
    games.push({
      id: this.nextId()
    });

    this.setState({games: games});
  },

  eachGame: function(game, i) {
    return (
      <Game key={game.id} index={i} />
      );
  },

  nextId: function() {
    // keeps track of mmost recent ID
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  },

  render: function() {
    return (
      <div className="container">
        <h1>{this.state.headline}</h1>
        {this.state.games.map(this.eachGame)}
        <div>
          <button id="btn-add" className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add} />
        </div>
      </div>
    )
  }
});

var Game = React.createClass({
  getInitialState: function() {
    return {
      currentPiece: 'X',
      winner: '',
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    };
  },

  componentDidMount: function(){
    $(this.getDOMNode()).draggable();
  },

  play: function(x, y) {
    var board = this.state.board;

    // place piece
    board[x][y] = this.state.currentPiece;

    // set state and check winner
    this.setState({board: board}, this.checkWinner.bind(this, x, y));

    // disable the space on the board
    //this.disableCell();

  },

  disableCell: function() {
    // TODO
    $('button[data-tag="' + tag + '"]').prop('disabled', true);
  },

  _swapPiece: function () {
    // changes the current player piece
    if (this.state.currentPiece === 'X') {
      this.setState({currentPiece: 'O'});
    } else {
      this.setState({currentPiece: 'X'});
    }
  },

  checkWinner: function(x, y) {
    var board = this.state.board;

    // check for winner
    if (this._checkRow(x) || this._checkColumn(y) || this._checkDiagonal()) {
      this._displayWinner();
    } else {
      this._swapPiece();
    }
  },

  _checkRow: function(x) {
    var board = this.state.board;

    // checks all spaces in current row
    for (var i = 0; i < board.length; i++) {
      if (board[x][i] !== this.state.currentPiece) {
        return false;
      }
    }

    return true;
  },

  _checkColumn: function(y) {
    var board = this.state.board;

    // checks all spaces in current column
    for (var j = 0; j < board.length; j++) {
      if (board[j][y] !== this.state.currentPiece) {
        return false;
      }
    }

    return true;
  },

  _checkDiagonal: function() {
    var board = this.state.board;
    var winner = this.state.currentPiece;

    if (board[1][1] === winner) {
      // check first diagonal
      if (board[0][0] === winner && board[1][1] === winner) {
        return true;
      }

      // check second diagonal
      if (board[0][2] === winner && board[2][0] === winner) {
        return true;
      }
    } else {
      return false;
    }
  },

  _displayWinner: function() {
    alert('you win');
  },

  render: function() {
    return (
      <div className="game">
        <table className="table-tictactoe">
          <tr className="tictactoe-grid-bottom">
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 0, 0)}>{this.state.board[0][0]}</button></td>
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 0, 1)}>{this.state.board[0][1]}</button></td>
            <td><button className="space" onClick={this.play.bind(this, 0, 2)}>{this.state.board[0][2]}</button></td>
          </tr>
          <tr className="tictactoe-grid-bottom">
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 1, 0)}>{this.state.board[1][0]}</button></td>
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 1, 1)}>{this.state.board[1][1]}</button></td>
            <td><button className="space" onClick={this.play.bind(this, 1, 2)}>{this.state.board[1][2]}</button></td>
          </tr>
          <tr>
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 2, 0)}>{this.state.board[2][0]}</button></td>
            <td className="tictactoe-grid-right"><button className="space" onClick={this.play.bind(this, 2, 1)}>{this.state.board[2][1]}</button></td>
            <td><button className="space" onClick={this.play.bind(this, 2, 2)}>{this.state.board[2][2]}</button></td>
          </tr>
        </table>
      </div>
    )
  }
});

React.render(<TicTacToeBoard/>, document.getElementById('react-container'));
