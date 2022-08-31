import { templateEngine } from './lib/template-engine'
import { levelTemplate, gameTemplate, cardTemplate } from './lib/templates'
import application from './lib/application'
import { dificultLevel, getRandomNumbersArray } from './lib/helpers'
import cards from './lib/cards'
import '../src/style.css'

const app = document.querySelector('.app')

// window.addEventListener('DOMContentLoaded', () => {
//     application.renderScreen(app, levelTemplate, levelConfig)
// })

const gameConfig = {
    fn: [dealCards, cardsControl],
}

const levelConfig = {
    fn: [levelListener],
}

function levelListener() {
    const levelList = document.querySelector('.level__list')
    const startBtn = document.querySelector('.btn')

    levelList.addEventListener('click', ({ target }) => {
        levelList.childNodes.forEach((el) => {
            el.classList.remove('active')
        })
        target.parentNode.classList.add('active')
        application.level = target.dataset.value
    })

    startBtn.addEventListener('click', () => {
        application.renderScreen(app, gameTemplate, gameConfig)
    })
}

function cardsControl() {
    const cards = document.querySelector('.cards__field')
    const allCards = cards.querySelectorAll('.card')
    allCards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('card--open')
        })
    })
}

function dealCards() {
    const cardsField = document.querySelector('.cards__field')

    for (let i = 0; i < dificultLevel[application.level]; i++) {
        cardsField.appendChild(templateEngine(cardTemplate))
    }
}

cardsControl()
