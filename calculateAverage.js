
const students = [
    {
    name: 'João',
    firstNote:8,
    secondNote:4
    },
    
    {
    name: 'Letícia',
    firstNote:9.5,
    secondNote:9.5
    },
    
    {
    name: 'Mary',
    firstNote:9,
    secondNote:9
    },
    
    {
    name: 'Josué',
    firstNote:5.5,
    secondNote:5.5
    }
]

for (let student of students){

    function calcAverage(firstNote, secondNote,){
        const average = ((firstNote + secondNote)/2).toFixed(1)
         return average
    }

let studentAverage = (calcAverage(student.firstNote, student.secondNote))

    if(studentAverage >=7){
        alert(`A média do aluno(a) ${student.name} é: ${calcAverage(student.firstNote, student.secondNote)}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso`)
    
    }else{
        alert(`A média do aluno(a) ${student.name} é: ${calcAverage(student.firstNote, student.secondNote)}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
   
    }
}