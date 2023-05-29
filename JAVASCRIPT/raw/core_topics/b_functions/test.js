function funcName(parameter1="deafult value", parameter2=someFunction(), ..., parameterN){
      // body
      let variableA;  // block scope
      var variableB;  // function scope
      return something; // by default returns undefined 
  }

funcName(argument1, argument2, ..., argumentN); // calling function, if arg is not provided, it will be undefined in function operations.