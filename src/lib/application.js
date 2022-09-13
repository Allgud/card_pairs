import { templateEngine } from './template-engine'

const application = {
    renderScreen: function (block, template, config) {
        block.textContent = ''
        block.appendChild(templateEngine(template))

        config['fn'].forEach((fn) => fn())
    },
}

export default application
