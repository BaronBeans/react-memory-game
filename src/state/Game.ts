export interface ICard {
    value: number;
    visible: boolean;
    matched: boolean;
    mismatched: boolean;
}

export class Game {
    public deck: ICard[];

    constructor(deck?: ICard[]) {
        this.deck = deck || this.randomShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map(rs => ({ value: rs, visible: false, matched: false, mismatched: false } as ICard));
    }

    private randomShuffle = (deck: number[]) => deck.sort((a, b) => 0.5 - Math.random());
};