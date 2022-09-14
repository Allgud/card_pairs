type MapItem = {
    cards : number
}

type DiffMap = {
    easy: MapItem,
    medium : MapItem,
    hard: MapItem
}

const difficultLevel = {
    easy: { cards: 6 },
    medium: { cards: 12 },
    hard: { cards: 18 },
}

export default difficultLevel
