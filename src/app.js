import {
    levelTemplate,
    gameTemplate,
    finalScreenTemplate,
} from './lib/templates'
import application from './lib/application'
import { getRandomNumbersArray, checkLevel } from './lib/helpers'
import difficultLevel from './lib/constants'
import cards from './lib/cards'
import '../src/style.css'
import Card from './lib/Card'
import Timer from './lib/Timer'

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
        handleTimer('stop')
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
    setTimeout(() => {
        hideCards(allCards)
        handleTimer('start')
    }, 2000)
}

function hideCards(arr) {
    arr.forEach((item) => item.classList.remove('card--open'))
}

function handleTimer(string) {
    const minutesEl = document.querySelector('.timer__minutes')
    const secondsEl = document.querySelector('.timer__seconds')

    const timer = new Timer(minutesEl, secondsEl)

    if (string === 'start') {
        timer.start()
    }

    if (string === 'stop') {
        timer.stop()
    }
}
