// Immediately Invoked Function Expressions (IIFE)


(function database(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('SmitMiyani')