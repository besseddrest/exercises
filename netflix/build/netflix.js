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
      titles: this.props.titles,
      current: {}
    };
  },

  setDetails: function(currentTitle) {
    this.setState({current: currentTitle});
  },

  eachTitle: function(titleData, i) {
    return (
      React.createElement(Title, {details: this.setDetails, titleData: titleData, key: titleData.id, index: i})
    );
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, this.props.genre), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            this.state.titles.map(this.eachTitle)
          ), 
          React.createElement(Details, {details: this.state.current})
        )
      )
    )
  }
});

var Details = React.createClass({displayName: "Details",
  componentWillMount: function() {
    console.log('hello');
  },
  
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-12"}, 
          React.createElement("div", {className: "details-block"}, 
            this.props.details.name
          )
        )
      )
    )
  }
});

// child of Category
var Title = React.createClass({displayName: "Title",
  getInitialState: function() {
    return {
      titleData: this.props.titleData
    }
  },

  handleClick: function() {
    this.props.details(this.state.titleData);
  },

  render: function() {
    return (
      React.createElement("div", {onClick: this.handleClick, className: "title-thumb col-xs-4"}, 
        React.createElement("span", {className: "title-name"}, this.props.titleData.name)
      )
    );
  }
});

ReactDOM.render(React.createElement(Netflix, null), document.getElementById('react-container'));
