import { templateEngine } from './template-engine'
import { HtmlElementTemplate, Config, App } from './types'

const application: App = {
    renderScreen: function (block: HTMLElement, template: HtmlElementTemplate, config: Config): void {
        block.textContent = ''
        block.appendChild(templateEngine(template))

        config.fn.forEach((fn: Function) => fn())
    },
}

export default application
