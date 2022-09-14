import { Template } from './types'

export const levelTemplate: Template = {
    tag: 'div',
    classNames: ['level__choice'],
    content: [
        {
            tag: 'h2',
            classNames: ['level__title'],
            content: 'Выбери сложность',
        },
        {
            tag: 'ul',
            classNames: ['level__list'],
            content: [
                {
                    tag: 'li',
                    classNames: ['level__item'],
                    content: [
                        {
                            tag: 'button',
                            classNames: ['level__button'],
                            attrs: { 'data-value': 'easy' },
                            content: '1',
                        },
                    ],
                },
                {
                    tag: 'li',
                    classNames: ['level__item'],
                    content: [
                        {
                            tag: 'button',
                            classNames: ['level__button'],
                            attrs: { 'data-value': 'medium' },
                            content: '2',
                        },
                    ],
                },
                {
                    tag: 'li',
                    classNames: ['level__item'],
                    content: [
                        {
                            tag: 'button',
                            classNames: ['level__button'],
                            attrs: { 'data-value': 'hard' },
                            content: '3',
                        },
                    ],
                },
            ],
        },
        {
            tag: 'button',
            classNames: ['btn', 'choice__btn'],
            content: 'Старт',
        },
    ],
}

export const gameTemplate = {
    tag: 'div',
    classNames: ['gamescreen'],
    content: [
        {
            tag: 'div',
            classNames: ['game__header'],
            content: [
                {
                    tag: 'div',
                    classNames: ['game__timer'],
                    content: '00.00',
                },
                {
                    tag: 'button',
                    classNames: ['btn', 'btn__restart'],
                    content: 'Начать заново',
                },
            ],
        },
        {
            tag: 'div',
            classNames: ['game__board'],
            content: [
                {
                    tag: 'div',
                    classNames: ['cards__field'],
                    content: '',
                },
            ],
        },
    ],
}
