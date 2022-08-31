const cardsCount = 36

function createArray() {
    return Array(cardsCount)
        .join(0)
        .split(0)
        .map((_, i) => i + 1)
}

function shuffleArray(arr) {
    let j, temp
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }
    return arr
}

export const dificultLevel = {
    1: 6,
    2: 12,
    3: 18,
}

export function getRandomNumbersArray(number) {
    const arr = shuffleArray(createArray())
    const array1 = arr.slice(0, number)
    const doubleArray = array1.concat(array1)
    return shuffleArray(doubleArray)
}
