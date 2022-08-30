export const levelTemplate = {
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
                            attrs: { 'data-value': '1' },
                            content: 1,
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
                            attrs: { 'data-value': '2' },
                            content: 2,
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
                            attrs: { 'data-value': '3' },
                            content: 3,
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
                    classNames: ['cards'],
                    content: '',
                },
            ],
        },
    ],
}

export const cardTemplate = {
    tag: 'div',
    classNames: ['card__container'],
    content: [
        {
            tag: 'div',
            classNames: ['card'],
            content: [
                {
                    tag: 'div',
                    classNames: ['back'],
                    content: '',
                },
                {
                    tag: 'div',
                    classNames: ['front'],
                    content: '',
                },
            ],
        },
    ],
}
