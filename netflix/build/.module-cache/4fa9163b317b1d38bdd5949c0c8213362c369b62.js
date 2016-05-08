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
    console.log(category.genre + ' ' + i);
    return (
      React.createElement(Category, {genre: category.genre, key: category, index: i})
    );
  },

  nextId: function() {
    // keeps track of most recent ID
    this.uniqueId = this.uniqueId || 0;

    return this.uniqueId++;
  },

  render: function() {
    console.log(this.state.allMovies);
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        this.state.allMovies.map(this.eachCategory)
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
