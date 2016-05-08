var Netflix = React.createClass({displayName: "Netflix",
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies
    };
  },

  eachCategory: function(category, i) {
    console.log(category.genre + ' ' + i);

    // question: why is the `key` property important?
    return (
      React.createElement(Category, {titles: category.titles, genre: category.genre, key: category.genre_id, index: i})
    );
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

// child of Netflix
var Category = React.createClass({displayName: "Category",
  getInitialState: function() {
    return {
      titles: this.props.titles
    };
  },

  eachTitle: function(titleData, i) {
    React.createElement(Title, {titleData: titleData, key: titleData.id, index: i})
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, this.props.genre), 
        this.state.titles.map(this.eachTitle)
      )
    )
  }
});

// child of Category
var Title = React.createClass({displayName: "Title",
  getInitialState: function() {
  },

  render: function() {
    return (
      React.createElement("h3", null, this.props.titleData.title)
    )
  }
});


React.render(React.createElement(Netflix, null), document.getElementById('react-container'));
