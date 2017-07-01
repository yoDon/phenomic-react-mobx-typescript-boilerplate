import { action, observable } from 'mobx';

class AppState {

    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.incrementTimer();
        }, 1000);
    }

    @action incrementTimer() {
        this.timer += 1;
    }

    @action resetTimer() {
        this.timer = 0;
    }
    
}

const appState = new AppState();

export default appState;