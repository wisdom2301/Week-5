for (let step = 0; step <5; step ++){
    console.log('Walking east one step');
}

let persons = [
    {
        name: 'Benjamin',
        height: 23,
        age: 16,
    },
    {
        name: 'James',
        height: 35,
        age: 23,
    }
]
console.log(persons[0])
console.log(persons[1].name, persons[1].height, persons[1].age)
for (let i = 0; i<persons.length; i++){
    console.log(persons)
    // This is for loop method
}
persons.forEach(function(val, index, arr){
    console.log(val)
    // This is for forEach method
})
persons.map(function(val, index, arr){
    console.log(persons)
})
// This is for map method



for (let i = 0; i <=15; i++){
    if (i === 0 ){
        document.writeln(i + " is even");
console.log(i + " is even");
    }
else if (i % 2 === 0){
    document.writeln(i + " is even");
    console.log(i +  " is even");
}
    else {
        document.writeln(i + " is odd");
        console.log(i +  " is odd")
    }
}