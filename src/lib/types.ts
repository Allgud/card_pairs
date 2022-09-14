type MapItem = {
    cards : number
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

export type DiffMap = {
    easy: MapItem,
    medium : MapItem,
    hard: MapItem
}