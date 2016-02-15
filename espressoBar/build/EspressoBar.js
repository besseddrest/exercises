var EspressoBar = React.createClass({displayName: "EspressoBar",
  getInitialState: function() {
    return {
      headline: 'Espresso Bar',
      winner: '',
      article: 'a',
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
    $('#prize').hide();
    $('.reel-middle').removeClass('border-success');

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

    console.log(test);

    // if middle values match winner, render the prize
    if (reel2Val.indexOf(winner) > -1 && reel3Val.indexOf(winner) > -1) {
      this.renderPrize(winner);
    }
  },

  renderPrize: function(str) {
    $('.reel-middle').addClass('border-success');
    $('#prize').fadeIn();
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, this.state.headline), 
        React.createElement(Reel, {top: this.state.reel1.top, middle: this.state.reel1.middle, bottom: this.state.reel1.bottom}), 
        React.createElement(Reel, {top: this.state.reel2.top, middle: this.state.reel2.middle, bottom: this.state.reel2.bottom}), 
        React.createElement(Reel, {top: this.state.reel3.top, middle: this.state.reel3.middle, bottom: this.state.reel3.bottom}), 
        React.createElement("button", {onClick: this.play, className: "btn btn-primary"}, "Play!"), 
        React.createElement("span", {id: "prize"}, 
          "Congrats! You won ", this.state.article, " ", this.state.winner, "!"
        )
      )
    )
  }
});

var Reel = React.createClass({displayName: "Reel",
  render: function() {
    return (
      React.createElement("div", {className: "col-xs-4"}, 
        React.createElement("ul", {className: "list-unstyled"}, 
          React.createElement("li", {className: "reel reel-top"}, React.createElement("img", {className: "img-responsive", src: this.props.top})), 
          React.createElement("li", {className: "reel reel-middle"}, React.createElement("img", {className: "img-responsive", src: this.props.middle})), 
          React.createElement("li", {className: "reel reel-bottom"}, React.createElement("img", {className: "img-responsive", src: this.props.bottom}))
        )
      )
    )
  }
});

React.render(React.createElement(EspressoBar, null), document.getElementById('react-container'));