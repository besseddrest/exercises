var Netflix = React.createClass({displayName: "Netflix",
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies
    };
  },

  eachCategory: function(category, i) {
    console.log(category.genre + ' ' + i);

    // understand the significance of `key` and `i`
    return (
      React.createElement(Category, {titles: category.titles, genre: category.genre, key: category.genre_id, index: i})
    );
  },

  render: function() {
    // understand why the return needs a container element
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
    console.log(titleData);
    React.createElement(Title, {name: titleData.name, key: titleData.id, index: i})
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
    titleData = this.props.titleData
  },

  render: function() {
    console.log('hello');
    return (  
      React.createElement("h3", null, this.props.name)
    )
  }
});

React.render(React.createElement(Netflix, null), document.getElementById('react-container'));
