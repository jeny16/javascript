// imediate invoked function //

(function chai(){
    console.log(`DB CONNECED`);
}) ();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})("jeny")