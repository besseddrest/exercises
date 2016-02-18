var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      headline: 'Espresso Bar',
      winner: '',
      prize: '',
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
      },
      completed: false
    };
  },

  play: function() {
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
    // A jQuery solution for spinning reels would be nice here,
    // but we shouldn't directly mutate DOM elements in React

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
    var article = 'a';

    // set the winner, then check the other reels
    for (var i = 0; i < winners.length; i++) {
      if (reel1.indexOf(winners[i]) > -1) {
        if (winners[i] === 'espresso'){
          article = 'an';
        }
        this.setState({
          winner: winners[i],
          article: article
        }, this.checkWinner);
        break;
      }
    }
  },

  checkWinner: function() {
    var winner = this.state.winner;
    var reel2Val = this.state.reel2.middle;
    var reel3Val = this.state.reel3.middle;

    var test = winner + ', ' + reel2Val + ', ' + reel3Val;

    // if middle values match winner, render the prize
    if (reel2Val.indexOf(winner) > -1 && reel3Val.indexOf(winner) > -1) {
      this.setPrize(winner);
    }
  },

  setPrize: function(str) {
    var prizes = {
      'coffee': 'images/coffee.png',
      'tea': 'images/tea.png',
      'espresso': 'images/espresso.png'
    };

    this.setState({prize: prizes[str]}, this.displayPrize);
  },

  displayPrize: function() {
    setTimeout(function() {
      $('#prize').fadeIn()
    }, 500);

    this.setState({completed: true});
  },

  hidePrize: function() {
    $('#prize').fadeOut();
    this.setState({completed: false});
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        React.createElement("div", {id: "prize"}, 
          React.createElement("h2", null, "You win!"), 
          React.createElement("img", {src: this.state.prize}), React.createElement("br", null), 
          React.createElement("button", {onClick: this.hidePrize, className: "btn btn-primary"}, "Continue")
        ), 
        React.createElement(Reel, {hasWinner: this.state.completed, top: this.state.reel1.top, middle: this.state.reel1.middle, bottom: this.state.reel1.bottom}), 
        React.createElement(Reel, {hasWinner: this.state.completed, top: this.state.reel2.top, middle: this.state.reel2.middle, bottom: this.state.reel2.bottom}), 
        React.createElement(Reel, {hasWinner: this.state.completed, top: this.state.reel3.top, middle: this.state.reel3.middle, bottom: this.state.reel3.bottom}), 
        React.createElement("div", {className: "text-center"}, 
          React.createElement("button", {onClick: this.play, className: "btn btn-primary btn-lg", disabled: this.state.completed}, "Play!")
        )
      )
    )
  }
});

var Reel = React.createClass({displayName: "Reel",
  render: function() {
    this.classes = 'list-unstyled';

    if (this.props.hasWinner) {
      this.classes = this.classes + ' border-success';
    }

    return (
      React.createElement("div", {className: "col-xs-4"}, 
        React.createElement("ul", {className: this.classes}, 
          React.createElement("li", {className: "reel reel-top"}, React.createElement("img", {className: "img-responsive", src: this.props.top})), 
          React.createElement("li", {className: "reel reel-middle"}, React.createElement("img", {className: "img-responsive", src: this.props.middle})), 
          React.createElement("li", {className: "reel reel-bottom"}, React.createElement("img", {className: "img-responsive", src: this.props.bottom}))
        )
      )
    )
  }
});

React.render(React.createElement(EspressoBar, null), document.getElementById('react-container'));
