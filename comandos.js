    const perguntas = [
        {
          pergunta: "Quem é conhecido como 'O Rei da Noite' em Game of Thrones?",
          respostas: ["Jon Snow", "Night King", "Joffrey Baratheon"],
          correta: 1
        },
        {
          pergunta: "Qual é o lema da Casa Stark?",
          respostas: ["O inverno está chegando", "Nós não semeamos", "Fogo e Sangue"],
          correta: 0
        },
        {
          pergunta: "Quem é o verdadeiro pai de Jon Snow?",
          respostas: ["Eddard Stark", "Robert Baratheon", "Rhaegar Targaryen"],
          correta: 2
        },
        {
          pergunta: "Qual é o nome do continente onde se passa a maior parte de Game of Thrones?",
          respostas: ["Westeros", "Essos", "Sothoryos"],
          correta: 0
        },
        {
          pergunta: "Quem é a mãe dos dragões?",
          respostas: ["Sansa Stark", "Cersei Lannister", "Daenerys Targaryen"],
          correta: 2
        },
        {
          pergunta: "Qual é a arma ancestral da Casa Stark?",
          respostas: ["Martelo de Robert", "Agulha", "Garras de Aço"],
          correta: 1
        },
        {
          pergunta: "Quem é conhecido como 'A Montanha' em Game of Thrones?",
          respostas: ["Gregor Clegane", "Sandor Clegane", "Brienne of Tarth"],
          correta: 0
        },
        {
          pergunta: "Qual é o apelido de Tyrion Lannister?",
          respostas: ["O Gigante", "A Cobra", "O Meio-Homem"],
          correta: 2
        },
        {
          pergunta: "Qual é o símbolo da Casa Lannister?",
          respostas: ["Leão", "Lobo", "Dragão"],
          correta: 0
        },
        {
          pergunta: "Quem foi o primeiro Rei da Noite?",
          respostas: ["Brandon Stark", "Night King", "Night's Queen"],
          correta: 2
        }
      ];
      



  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const nCorretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = nCorretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
       
        nCorretas.delete(item)
        if(estaCorreta) 
        {
          nCorretas.add(item)
        }
        else
        {

        }
      
        mostrarTotal.textContent = nCorretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    
    quizItem.querySelector('dl dt').remove()
    

    quiz.appendChild(quizItem)
}