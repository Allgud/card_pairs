import { templateEngine } from './template-engine';
import { CardDesc, HtmlElementTemplate } from './types'

export default class Card {
    element: HTMLElement;
    cardObj: CardDesc | undefined;
    src?: string | undefined;
    notation: string | undefined;
    cardTemplate: HtmlElementTemplate | undefined

    constructor( element: HTMLElement, cardObj: CardDesc){
        this.element = element
        this.src = cardObj.src
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
                                        src: `${this.src}`,
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
