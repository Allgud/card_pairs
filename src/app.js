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
        console.log(application.level)
    })
}

function cardsControl() {
    const cards = document.querySelector('.cards')
    const allCards = cards.querySelectorAll('.card')
    allCards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('card--open')
        })
    })
}

function dealCards() {
    const cards = document.querySelector('.cards')

    for (let i = 0; i < 18; i++) {
        cards.appendChild(templateEngine(cardTemplate))
    }
}
