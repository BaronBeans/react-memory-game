export class Game {
    public deck: number[];
    public visibility: boolean[];

    constructor() {
        this.deck = this.randomShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        // this.deck = this.randomShuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
        this.visibility = this.deck.map(d => (false));
    }

    private randomShuffle = (deck: number[]) => deck.sort((a, b) => 0.5 - Math.random());
};