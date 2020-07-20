const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


fetch(TRAINERS_URL)
.then(resp => resp.json())
.then( trainersObject => {renderAllTeams(trainersObject)})


function renderAllTeams(trainersObject) {
    trainersObject.forEach(trainer => {renderATeam(trainer)
         });
}

function renderATeam(trainer) {
    let div = document.createElement('div')
    div.className = 'card'
    div.dataset.number = trainer.id

    let button = document.createElement('button')
    button.dataset.number = trainer.id
    
    let ul = document.createElement('ul')
    
    let li = document.createElement('li')

    let classButton = document.createElement('button')
    classButton.className = 'release'
    classButton

    li.insertAdjacentElement("afterbegin", classButton)





}