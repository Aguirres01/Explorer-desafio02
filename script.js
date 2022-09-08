
const students = [
    {
      name: 'André',
      firstNote: 7,
      secondNote: 8
    },
    {
      name: 'Cris',
      firstNote: 6,
      secondNote: 3
    },
    {
      name: 'Bartolomeu',
      firstNote: 9,
      secondNote: 8
    }
  ]
  
  function averages(firstNote, secondNote) {
    return (Number(firstNote) + Number(secondNote)) / 2
  }
  
  const showStudent = student => {
    if ((student.firstNote + student.secondNote) / 2 >= 7) {
      alert(
        ` O(A) aluno(a) ${student.name} teve a média: ${averages(
        student.firstNote,
        student.secondNote)}
  Parabéns ${student.name}!!! Você foi aprovado(a) no concurso!!!
        `
      )
    } else {
      alert(
        `O(A) aluno(a) ${student.name} teve a média: ${averages(
        student.firstNote,
        student.secondNote
        )} 
  Não foi dessa vez, ${student.name}. Tente novamente.
        `
      )
    }
  }
  
  for (let student of students) {
    showStudent(student)
  }
  