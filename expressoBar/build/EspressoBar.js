var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      winner: '',
      reel1: {
        top: 'coffee maker',
        middle: 'teapot',
        bottom: 'espresso machine',
      },
      reel2: {
        top: 'coffee filter',
        middle: 'tea strainer',
        bottom: 'espresso tamper'
      },
      reel3: {
        top: 'coffee grounds',
        middle: 'loose tea',
        bottom: 'espresso beans'
      }
    };
  },

  play: function() {
    // TODO: hide prize before we play another turn
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

    // set reels in state, then call getWinner();
    this.setState({
      reel1: reels.reel1,
      reel2: reels.reel2,
      reel3: reels.reel3
    }, this.getWinner);

  },

  _shuffle: function(arr) {
    /* Fisher-Yates Shuffle */
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
    /* end Fisher-Yates Shuffle */
  },

  getWinner: function() {
    // we need a value that we can compare against all reels
    var reel1 = this.state.reel1.middle;
    var winners = ['coffee', 'espresso', 'tea'];

    // set the winner, then check the other reels
    for (var i = 0; i < winners.length; i++) {
      if (reel1.indexOf(winners[i]) > -1) {
        this.setState({winner: winners[i]}, this.checkWinner);
        break;
      }
    }
  },

  checkWinner: function() {
    var winner = this.state.winner;
    var reel2Val = this.state.reel2.middle;
    var reel3Val = this.state.reel3.middle;

    // if middle values match winner, render the prize
    if (reel2Val.indexOf(winner) > -1 && reel3Val.indexOf(winner) > -1) {
      this.renderPrize(winner);
    }
  },

  renderPrize: function(str) {
    // show the prize
    alert('you won a ' + str);
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Reel, {id: "reel1", top: this.state.reel1.top, middle: this.state.reel1.middle, bottom: this.state.reel1.bottom}), 
        React.createElement(Reel, {id: "reel2", top: this.state.reel2.top, middle: this.state.reel2.middle, bottom: this.state.reel2.bottom}), 
        React.createElement(Reel, {id: "reel3", top: this.state.reel3.top, middle: this.state.reel3.middle, bottom: this.state.reel3.bottom}), 
        React.createElement("button", {onClick: this.play, className: "btn btn-primary"}, "Play!")
      )
    )
  }
});

var Reel = React.createClass({displayName: "Reel",
  render: function() {
    return (
      React.createElement("div", {className: "col-md-4"}, 
        React.createElement("ul", {id: this.props.id, className: "list-unstyled"}, 
          React.createElement("li", null, this.props.top), 
          React.createElement("li", null, this.props.middle), 
          React.createElement("li", null, this.props.bottom)
        )
      )
    )
  }
});

React.render(React.createElement(EspressoBar, null), document.getElementById('react-container'));
