async function anyFunction() {
  try {
   // undefined.find();
    const emailError = new Error("Email already exists");
    throw emailError;
  } catch (error) {
    errorHandler(error);
  }
}
anyFunction();

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

console.log("done");
