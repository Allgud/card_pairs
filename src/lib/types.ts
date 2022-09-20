import Timer from "./Timer"

export type App = {
    renderScreen: Function,
    level?: string,
    currentCard?: string | '',
    interval?: number,
    timer?: Timer
}

export type Config = {
    fn: Array<Function> 
}

export type HtmlElementTemplate = {
    tag: string,
    classNames: string[],
    attrs?: {
        [src: string]: string,
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