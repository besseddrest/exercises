var TicTacToeBoard = React.createClass({displayName: "TicTacToeBoard",
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
      React.createElement(Game, {key: game.id, index: i})
      );
  },

  nextId: function() {
    // keeps track of mmost recent ID
    this.uniqueId = this.uniqueId || 0;

    return this.uniqueId++;
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        this.state.games.map(this.eachGame), 
        React.createElement("div", null, 
          React.createElement("button", {id: "btn-add", className: "btn btn-sm btn-success glyphicon glyphicon-plus", onClick: this.add})
        )
      )
    )
  }
});

var Game = React.createClass({displayName: "Game",
  getInitialState: function() {
    return {
      currentPlayer: 'X',
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ],
      completed: false
    };
  },

  componentDidMount: function(){
    // make game draggable (by outer edges)
    $(this.getDOMNode()).draggable();
  },

  play: function(x, y) {
    var board = this.state.board;

    // store current player on 'board'
    board[x][y] = this.state.currentPlayer;

    // set state and check winner
    this.setState({board: board}, this.checkWinner.bind(this, x, y));

  },

  _swapPlayer: function () {
    // changes the current player
    if (this.state.currentPlayer === 'X') {
      this.setState({currentPlayer: 'O'});
    } else {
      this.setState({currentPlayer: 'X'});
    }
  },

  checkWinner: function(x, y) {
    var board = this.state.board;

    // check for winner
    if (this._checkRow(x) || this._checkColumn(y) || this._checkDiagonal()) {
      this._displayWinner();
    } else {
      this._swapPlayer();
    }
  },

  _checkRow: function(x) {
    var board = this.state.board;

    // checks all spaces in current row
    for (var i = 0; i < board.length; i++) {
      if (board[x][i] !== this.state.currentPlayer) {
        return false;
      }
    }

    return true;
  },

  _checkColumn: function(y) {
    var board = this.state.board;

    // checks all spaces in current column
    for (var j = 0; j < board.length; j++) {
      if (board[j][y] !== this.state.currentPlayer) {
        return false;
      }
    }

    return true;
  },

  _checkDiagonal: function() {
    var board = this.state.board;
    var winner = this.state.currentPlayer;

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
    this.setState({completed: true});
  },

  render: function() {
    this.classes = 'game';

    if (this.state.completed) {
      this.classes = 'game table-success';
    }

    return (
      React.createElement("div", {className: this.classes, id: this.props.id}, 
        React.createElement("table", {className: "table-tictactoe"}, 
          React.createElement("tr", {className: "tictactoe-grid-bottom"}, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 0, 0), value: this.state.board[0][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 0, 1), value: this.state.board[0][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Button, {onClick: this.play.bind(null, 0, 2), value: this.state.board[0][2], isCompleted: this.state.completed})
            )
          ), 
          React.createElement("tr", {className: "tictactoe-grid-bottom"}, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 1, 0), value: this.state.board[1][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 1, 1), value: this.state.board[1][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Button, {onClick: this.play.bind(null, 1, 2), value: this.state.board[1][2], isCompleted: this.state.completed})
            )
          ), 
          React.createElement("tr", null, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 2, 0), value: this.state.board[2][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Button, {onClick: this.play.bind(null, 2, 1), value: this.state.board[2][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Button, {onClick: this.play.bind(null, 2, 2), value: this.state.board[2][2], isCompleted: this.state.completed})
            )
          )
        ), 
        React.createElement("button", {className: "btn btn-sm glyphicon glyphicon-repeat"})
      )
    )
  }
});

var Button = React.createClass({displayName: "Button",
  render: function() {
    this.disabled = false;

    if (this.props.value || this.props.isCompleted) {
      this.disabled = true;
    }

    return (
      React.createElement("button", {className: "space", onClick: this.props.onClick, disabled: this.disabled}, this.props.value)
    )
  }
});

React.render(React.createElement(TicTacToeBoard, null), document.getElementById('react-container'));
