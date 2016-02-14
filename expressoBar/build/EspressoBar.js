// TODO, having issues after reels are shuffled in play()
var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      winner: '',
      reels: {
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
      }
    };
  },

  // shuffles (randomizes) the reel values in state
  play: function() {
    var reels = {};
    var reelArray = [];
    
    // there are three reels, we need to do this three times
    for (var i = 1; i <= 3; i++) {
      var currentReel = 'reel' + i;

      // push this reel's values into a temp array that we will shuffle
      reelArray.push(this.state.reels[currentReel].top);
      reelArray.push(this.state.reels[currentReel].middle);
      reelArray.push(this.state.reels[currentReel].bottom);

      /* Fisher-Yates Shuffle */
      var currentIndex = reelArray.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = reelArray[currentIndex];
        reelArray[currentIndex] = reelArray[randomIndex];
        reelArray[randomIndex] = temporaryValue;
      }
      /* end Fisher-Yates Shuffle */

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
    this.setState({reels: reels}, this.getWinner());
  },

  getWinner: function() {
    // this is a callback, why hasn't this.state.reels updated?
    console.log(this.state.reels);

    // we need a value that we can compare against all reels
    var reel1 = this.state.reels.reel1.middle;
    var winners = ['coffee', 'espresso', 'tea'];
    for (var i = 0; i < winners.length; i++) {
      if (reel1.indexOf(winners[i]) > -1) {
        this.setState({winner: winners[i]});
        break;
      }
    }
  },

  checkWinner: function() {
    // TODO
    var winners = ['coffee', 'espresso', 'tea'];
    var winner = this.state.winner;
    var reels = this.state.reels;
    var reel1Val = reels.reel1.middle;
    var reel2Val = reels.reel2.middle;
    var reel3Val = reels.reel3.middle;

    var test = winner + ', ' + reel2Val + ', ' + reel3Val;

  },

  renderPrize: function(str) {
    alert('you won a ' + str);
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Reel, {id: "reel1", top: this.state.reels.reel1.top, middle: this.state.reels.reel1.middle, bottom: this.state.reels.reel1.bottom}), 
        React.createElement(Reel, {id: "reel2", top: this.state.reels.reel2.top, middle: this.state.reels.reel2.middle, bottom: this.state.reels.reel2.bottom}), 
        React.createElement(Reel, {id: "reel3", top: this.state.reels.reel3.top, middle: this.state.reels.reel3.middle, bottom: this.state.reels.reel3.bottom}), 
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