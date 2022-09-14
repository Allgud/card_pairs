import { templateEngine } from './template-engine'
import { Template, Config } from './types'

const application = {
    renderScreen: function (block: HTMLElement, template: Template, config: Config): void {
        block.textContent = ''
        block.appendChild(templateEngine(template))

        config.fn.forEach((fn: Function) => fn())
    },
}

export default application
