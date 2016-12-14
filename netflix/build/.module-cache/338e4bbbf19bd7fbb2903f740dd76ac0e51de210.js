var Netflix = React.createClass({displayName: "Netflix",
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies,
      active: null
    };
  },

  // used to display the Details only in the Category in which the Title is clicked
  showActive: function(activeTitle) {
    this.setState({active: activeTitle});
  },

  eachCategory: function(category, i) {
    // TODO: understand the significance of `key` and `i`
    return (
      React.createElement(Category, {activeTitle: this.state.active, active: this.showActive, titles: category.titles, genre: category.genre, key: category.genre_id, index: i})
    );
  },

  render: function() {
    console.log(this.state.currentTitle);
    // TODO: understand why the return needs a container element
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
      activeTitle: {}
    };
  },

  // sets `activeTitle` with the data of clicked Title component 
  setDetails: function(clickedTitle) {
    this.setState({
      activeTitle: clickedTitle,
    });

    // tells Parent that the clicked title is the active one
    this.props.active(clickedTitle);
  },

  eachTitle: function(titleData, i) {
    return (
      React.createElement(Title, {details: this.setDetails, titleData: titleData, key: titleData.id, index: i})
    );
  },

  render: function() {
    // renders Details only in current Category
    if (this.props.currentTitle === this.state.currentTitle) {
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
    } else {
      return (
        React.createElement("div", null, 
          React.createElement("h2", null, this.props.genre), 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
              this.state.titles.map(this.eachTitle)
            )
          )
        )
      )
    }
  }
});

var Details = React.createClass({displayName: "Details",
  getInitialState: function() {
    return {
      active: this.props.details
    }
  },

  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-12"}, 
          React.createElement("div", {className: "details-block"}, 
            React.createElement("h3", null, this.props.details.name), 
            React.createElement("div", {className: "tabs"}, 
              React.createElement("div", {className: "overview"}, 
                React.createElement("p", null, this.props.details.description)
              )
            )
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

  // calls `setDetails` method in parent
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