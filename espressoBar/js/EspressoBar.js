var EspressoBar = React.createClass({
  getInitialState: function() {
    return {
      winner: '',
      prize: '',
      completed: false,
      shift: false,
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
      <div className="container-fluid">
        <div className="text-center">
          <button id="btn-play" onClick={this.play} className={this.buttonClasses} disabled={this.state.completed}>Play the Thumbtack Espresso Machine!</button>
        </div>
        <div id="prize" className={this.prizeClasses}>
          <h2>You win a cup of {this.state.winner}!</h2>
          <img src={this.state.prize} /><br />
          <button onClick={this._hidePrize} className="btn btn-primary">Continue</button>
        </div>
        <div className="container game-container">
          <Reel className={this.reelClasses} hasWinner={this.state.completed} top={this.state.reel1.top} middle={this.state.reel1.middle} bottom={this.state.reel1.bottom} />
          <Reel className={this.reelClasses} hasWinner={this.state.completed} top={this.state.reel2.top} middle={this.state.reel2.middle} bottom={this.state.reel2.bottom} />
          <Reel className={this.reelClasses} hasWinner={this.state.completed} top={this.state.reel3.top} middle={this.state.reel3.middle} bottom={this.state.reel3.bottom} />
        </div>
      </div>
    )
  }
});

var Reel = React.createClass({
  render: function() {
    this.classes = this.props.className;

    if (this.props.hasWinner) {
      this.classes = this.classes + ' border-success';
    }

    return (
      <div className="col-xs-4">
        <ul id={this.props.id} className={this.classes}>
          <li className="reel-item reel-top"><img className="img-responsive" src={this.props.top} /></li>
          <li className="reel-item reel-middle"><img className="img-responsive" src={this.props.middle} /></li>
          <li className="reel-item reel-bottom"><img className="img-responsive" src={this.props.bottom} /></li>
        </ul>
      </div>
    )
  }
});

React.render(<EspressoBar/>, document.getElementById('react-container'));
