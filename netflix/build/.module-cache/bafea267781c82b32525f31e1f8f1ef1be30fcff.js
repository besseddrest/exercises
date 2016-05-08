var Netflix = React.createClass({displayName: "Netflix",
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies
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

  eachCategory: function(category, i) {
    return (
      React.createElement(Category, {key: category.genre, index: i})
    );
  },

  nextId: function() {
    // keeps track of most recent ID
    this.uniqueId = this.uniqueId || 0;

    return this.uniqueId++;
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        this.state.allMovies.map(this.eachCategory), 
        React.createElement("button", {id: "btn-add", className: "btn btn-sm btn-success glyphicon glyphicon-plus", onClick: this.add})
      )
    )
  }
});

// child of TicTacToeBoard
var Category = React.createClass({displayName: "Category",
  getInitialState: function() {
    return {
      currentPlayer: 'X',
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ],
      completed: false,
      tie: false
    };
  },

  render: function() {
    this.gameClasses = 'game';
    this.restartClasses = 'hidden'

    // completed styling
    if (this.state.completed) {
      this.gameClasses = 'game table-success';
      this.restartClasses = 'btn btn-sm btn-info glyphicon glyphicon-repeat'
    }

    // tie game styling
    if (this.state.tie) {
      this.gameClasses = 'game table-tied';
      this.restartClasses = 'btn btn-sm btn-info glyphicon glyphicon-repeat'
    }

    // is it possible to send this.state.completed to the Space child
    // without having to pass it as a property on every component?
    return (
      React.createElement("div", {className: this.gameClasses, id: this.props.id}, 
        React.createElement("table", {className: "table-tictactoe"}, 
          React.createElement("tr", {className: "tictactoe-grid-bottom"}, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 0, 0), value: this.state.board[0][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 0, 1), value: this.state.board[0][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Space, {onClick: this.play.bind(null, 0, 2), value: this.state.board[0][2], isCompleted: this.state.completed})
            )
          ), 
          React.createElement("tr", {className: "tictactoe-grid-bottom"}, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 1, 0), value: this.state.board[1][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 1, 1), value: this.state.board[1][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Space, {onClick: this.play.bind(null, 1, 2), value: this.state.board[1][2], isCompleted: this.state.completed})
            )
          ), 
          React.createElement("tr", null, 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 2, 0), value: this.state.board[2][0], isCompleted: this.state.completed})
            ), 
            React.createElement("td", {className: "tictactoe-grid-right"}, 
              React.createElement(Space, {onClick: this.play.bind(null, 2, 1), value: this.state.board[2][1], isCompleted: this.state.completed})
            ), 
            React.createElement("td", null, 
              React.createElement(Space, {onClick: this.play.bind(null, 2, 2), value: this.state.board[2][2], isCompleted: this.state.completed})
            )
          )
        ), 
        React.createElement("button", {onClick: this.restart, className: this.restartClasses})
      )
    )
  }
});

// child of Game
var Space = React.createClass({displayName: "Space",
  render: function() {
    this.disabled = false;

    // if the space has been played, disable it
    // if the game is completed, let's disable everything
    if (this.props.value || this.props.isCompleted) {
      this.disabled = true;
    }

    return (
      React.createElement("button", {className: "space", onClick: this.props.onClick, disabled: this.disabled}, this.props.value)
    )
  }
});

React.render(React.createElement(TicTacToeBoard, null), document.getElementById('react-container'));
