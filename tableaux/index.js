/*EXERCICE 1*/

/*let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];

for(let i =0; i < animals.length; i++){
    
    console.log(animals[i]);
}

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];

for(god of gods){
    
    console.log(god);
}
/*EXERCICE 2*/

/*let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

for(let i =0; i < animals_even.length; i++){
    
    if(i%2 === 0){
        
        console.log(animals_even[i]);
    }
}

for(let i =0; i < animals_odd.length; i++){
    
    if(i%2 !== 0){
        
        console.log(animals_odd[i]);
    }
}

/*EXERCICE 3*/

/*let numbers = [10, 11, 15, 6];

let sum = 0;

for(number of numbers){
    
    sum += number;
}

    console.log(sum);
    
/*EXERCICE 4*/

let grades = [[20, 10, 16], [15, 20], [13, 18, 8]];

let average = 0;

let totalLength = 0;

for(grade of grades){
    
    totalLength += grade.length;
    
    for(rate of grade){
        
        average += rate;
    }
}

console.log(average / totalLength);