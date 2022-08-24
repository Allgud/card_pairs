const app = document.querySelector('.app')

window.addEventListener('DOMContentLoaded', () => {
    application.renderScreen(app, levelTemplate, levelConfig)
})

const gameConfig = {
    fn: [() => {}], // Пока пустая функция, чтобы ошибки в консоль не летели
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
