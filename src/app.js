import {
    levelTemplate,
    gameTemplate,
    finalScreenTemplate,
} from './lib/templates'
import application from './lib/application'
import { getRandomNumbersArray, checkLevel } from './lib/helpers'
import difficultLevel from './lib/constants'
import { resultData } from './lib/constants'
import cards from './lib/cards'
import '../src/style.css'
import Card from './lib/Card'
import Timer from './lib/Timer'
import { templateEngine } from './lib/template-engine'

const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
    application.renderScreen(app, levelTemplate, levelConfig)
})

const levelConfig = {
    fn: [levelListener],
}

const gameConfig = {
    fn: [dealCards, showCards, createTimer],
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
        setTimeout(() => {
            app.appendChild(templateEngine(createFinalTemplate('lose'))), 1000
        })
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
    cardsField.addEventListener('click', ({ target }) => {
        cardsCompare(target.parentNode)
        checkAllCards(cardsField)
    })
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

function createTimer() {
    const minutesEl = document.querySelector('.timer__minutes')
    const secondsEl = document.querySelector('.timer__seconds')

    const timer = new Timer(minutesEl, secondsEl)
    application.timer = timer
}

function handleTimer(string) {
    const { gameTime, timer } = application

    if (string === 'start') {
        application.timer.start()
    }

    if (string === 'stop') {
        application.timer.stop()
    }
}

function checkAllCards(field) {
    const allFixedCards = field.querySelectorAll('.card--fixed')
    const { cards } = difficultLevel[application.level]

    if (allFixedCards.length === cards) {
        application.timer.stop()
        setTimeout(() => {
            app.appendChild(templateEngine(createFinalTemplate('win'))), 1000
        })
    }
}

function createFinalTemplate(status) {
    const gamescreen = document.querySelector('.gamescreen')
    const props = resultData[status]
    const template = finalScreenTemplate
    const { timer } = application
    const time = `${timer.getMinutes()}.${timer.getSeconds()}`

    template.content[0].content[0].attrs = {
        src: props.src,
        alt: props.alt,
    }
    template.content[0].content[1].content = props.content
    template.content[0].content[2].content[1].content = time

    gamescreen.classList.add('opacity')

    return template
}
