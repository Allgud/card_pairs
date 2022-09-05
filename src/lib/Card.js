import { templateEngine } from './template-engine'

export default class Card {
    constructor(element, card) {
        this.element = element
        this.card = card.src
        this.notation = card.notation
        this.render()
    }

    createCard() {
        const template = Card.template
        const front = template.content[0].content[1]
        front.content = {
            tag: 'img',
            classNames: '',
            attrs: {
                src: this.card,
                'data-note': this.notation,
                alt: this.notation,
            },
            content: '',
        }
        return template
    }

    render() {
        this.element.appendChild(templateEngine(this.createCard()))
    }
}

Card.template = {
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
