// let myName = "jeny   "
// let myChannel = "jclick   "

// console.log(myName.trueLength);

let heros = ['thor', 'spiderman']

let heropower  = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
          
    }
    
}


Object.prototype.jeny = function(){
    console.log("jeny is present in all objects");
}

Array.prototype.jenis = function(){
    console.log("jeny is only in array!!");
    
}


// heros.jeny()
// heropower.jeny()

heros.jenis()
// heropower.jenis() array prototype cant access the object 


/*
here is the tree of that

function
            ==> 
array       ==>         OBJECT      ==>>           NULL
            ==>
string
*/

//inheritance

