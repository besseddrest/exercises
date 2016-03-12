var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      winner: '',
      prize: '',
      completed: false,
      shift: false,
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
    // selects the random stop times for each reel
    var reel1Times = [1166, 1332, 1500];
    var reel2Times = [2166, 2332, 2500];
    var reel3Times = [3166, 3332, 3500];

    var reel1Timeout = reel1Times[Math.floor(Math.random()*3)];
    var reel2Timeout = reel2Times[Math.floor(Math.random()*3)];
    var reel3Timeout = reel3Times[Math.floor(Math.random()*3)];

    console.log(reel1Timeout + ', ' + reel2Timeout + ', ' + reel3Timeout);

    var component = this;

    setTimeout(function(){
      component.setState({reel1Paused: true});
    }, reel1Timeout);

    setTimeout(function(){
      component.setState({reel2Paused: true});
    }, reel2Timeout);

    setTimeout(function(){
      component.setState({reel3Paused: true}, component._straightenReels);
    }, reel3Timeout);

  },

  _straightenReels: function() {
    // set reels based on new offset

    // cycle through each reel and store offsets

    // order each reel by offset

    // set state: reels and spin

  },

  play2: function() {
    var reels = {};
    var reelArray = [];
    
    // there are three reels, we need to do this three times
    for (var i = 1; i <= 3; i++) {
      var currentReel = 'reel' + i;

      // push this reel's values into a temp array that we will shuffle
      reelArray.push(this.state[currentReel].top);
      reelArray.push(this.state[currentReel].middle);
      reelArray.push(this.state[currentReel].bottom);

      reelArray = this._shuffle(reelArray);

      // new randomized values
      reels[currentReel] = {
        top: reelArray[0],
        middle: reelArray[1],
        bottom: reelArray[2]
      };

      // clear the temp array
      reelArray = [];
    }

    // set reels in state, then shift the reels
    this.setState({
      shift: true,
      reel1: reels.reel1,
      reel2: reels.reel2,
      reel3: reels.reel3
    }, this._shift);

  },

  _shift: function() {
    // A jQuery solution for spinning the reels (carousel/slideshow) would be 
    // much nicer here, but we shouldn't change DOM elements directly in React
    var component = this;

    // instead, we'll shift the reels out of the field of view
    // randomize the items within the reel
    // and then shift them back
    setTimeout(function(){
      component.setState({shift: false}, component._getWinner);
    }, 100);
  },

  _shuffle: function(arr) {
    /* Fisher-Yates Shuffle */
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // while there remain elements to shuffle
    while (0 !== currentIndex) {

      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap it with the current element
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
    /* end Fisher-Yates Shuffle */
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
    this.reelClasses = 'reel list-unstyled no-shift';

    if (this.state.shift) {
      this.reelClasses = 'reel list-unstyled shift';
    }

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
