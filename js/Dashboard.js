import { task } from './Task.js';

class Dashboard {
    constructor({dayBtn, weekBtn, monthBtn, taskLabels}) {
        this.dayBtn = dayBtn;
        this.weekBtn = weekBtn;
        this.monthBtn = monthBtn;
        this.taskLabels = taskLabels;
    }

    async init() {
        await task.readJson();
        if(task.flag) {
            for (let i = 0; i < this.taskLabels.length; i++) {
                this.taskLabels[i].textContent = task.getTitle(i);
            }
        };
        this.dayBtn.addEventListener('click', (e) => this.displayDayData(e));
        this.weekBtn.addEventListener('click', (e) => this.displayWeekData(e));
        this.monthBtn.addEventListener('click', (e) => this.displayMonthData(e));
    }

    displayDayData(e) {
        this.changeStyle(e);
        const currents = document.querySelectorAll('[data-current]');
        const previouses = document.querySelectorAll('[data-previous]');
        for (let i = 0; i < currents.length; i++) {
            currents[i].textContent = `${task.getDayCurrent(i)}hrs`;
        };
        for (let j = 0; j < previouses.length; j++) {
            previouses[j].textContent = `${task.getDayPrevious(j)}hrs`;
        };
    }

    displayWeekData(e) {
        this.changeStyle(e);
        const currents = document.querySelectorAll('[data-current]');
        const previouses = document.querySelectorAll('[data-previous]');
        for (let i = 0; i < currents.length; i++) {
            currents[i].textContent = `${task.getWeekCurrent(i)}hrs`;
        };
        for (let j = 0; j < previouses.length; j++) {
            previouses[j].textContent = `${task.getWeekPrevious(j)}hrs`;
        };
    }

    displayMonthData(e) {
        this.changeStyle(e);
        const currents = document.querySelectorAll('[data-current]');
        const previouses = document.querySelectorAll('[data-previous]');
        for (let i = 0; i < currents.length; i++) {
            currents[i].textContent = `${task.getMonthCurrent(i)}hrs`;
        };
        for (let j = 0; j < previouses.length; j++) {
            previouses[j].textContent = `${task.getMonthPrevious(j)}hrs`;
        };
    }

    changeStyle(e) {
        this.dayBtn.classList.remove('color');
        this.weekBtn.classList.remove('color');
        this.monthBtn.classList.remove('color');
        e.target.classList.add('color');
    }
}

const dashboard = new Dashboard({
    dayBtn: document.querySelector('[data-day]'),
    weekBtn: document.querySelector('[data-week]'),
    monthBtn: document.querySelector('[data-month]'),
    taskLabels: document.querySelectorAll('[data-label]'),
})

dashboard.init();