import { Difficult } from './types'

const difficultLevel: Difficult = {
    easy: { cards: 6 },
    medium: { cards: 12 },
    hard: { cards: 18 },
}

export const resultData = {
    win: {
        src: './assets/win__icon.png',
        alt: 'Победа',
        content: 'Вы победили!'
    },
    lose: {
        src: './assets/lose__icon.png',
        alt: 'Поражение',
        content: 'Вы проиграли!'
    }
}

export default difficultLevel 
