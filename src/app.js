import { levelTemplate, gameTemplate } from './lib/templates'
import application from './lib/application'
import { getRandomNumbersArray, checkLevel } from './lib/helpers'
import difficultLevel from './lib/constants.ts'
import cards from './lib/cards'
import '../src/style.css'
import Card from './lib/Card'

const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
    application.renderScreen(app, levelTemplate, levelConfig)
})

const levelConfig = {
    fn: [levelListener],
}

const gameConfig = {
    fn: [dealCards, showCards],
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

function cardsCompare(card) {
    card.classList.add('card--open')
    const currentCard = card.dataset.note

    if (!application.currentCard) {
        application.currentCard = currentCard
        return
    }

    if (application.currentCard && currentCard === application.currentCard) {
        application.currentCard = undefined
        const openedCards = document.querySelectorAll('.card--open')
        openedCards.forEach((card) => {
            card.classList.remove('card--open')
            card.classList.add('card--fixed')
        })
        return
    }

    if (application.currentCard && currentCard !== application.currentCard) {
        application.currentCard = undefined
        const openedCards = document.querySelectorAll('.card--open')
        setTimeout(() => {
            hideCards(openedCards)
            alert('You lose!')
        }, 800)
    }
}

function dealCards() {
    const cardsField = document.querySelector('.cards__field')
    const number = difficultLevel[application.level]
    const randomNumbers = getRandomNumbersArray(number.cards / 2)

    checkLevel(cardsField, number.cards)
    randomNumbers.forEach((num) => {
        const newCard = new Card(cardsField, cards[num])
        newCard.render()
    })
    cardsField.addEventListener('click', ({ target }) =>
        cardsCompare(target.parentNode)
    )
}

function showCards() {
    const allCards = document.querySelectorAll('.card')

    allCards.forEach((card) => card.classList.add('card--open'))
    setTimeout(() => hideCards(allCards), 2000)
}

function hideCards(arr) {
    arr.forEach((item) => item.classList.remove('card--open'))
}
