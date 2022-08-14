class GuessingGame {
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.ans = Math.round((this.min + this.max) / 2);
        return this.ans;
    }

    lower() {
        this.max = this.ans;
    }

    greater() {
        this.min = this.ans;
    }
}

module.exports = GuessingGame;
