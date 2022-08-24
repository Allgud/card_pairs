const levelTemplate = {
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

const gameTemplate = {
    tag: 'div',
    classNames: ['game__screen'],
    content: [
        {
            tag: 'div',
            classNames: ['screen__header'],
            content: 'Игровой экран',
        },
    ],
}
