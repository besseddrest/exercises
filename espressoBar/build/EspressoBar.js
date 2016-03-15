var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      winner: '',
      prize: '',
      completed: false,
      reel1Paused: false,
      reel2Paused: false,
      reel3Paused: false,
      spin: false,
      reel1: {
        top: 'images/coffee-maker.png',
        middle: 'images/teapot.png',
        bottom: 'images/espresso-machine.png',
      },
      reel2: {
        top: 'images/coffee-filter.png',
        middle: 'images/tea-strainer.png',
        bottom: 'images/espresso-tamper.png'
      },
      reel3: {
        top: 'images/coffee-grounds.png',
        middle: 'images/loose-tea.png',
        bottom: 'images/espresso-beans.png'
      }
    };
  },

  play: function() {
    // spin starts the animation
    this.setState({spin: true}, this._pauseReels);
  },

  _pauseReels: function() {
    // possible stop times for each reel,
    // based on 1/3 of .5 seconds,
    // there is at least a second between each reel pause
    var reelTimes = [
      [1333, 1666, 2000],
      [2333, 2666, 3000],
      [3333, 3666, 4000]
    ];

    var reelTimeouts = []

    for (var i = 0; i < reelTimes.length; i++) {
      // select a random stop time for each reel
      var timeout = reelTimes[i][Math.floor(Math.random() * 3)];

      reelTimeouts.push(timeout);
    }

    var component = this;

    // pause each reel based on random stop time
    setTimeout(function(){
      component.setState({reel1Paused: true});
    }, reelTimeouts[0]);

    setTimeout(function(){
      component.setState({reel2Paused: true});
    }, reelTimeouts[1]);

    setTimeout(function(){
      component.setState({reel3Paused: true}, component._straightenRows);
    }, reelTimeouts[2]);

  },

  _straightenRows: function() {
    // the rows won't always line up exactly
    // in this method we'll `straighten` the rows by setting state
    // we'll use the img offsets to determine each reel's new state
    var reels = [
      document.getElementById('reel1').getElementsByTagName('img'),
      document.getElementById('reel2').getElementsByTagName('img'),
      document.getElementById('reel3').getElementsByTagName('img')
    ];

    var newReels = [];

    // cycle through each reel
    for (var i = 0; i < reels.length; i++) {
      var sortable = [];
      
      // store the offset and src of each reel item
      for (var j = 0; j < reels[i].length; j++) {
        var src = $(reels[i][j]).attr('src');
        var offset = $(reels[i][j]).offset().top;
        
        sortable.push([src, offset]);
      }

      // sort this reel by the offsets, top to bottom
      sortable.sort(function(a, b) {return a[1] - b[1]});

      // store the new sorted reel order
      newReels[i] = {
        top: sortable[0][0],
        middle: sortable[1][0],
        bottom: sortable[2][0]
      };
    }

    // set the reel order in state and get the winner
    this.setState({
      reel1: newReels[0],
      reel2: newReels[1],
      reel3: newReels[2],
      reel1Paused: false,
      reel2Paused: false,
      reel3Paused: false,
      spin: false
    }, this._getWinner);
  },

  _getWinner: function() {
    // we need a value that we can compare against all reels
    var reel1 = this.state.reel1.middle;
    var winners = ['coffee', 'espresso', 'tea'];

    // set the winner, then check the other reels
    for (var i = 0; i < winners.length; i++) {
      if (reel1.indexOf(winners[i]) > -1) {
        this.setState({winner: winners[i]}, this._checkWinner);
        break;
      }
    }
  },

  _checkWinner: function() {
    var winner = this.state.winner;
    var reel2Val = this.state.reel2.middle;
    var reel3Val = this.state.reel3.middle;

    // if middle values match winner, render the prize
    if (reel2Val.indexOf(winner) > -1 && reel3Val.indexOf(winner) > -1) {
      this._setPrize(winner);
    }
  },

  _setPrize: function(str) {
    var prizes = {
      'coffee': 'images/coffee.png',
      'tea': 'images/tea.png',
      'espresso': 'images/espresso.png'
    };

    // sets the image of the prize that we will display
    this.setState({prize: prizes[str]}, this._displayPrize);
  },

  _displayPrize: function() {
    var component = this;

    setTimeout(function(){
      component.setState({completed: true});
    }, 500);

  },

  _hidePrize: function() {
    this.setState({completed: false});
  },

  render: function() {
    // classes will use CSS transitions for animation
    this.prizeClasses = '';
    this.buttonClasses = 'btn btn-primary btn-lg';
    this.reelClasses = 'reel list-unstyled';

    if (this.state.completed) {
      this.prizeClasses = 'winner'
      this.buttonClasses = 'btn btn-success btn-lg';
    }

    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement("div", {className: "text-center"}, 
          React.createElement("button", {id: "btn-play", onClick: this.play, className: this.buttonClasses, disabled: this.state.completed}, "Play the Thumbtack Espresso Machine!")
        ), 
        React.createElement("div", {id: "prize", className: this.prizeClasses}, 
          React.createElement("h2", null, "You win a cup of ", this.state.winner, "!"), 
          React.createElement("img", {src: this.state.prize}), React.createElement("br", null), 
          React.createElement("button", {onClick: this._hidePrize, className: "btn btn-primary"}, "Continue")
        ), 
        React.createElement("div", {className: "container game-container"}, 
          React.createElement(Reel, {id: "reel1", className: this.reelClasses, hasWinner: this.state.completed, top: this.state.reel1.top, middle: this.state.reel1.middle, bottom: this.state.reel1.bottom, spinning: this.state.spin, paused: this.state.reel1Paused}), 
          React.createElement(Reel, {id: "reel2", className: this.reelClasses, hasWinner: this.state.completed, top: this.state.reel2.top, middle: this.state.reel2.middle, bottom: this.state.reel2.bottom, spinning: this.state.spin, paused: this.state.reel2Paused}), 
          React.createElement(Reel, {id: "reel3", className: this.reelClasses, hasWinner: this.state.completed, top: this.state.reel3.top, middle: this.state.reel3.middle, bottom: this.state.reel3.bottom, spinning: this.state.spin, paused: this.state.reel3Paused})
        )
      )
    )
  }
});

var Reel = React.createClass({displayName: "Reel",
  render: function() {
    this.classes = this.props.className;
    this.itemClasses = 'reel-item';

    if (this.props.spinning) {
      this.itemClasses = 'reel-item spinning';

      if (this.props.paused) {
        this.itemClasses = 'reel-item spinning paused';
      }
    }

    if (this.props.hasWinner) {
      this.classes = this.classes + ' border-success';
    }

    return (
      React.createElement("div", {className: "col-xs-4 reel-wrapper"}, 
        React.createElement("ul", {id: this.props.id, className: this.classes}, 
          React.createElement("li", {className: this.itemClasses, "data-position": "reel-top"}, React.createElement("img", {src: this.props.top})), 
          React.createElement("li", {className: this.itemClasses, "data-position": "reel-middle"}, React.createElement("img", {src: this.props.middle})), 
          React.createElement("li", {className: this.itemClasses, "data-position": "reel-bottom"}, React.createElement("img", {src: this.props.bottom}))
        )
      )
    )
  }
});

React.render(React.createElement(EspressoBar, null), document.getElementById('react-container'));
