// ########## iterations ############

for (let i = 1; i < 10; i++) {
    console.log(`outer loop value : ${i}`);
    for(let j = 1; j < 10; j++){
        // console.log(`inner loop ${j} outer value ${i} `); 
        console.log(i + '*' + j + '=' + i*j );
      
        
    }
    
}

myArr = ['flash', 'batman', 'spider-man', 'iron-man']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}