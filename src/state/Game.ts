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

    /**
     * showHideCard
     */
    public showHideCard(valueToToggle: number) {
        this.deck.map(c => {
            if (c.value === valueToToggle) {
                c.visible = !c.visible;
            }
            return c;
        });

        return this;
    }

    /**
     * matchCards
     */
    public matchCards() {
        const gameOver = this.deck.filter((c: ICard) => !c.matched).length === 4;
        if (gameOver) {
            this.deck.map(c => {
                c.matched = true;
                return c;
            })
            return this;
        }

        this.deck.map(c => {
            if (c.visible) {
                c.matched = true;
                c.visible = false;
            }
            return c;
        });

        return this;
    }

    /**
     * misMatchCards
     */
    public misMatchCards() {
        this.deck.map(c => {
            if (c.visible) {
                c.mismatched = true;
                c.visible = false;
            }
            return c;
        });

        return this;
    }

    /**
     * resetMisMatchedCards
     */
    public resetMisMatchedCards() {
        this.deck.map(c => {
            if (c.mismatched) {
                c.mismatched = false;
            }
            return c;
        });

        return this;
    }

    private randomShuffle = (deck: number[]) => deck.sort((a, b) => 0.5 - Math.random());
};