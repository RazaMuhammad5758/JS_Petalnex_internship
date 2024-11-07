// IF STATEMENT

let age = 15;

if(age>=18){
    console.log('you can vote');
    
}else{
    console.log("you can't vote");
    
}

let num = 20;

if (num%2 === 0){
    console.log('Given number is even');
    
}else{
    console.log('Given number is odd');
    
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ELSE IF 

let color = 'pink';

if (color === 'pink'){
    console.log('color is light');
    
}else if(color === 'yellow'){
    console.log('color is light');
    
}else{
    console.log('color is dark');
    
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var fruit = prompt('which fruit do you want');

switch (fruit) {
    case 'mango':
        console.log('150 rs per kg');
        break;
    
    case 'banana':
        console.log('100 rs dozen');
        break;

    case 'apple':
        console.log('100rs per kg');
        break;
    default:
        console.log('we dont have this fruit');
        
        break;
}
