import Timer from './Timer'

export type App = {
    renderScreen: Function,
    level?: string,
    currentCard?: string | '',
    interval?: number,
    timer?: Timer | undefined
}

export type Config = {
    fn: Array<Function> 
}

export type Template = {
    tag: string,
    classNames: string[],
    attrs?: {
        src?: string,
        alt?: string,
        'data-note'?: string,
        'data-value'?: string
    },
    content: any
}

export type CardDesc = {
    src: string,
    notation: string
}

export type DifficultMap = {
    [index: string] : {cards: number}
}

export type ResultMap = {
    [index: string] : {
        src: string,
        alt: string,
        content: string
    }
}