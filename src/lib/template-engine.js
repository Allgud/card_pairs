export function templateEngine(block) {
    if (block === undefined || block === null) {
        return document.createTextNode('')
    }

    if (typeof block === 'string' || typeof block === 'number') {
        return document.createTextNode(block)
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()

        block.forEach((item) => {
            const el = templateEngine(item)

            fragment.appendChild(el)
        })

        return fragment
    }

    const element = document.createElement(block.tag)

    if (block.classNames) {
        element.classList.add(...[].concat(block.classNames.filter(Boolean)))
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)

        keys.forEach((key) => {
            element.setAttribute(key, block.attrs[key])
        })
    }

    const content = templateEngine(block.content)

    element.appendChild(content)

    return element
}
