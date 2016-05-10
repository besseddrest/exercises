var MyNetflix = React.createClass({displayName: "MyNetflix",
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies,
      activeTitle: null
    };
  },

  // parent `MyNetflix` keeps track of the clicked title
  // so we know which `Category` to display the `Details` component
  showActive: function(clickedTitle) {
    this.setState({activeTitle: clickedTitle});
  },

  eachCategory: function(category, i) {
    return (
      React.createElement(Category, {activeTitleInCategory: this.state.activeTitle, active: this.showActive, titles: category.titles, genre: category.genre, key: category.genre_id, index: i})
    );
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        this.state.allMovies.map(this.eachCategory)
      )
    )
  }
});

// child of `MyNetflix`
var Category = React.createClass({displayName: "Category",
  getInitialState: function() {
    return {
      titles: this.props.titles,
      clickedTitle: {}
    };
  },

  setDetails: function(clickedTitle) {
    this.setState({
      clickedTitle: clickedTitle,
    });

    this.props.active(clickedTitle);
  },

  eachTitle: function(titleData, i) {
    return (
      React.createElement(Title, {details: this.setDetails, titleData: titleData, key: titleData.id, index: i})
    );
  },

  render: function() {
    // renders Details only in clicked title's category
    if (this.props.activeTitleInCategory === this.state.clickedTitle) {
      return (
        React.createElement("div", null, 
          React.createElement("h2", null, this.props.genre), 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
              this.state.titles.map(this.eachTitle)
            ), 
            React.createElement(Details, {details: this.state.clickedTitle})
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

// child of `Category`
var Details = React.createClass({displayName: "Details",
  getInitialState: function() {
    return {
      active: this.props.details
    }
  },

  handleClick: function(tab) {
    $('.tab').hide();
    $('.tab-' + tab).fadeIn();
  },

  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-12"}, 
          React.createElement("h3", null, this.props.details.name), 
          React.createElement("div", {className: "tabs"}, 
            React.createElement("ul", null, 
              React.createElement("li", {className: "col-xs-4", onClick: this.handleClick.bind(null, 'overview')}, "OVERVIEW"), 
              React.createElement("li", {className: "col-xs-4", onClick: this.handleClick.bind(null, 'related')}, "MORE LIKE THIS"), 
              React.createElement("li", {className: "col-xs-4", onClick: this.handleClick.bind(null, 'details')}, "DETAILS")
            ), 
            React.createElement("div", {"data-content-name": "overview", className: "tab tab-overview"}, 
              React.createElement("p", null, this.props.details.description)
            ), 
            React.createElement("div", {"data-content-name": "related", className: "tab tab-related"}, 
              React.createElement("p", null, 
                "should probably create a flag to indicate whether title is a show vs movie, so we can display episodes or related titles"
              )
            ), 
            React.createElement("div", {"data-content-name": "details", className: "tab tab-details"}, 
              React.createElement("p", null, 
                "details go here", React.createElement("br", null), 
                "subgenres, director, ratings"
              )
            )
          )
        )
      )
    )
  }
});

// child of `Category`
var Title = React.createClass({displayName: "Title",
  getInitialState: function() {
    return {
      titleData: this.props.titleData
    }
  },

  // passes clicked title's data to `setDetails` method in parent
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

ReactDOM.render(React.createElement(MyNetflix, null), document.getElementById('react-container'));
