import { templateEngine } from './template-engine';
import { CardDesc, Template } from './types'

export default class Card {
    element: HTMLElement;
    cardObj: CardDesc | undefined;
    card: string | undefined;
    notation: string | undefined;
    cardTemplate: Template | undefined

    constructor( element: HTMLElement, cardObj: CardDesc){
        this.element = element
        this.card = cardObj.src
        this.notation = cardObj.notation
        this.cardTemplate = {
            tag: 'div',
            classNames: ['card__container'],
            content: [
                {
                    tag: 'div',
                    classNames: ['card'],
                    attrs: {
                        'data-note': `${this.notation}`
                    },
                    content: [
                        {
                            tag: 'div',
                            classNames: ['back'],
                            content: '',
                        },
                        {
                            tag: 'div',
                            classNames: ['front'],
                            content: [
                                {
                                    tag: 'img',
                                    classNames: [''],
                                    attrs: {
                                        src: `${this.card}`,
                                        alt: `${this.notation}`
                                    },
                                    content: ''
                                },
                            ]
                        },
                    ],
                },
            ],
        } 

    }

    render() {
        this.element.append(templateEngine(this.cardTemplate))
    }
}
