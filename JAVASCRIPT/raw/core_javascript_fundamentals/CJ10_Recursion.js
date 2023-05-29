/**
 * Recursion
 * The process of solving a computational problem where solution depends on calling
 * the smaller breakdown of the problem solution repeatedly until specific conditions
 * are met.
 * 
 * 
 */

 let user = {
    name: "Ajinkya",
    address:{
        personal: {
            city: "Akola",
            state: "Maharashtra"
        },
        official: {
            city: "Nagpur",
            area: {
                mandmark: "MIHAN"
        }
    }
}
}

let resultObj = {};

let solutionFunction = function(obj, parent){
    for(key in obj){
        if(typeof obj[key]==='object'){
            solutionFunction(obj[key], `${parent}_${key}`);
        }else{
            resultObj[`${parent}_${key}`]=obj[key];
        }
    }
}

solutionFunction(user, "user");
console.log(resultObj);