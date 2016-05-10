var MyNetflix = React.createClass({
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
      <Category activeTitleInCategory={this.state.activeTitle} active={this.showActive} titles={category.titles} genre={category.genre} key={category.genre_id} index={i} />
    );
  },

  render: function() {
    return (
      <div className="container">
        <h1>{this.state.headline}</h1>
        {this.state.allMovies.map(this.eachCategory)}
      </div>
    )
  }
});

// child of `MyNetflix`
var Category = React.createClass({
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
      <Title details={this.setDetails} titleData={titleData} key={titleData.id} index={i} />
    );
  },

  render: function() {
    // renders Details only in clicked title's category
    if (this.props.activeTitleInCategory === this.state.clickedTitle) {
      return (
        <div>
          <h2>{this.props.genre}</h2>
          <div className="container">
            <div className="row">
              {this.state.titles.map(this.eachTitle)}
            </div>
            <Details details={this.state.clickedTitle} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{this.props.genre}</h2>
          <div className="container">
            <div className="row">
              {this.state.titles.map(this.eachTitle)}
            </div>
          </div>
        </div>
      )
    }
  }
});

// child of `Category`
var Details = React.createClass({
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
      <div className="row">
        <div className="col-xs-12">
          <h3>{this.props.details.name}</h3>
          <div className="tabs">
            <ul>
              <li className="col-xs-4" onClick={this.handleClick.bind(null, 'overview')}>OVERVIEW</li>
              <li className="col-xs-4" onClick={this.handleClick.bind(null, 'related')}>MORE LIKE THIS</li>
              <li className="col-xs-4" onClick={this.handleClick.bind(null, 'details')}>DETAILS</li>
            </ul>
            <div data-content-name="overview" className="tab tab-overview">
              <p>{this.props.details.description}</p>
            </div>
            <div data-content-name="related" className="tab tab-related">
              <p>
                should probably create a flag to indicate whether title is a show vs movie, so we can display episodes or related titles
              </p>
            </div>
            <div data-content-name="details" className="tab tab-details">
              <p>
                details go here<br />
                subgenres, director, ratings
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

// child of `Category`
var Title = React.createClass({
  getInitialState: function() {
    return {
      titleData: this.props.titleData
    }
  },

  // passes clicked title's data to `setDetails` method in parent
  handleClick: function() {
    this.props.details(this.state.titleData);

    // always start with overview tab open
    // should probably key off state instead of using jquery
    $('.tab').hide();
    $('.tab-overview').fadeIn();
  },

  render: function() {
    return (
      <div onClick={this.handleClick} className="title-thumb col-xs-4">
        <span className="title-name">{this.props.titleData.name}</span>
      </div>
    );
  }
});

ReactDOM.render(<MyNetflix/>, document.getElementById('react-container'));
