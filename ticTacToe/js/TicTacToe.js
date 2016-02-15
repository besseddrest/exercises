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

  eachGame: function(game) {
    return (
      <Game key={game.id} />
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
    // make game draggable (by outer edges)
    $(this.getDOMNode()).draggable();
  },

  play: function(x, y, tag) {
    var board = this.state.board;

    // place piece
    board[x][y] = this.state.currentPiece;

    // set state and check winner
    this.setState({board: board}, this.checkWinner.bind(this, x, y));

    // disable the space on the board
    this.disableCell(tag);

  },

  disableCell: function(tag) {
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
      if (board[0][0] === winner && board[2][2] === winner) {
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
    // show that this game has been won
    $(this.getDOMNode()).addClass('table-success');
  },

  render: function() {
    return (
      <div className="game">
        <table className="table-tictactoe">
          <tr className="tictactoe-grid-bottom">
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="topLeft" onClick={this.play.bind(this, 0, 0, 'topLeft')}>{this.state.board[0][0]}</button>
            </td>
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="topMid" onClick={this.play.bind(this, 0, 1, 'topMid')}>{this.state.board[0][1]}</button>
            </td>
            <td>
              <button className="space" data-tag="topRight" onClick={this.play.bind(this, 0, 2, 'topRight')}>{this.state.board[0][2]}</button>
            </td>
          </tr>
          <tr className="tictactoe-grid-bottom">
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="midLeft" onClick={this.play.bind(this, 1, 0, 'midLeft')}>{this.state.board[1][0]}</button>
            </td>
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="midMid" onClick={this.play.bind(this, 1, 1, 'midMid')}>{this.state.board[1][1]}</button>
            </td>
            <td>
              <button className="space" data-tag="midRight" onClick={this.play.bind(this, 1, 2, 'midRight')}>{this.state.board[1][2]}</button>
            </td>
          </tr>
          <tr>
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="botLeft" onClick={this.play.bind(this, 2, 0, 'botLeft')}>{this.state.board[2][0]}</button>
            </td>
            <td className="tictactoe-grid-right">
              <button className="space" data-tag="botMid" onClick={this.play.bind(this, 2, 1, 'botMid')}>{this.state.board[2][1]}</button>
            </td>
            <td>
              <button className="space" data-tag="botRight" onClick={this.play.bind(this, 2, 2, 'botRight')}>{this.state.board[2][2]}</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
});

React.render(<TicTacToeBoard/>, document.getElementById('react-container'));
