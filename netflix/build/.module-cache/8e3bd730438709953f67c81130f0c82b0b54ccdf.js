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
      React.createElement(Category, {key: category, index: i})
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
  render: function() {
    return (
      React.createElement("h2", null, this.props.genre)
    )
  }
});

React.render(React.createElement(Netflix, null), document.getElementById('react-container'));
