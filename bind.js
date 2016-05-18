// Function.prototype.bind = function() {...};

function bind(fn, context, args) {
  return function() {    
    arguments // {0: Event(), 1: 'dog', 2: 'cat}
    var passedArgs = [].slice.call(arguments, 0);
    
    var newArray = args.concat(passedArgs);
    
  	fn.apply(context, newArray);
  	//e.fn(context, args);
  };
}
