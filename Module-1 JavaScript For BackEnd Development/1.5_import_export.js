console.log("Default: ", module);

function errorHandler(error) {
  //console.log("Error: ",error);
  const { name, message, stack } = error;

  console.log("name: ", name);
  console.log("Message: ", message);
  // console.log("Stack:  ", stack);

  //   logger.error({
  //     name,
  //     message,
  //     stack,
  //   });

  //   console.log("Internal server error!");
}

// default exports
//module.exports = errorHandler;

// example any other function like
function tow() {
  console.log("tow");
}

// name exports or multiple function access exports
/* module.exports.errorHandler = errorHandler;
module.exports.tow = tow; */

// es6
module.exports = {
  errorHandler,
  tow,
};

console.log("Name Exports: ", module);
