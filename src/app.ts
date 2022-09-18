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

const app = document.querySelector('.app') as HTMLElement

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
    const levelList = document.querySelector('.level__list') as HTMLElement
    const startBtn = document.querySelector('.btn') as HTMLElement

    levelList?.addEventListener('click', (event) => {
        const target = (event.target as HTMLElement)
        for (let i=0; i<levelList.children.length; i++) {
            levelList.children[i].classList.remove('active')
        }
        target.parentElement?.classList.add('active')
        application.level = target.dataset.value
    })

    startBtn.addEventListener('click', () => {
        application.renderScreen(app, gameTemplate, gameConfig)
    })
}

function cardsCompare(card: HTMLElement) {
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
            app.appendChild(templateEngine(createFinalTemplate('lose')))
            restartBtnClick('new-game')
        }, 500)
    }
}

function dealCards() {
    const cardsField = document.querySelector('.cards__field') as HTMLElement
    const number = difficultLevel[application.level!]
    const randomNumbers = getRandomNumbersArray(number.cards / 2)

    checkLevel(cardsField, number.cards)
    restartBtnClick('same-level')
    randomNumbers.forEach((num: number) => {
        const newCard = new Card(cardsField, cards[num])
        newCard.render()
    })
    cardsField.addEventListener('click', (event) => {
        const target = (event.target as HTMLElement).parentElement
        if(target?.classList.value === 'card'){
            cardsCompare(target!)
            checkAllCards(cardsField)
        }; 
    })
}

function showCards() {
    const allCards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>

    allCards.forEach((card) => card.classList.add('card--open'))
    setTimeout(() => {
        hideCards(allCards)
        handleTimer('start')
    }, 5000)
}

function hideCards(arr: NodeListOf<HTMLDivElement>) {
    arr.forEach((item) => item.classList.remove('card--open'))
}

function createTimer() {
    const minutesEl = document.querySelector('.timer__minutes') as HTMLElement
    const secondsEl = document.querySelector('.timer__seconds') as HTMLElement

    const timer = new Timer(minutesEl, secondsEl)
    application.timer = timer
}

function handleTimer(str: string) {
    if (str === 'start') {
        application.timer?.start()
    }

    if (str === 'stop') {
        application.timer?.stop()
    }
}

function checkAllCards(field: HTMLElement) {
    const allFixedCards = field.querySelectorAll('.card--fixed')
    const level = application.level !== undefined ? application.level : ''
    const { cards } = difficultLevel[level]

    if (allFixedCards.length === cards) {
        application.timer?.stop()
        setTimeout(() => {
            app.appendChild(templateEngine(createFinalTemplate('win')))
            restartBtnClick('new-game')
        }, 800)
    }
}

function createFinalTemplate(status: string) {
    const gamescreen = document.querySelector('.gamescreen')
    const props = resultData[status]
    const template = finalScreenTemplate
    const { timer } = application
    const time = `${timer?.getMinutes()}.${timer?.getSeconds()}`

    template.content[0].content[0].attrs = {
        src: props.src,
        alt: props.alt,
    }
    template.content[0].content[1].content = props.content
    template.content[0].content[2].content[1].content = time

    gamescreen?.classList.add('opacity')

    return template
}

function restartBtnClick(restartFlag: string) {
    const restartBtns = app.querySelectorAll('.btn__restart')

    for(let i=0; i<restartBtns.length; i++) {
        restartBtns[i].addEventListener('click', () => {
            if(restartFlag === 'same-level') {  
                application.renderScreen(app, gameTemplate, gameConfig)
            }
    
            if(restartFlag === 'new-game') {
                application.renderScreen(app, levelTemplate, levelConfig)
            }
        })
    }
    
}
