const names = [];
const students = [
    {id:'10', name:'Mamun'},
    {id:'11', name:'Mannan'},
    {id:'12', name:'Faysal'},
    {id:'13', name:'Fajle'},
    {id:'14', name:'Saiful'},
];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    names.push(element.name);
}

const allName = students.map(s => s.name);
//console.log(allName);
const smallest = students.filter(s => s.id > 13);
console.log(smallest);

