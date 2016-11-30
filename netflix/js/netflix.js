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
    );
  }
});

// child of `Category`
var Details = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.details,
      selected: 'overview'
    }
  },

  // always start with overview tab open
  // probably better to key off change in state rather than this jquery solution
  // this will work for now
  handleClick: function(tab) {
    //this.setState({selected: tab});
  },

  renderTabClass: function(tab) {
    var classes = 'tab + tab-' + tab;
    if (tab === this.state.selected) {
      classes = classes + ' selected';
    }

    return classes;
  },

  render: function() {    
    return (
      <div className="row">
        <div className="col-xs-12">
          <h3>{this.props.details.name}</h3>
          <div className="tabs">
            <ul>
              <li className="col-xs-4"><a onClick={this.handleClick('overview')}>OVERVIEW</a></li>
              <li className="col-xs-4"><a onClick={this.handleClick('related')}>MORE LIKE THIS</a></li>
              <li className="col-xs-4"><a onClick={this.handleClick('details')}>DETAILS</a></li>
            </ul>
            <div data-content-name="overview" className={this.renderTabClass('overview')}>
              <p>{this.props.details.description}</p>
            </div>
            <div data-content-name="related" className={this.renderTabClass('related')}>
              <p>
                should probably create a flag to indicate whether title is a show vs movie, so we can display episodes or related titles
              </p>
            </div>
            <div data-content-name="details" className={this.renderTabClass('details')}>
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
      titleData: this.props.titleData,
      highlight: {
        title: '',
        teaser: ''
      }
    }
  },

  // passes clicked title's data to `setDetails` method in parent
  // expands details section
  handleClick: function() {
    this.props.details(this.state.titleData);

    //$('.tab').hide();
    //$('.tab-overview').fadeIn();
  },

  // highlight, enlarge, and show teaser
  handleMouseOver: function() {
    this.setState({
      highlight: {
        title: this.props.titleData.name,
        teaser: 'teaser for ' + this.props.titleData.name
      }
    });
  },

  // clear highlight
  handleMouseOut: function() {
    this.setState({
      highlight: {
        title: '',
        teaser: ''
      }
    });
  },

  render: function() {
    this.teaserClasses = 'hidden';

    if (this.state.highlight.title !== '') {
      this.teaserClasses = 'visible'
    }

    return (
      <div onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="title-thumb col-xs-4">
        <span className="title-name">{this.props.titleData.name}</span><br />
        <small className={this.teaserClasses}>{this.state.highlight.title}</small><br />
        <small className={this.teaserClasses}>{this.state.highlight.teaser}</small>
      </div>
    );
  }
});

ReactDOM.render(<MyNetflix/>, document.getElementById('react-container'));
