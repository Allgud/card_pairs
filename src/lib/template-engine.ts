import { HtmlElementTemplate } from "./types"

export function templateEngine(block: HtmlElementTemplate) {
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
        const cls = block.classNames.filter(Boolean)
        cls.forEach(el => element.classList.add(el))
    }

    if (block.attrs) {
        const entries = Object.entries(block.attrs)

        entries.forEach((entry) => {
            const [key, value] = entry
            element.setAttribute(key, block.attrs ? value : '')
        })
    }

    const content = templateEngine(block.content)

    element.appendChild(content)

    return element
}
