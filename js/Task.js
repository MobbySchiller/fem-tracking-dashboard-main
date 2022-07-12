class Task {
    flag = false;
    constructor() {
        this.titles = [];
        this.daily = [];
        this.weekly = [];
        this.monthly = [];
    }

    async readJson() {
        const response = await fetch('./data.json');
        const jsondata = await response.json();
        jsondata.forEach(data => this.titles.push(data.title));
        jsondata.forEach(data => this.daily.push(data.timeframes.daily));
        jsondata.forEach(data => this.weekly.push(data.timeframes.weekly));
        jsondata.forEach(data => this.monthly.push(data.timeframes.monthly));
        this.flag = true;
    }


    getTitle(index) {
        return this.titles[index];
    }

    getDayCurrent(index) {
        return this.daily[index].current;
    }

    getDayPrevious(index) {
        return this.daily[index].previous;
    }

    getWeekCurrent(index) {
        return this.weekly[index].current;
    }

    getWeekPrevious(index) {
        return this.weekly[index].previous;
    }

    getMonthCurrent(index) {
        return this.monthly[index].current;
    }

    getMonthPrevious(index) {
        return this.monthly[index].previous;
    }
}

export const task = new Task();