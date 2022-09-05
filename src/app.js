import { templateEngine } from './lib/template-engine'
import { levelTemplate, gameTemplate, cardTemplate } from './lib/templates'
import application from './lib/application'
import { dificultLevel, getRandomNumbersArray } from './lib/helpers'
import cards from './lib/cards'
import '../src/style.css'
import Card from './lib/Card'

const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
    application.renderScreen(app, levelTemplate, levelConfig)
})

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
    const allCards = document.querySelectorAll('.card')

    allCards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('card--open')
        })
    })
}

function checkLevel(node, number) {
    const level2 = dificultLevel[2]

    number === level2 && node.classList.add('level2')
}

function dealCards() {
    const cardsField = document.querySelector('.cards__field')
    const number = dificultLevel[application.level]
    const randomNumbers = getRandomNumbersArray(number / 2)

    checkLevel(cardsField, number)
    randomNumbers.forEach((num) => new Card(cardsField, cards[num]))
}
