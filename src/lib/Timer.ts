export default class Timer {
    minEl: HTMLElement;
    secEl: HTMLElement;
    minutes: number;
    seconds: number;
    interval: NodeJS.Timer | undefined

    constructor(minutesEl: HTMLElement, secondsEl: HTMLElement) {
        this.minEl = minutesEl
        this.secEl = secondsEl
        this.seconds = 0
        this.minutes = 0
    }

    start() {
        this.interval = setInterval(() => {
            this.seconds += 1
            this.render()
        }, 1000)
    }

    stop() {
        clearInterval(this.interval)
    }
    
    render() {
        if (this.seconds <= 9) {
            this.secEl.textContent = `0${this.seconds}`
        }

        if (this.seconds > 9) {
            this.secEl.textContent = this.seconds.toString()
        }

        if (this.minutes > 9) {
            this.minEl.textContent = this.minutes.toString()
        }

        if (this.seconds > 59) {
            this.minutes++
            this.minEl.textContent = `0${this.minutes}.`
            this.seconds = 0
            this.secEl.textContent = `0${this.seconds}`
        }
    }
}