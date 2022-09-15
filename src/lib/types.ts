export type App = {
    renderScreen: Function,
    level?: string | ''
    currentCard?: string | '',
    timer: {
        minutes: string,
        seconds: string
    },
    interval?: number | undefined 
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
    content: Array<Template> | string
}

export type Difficult = {
    easy: { cards: number }
    medium : { cards: number }
    hard: { cards: number }
}

export type CardDesc = {
    src: string,
    notation: string
}

export type Cards = {
    0: CardDesc,
    1: CardDesc,
    2: CardDesc,
    3: CardDesc,
    4: CardDesc,
    5: CardDesc,
    6: CardDesc,
    7: CardDesc,
    8: CardDesc,
    9: CardDesc,
    10: CardDesc,
    11: CardDesc,
    12: CardDesc,
    13: CardDesc,
    14: CardDesc,
    15: CardDesc,
    16: CardDesc,
    17: CardDesc,
    18: CardDesc,
    19: CardDesc,
    20: CardDesc,
    21: CardDesc,
    22: CardDesc,
    23: CardDesc,
    24: CardDesc,
    25: CardDesc,
    26: CardDesc,
    27: CardDesc,
    28: CardDesc,
    29: CardDesc,
    30: CardDesc,
    31: CardDesc,
    32: CardDesc,
    33: CardDesc,
    34: CardDesc,
    35: CardDesc
}