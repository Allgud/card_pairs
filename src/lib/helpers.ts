import difficultLevel from './constants'

const MAX_CARD_COUNT: number = 36 as const

function createArray(): number[] {
    return Array(MAX_CARD_COUNT)
        .join('0')
        .split('0')
        .map((_, i) => i + 1)
}

function shuffleArray(arr: number[]): number[] {
    const arrCopy = arr.slice(0)
    let j, temp
    for (let i = arrCopy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arrCopy[j]
        arrCopy[j] = arrCopy[i]
        arrCopy[i] = temp
    }
    return arrCopy
}

export function getRandomNumbersArray(number: number): number[] {
    const arr = shuffleArray(createArray())
    const array1 = arr.slice(0, number)
    const doubleArray = array1.concat(array1)
    return shuffleArray(doubleArray)
}

export function checkLevel(node: HTMLElement, num: number): void {
    const level2 = difficultLevel.medium.cards

    num === level2 && node.classList.add('level2')
}
