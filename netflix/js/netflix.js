var Netflix = React.createClass({
  getInitialState: function() {
    return {
      headline: 'Harold\'s Netflix',
      allMovies: allMovies
    };
  },

  eachCategory: function(category, i) {
    // TODO: understand the significance of `key` and `i`
    return (
      <Category titles={category.titles} genre={category.genre} key={category.genre_id} index={i} />
    );
  },

  render: function() {
    // TODO: understand why the return needs a container element
    return (
      <div className="container">
        <h1>{this.state.headline}</h1>
        {this.state.allMovies.map(this.eachCategory)}
      </div>
    )
  }
});

// child of Netflix
var Category = React.createClass({
  getInitialState: function() {
    return {
      titles: this.props.titles,
      current: {}
    };
  },

  // sets `current` with the data of clicked Title component 
  setDetails: function(currentTitle) {
    this.setState({current: currentTitle});
  },

  eachTitle: function(titleData, i) {
    return (
      <Title details={this.setDetails} titleData={titleData} key={titleData.id} index={i} />
    );
  },

  render: function() {
    return (
      <div>
        <h2>{this.props.genre}</h2>
        <div className="container">
          <div className="row">
            {this.state.titles.map(this.eachTitle)}
          </div>
          <Details details={this.state.current} />
        </div>
      </div>
    )
  }
});

var Details = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="details-block">
            {this.props.details.name}
          </div>
        </div>
      </div>
    )
  }
});

// child of Category
var Title = React.createClass({
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
      <div onClick={this.handleClick} className="title-thumb col-xs-4">
        <span className="title-name">{this.props.titleData.name}</span>
      </div>
    );
  }
});

ReactDOM.render(<Netflix/>, document.getElementById('react-container'));
