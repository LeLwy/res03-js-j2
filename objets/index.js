/*EXERCICE 1*/

/*let student = {
    name : "Louis",
    age : 33,
    grades : [12, 14, 11]
};

console.log(`Notre étudiant s'appelle ${student.name}, il est agé de ${student.age} ans et ses notes sont les suivantes: ${student.grades}.`)

/*EXERCICE 2*/

/*let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

for( let i = 0; i < student.grades.length; i++){
    
    student.average += student.grades[i] / student.grades.length;
}

console.log(student.average);

/*EXERCICE 3*/

let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for(student of students){
    
    console.log(`Notre étudiant s'appelle ${student.name}, il est agé de ${student.age} ans et sa moyenne est de ${student.average}.`)
}