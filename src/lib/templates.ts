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

export const gameTemplate: Template = {
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
                    content: [
                        {
                            tag: 'span',
                            classNames: ['timer__minutes'],
                            content: '00.'
                        },
                        {
                            tag: 'span',
                            classNames: ['timer__seconds'],
                            content: '00'
                        }
                    ],
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

export const finalScreenTemplate: Template = {
    tag: 'div',
    classNames: ['final__screen'],
    content: [
        {
            tag: 'div',
            classNames: ['final__box'],
            content: [
                {
                    tag: 'img',
                    classNames: ['final__img'],
                    content: ''
                },
                {
                    tag: 'h2',
                    classNames: ['final__title'],
                    content: 'Вы выиграли!', 
                },
                {
                    tag: 'div',
                    classNames: ['final__time'],
                    content: [
                        {
                            tag: 'h3',
                            classNames: ['time__title'],
                            content: 'Затраченное время:'
                        },
                        {
                            tag: 'div',
                            classNames: ['final__timer'],
                            content: '00.00',
                        }
                    ]
                },
                {
                    tag: 'button',
                    classNames: ['btn', 'final__btn'],
                    content: 'Играть снова',
                }
            ]
        }

    ]
}
