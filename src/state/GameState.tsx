import { Game, ICard } from "./Game";

const initialState = new Game();

const reducer = (state: Game, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case "NEW_GAME":
            return new Game();
        case "SHOW_HIDE_CARD":
            return new Game(state.deck.map(c => {
                if (c.value === action.payload.value) {
                    c.visible = !action.payload.visible;
                }
                return c;
            }));
        case "MATCH_CARDS":
            const gameOver = state.deck.filter((c: ICard) => !c.matched).length === 4;
            if (gameOver) {
                return new Game(state.deck.map(c => {
                    c.matched = true;
                    return c;
                }));
            }
            return new Game(state.deck.map(c => {
                if (c.visible) {
                    c.matched = true;
                    c.visible = false;
                }
                return c;
            }));
        case "MISMATCH_CARDS":
            return new Game(state.deck.map(c => {
                if (c.visible) {
                    c.mismatched = true;
                    c.visible = false;
                }
                return c;
            }));
        case "RESET_MISMATCHED_CARDS":
            return new Game(state.deck.map(c => {
                if (c.mismatched) {
                    c.mismatched = false;
                }
                return c;
            }));
        case "HIDE_ALL":
            return new Game(state.deck.map(c => ({ ...c, visible: false, mismatched: false })));
        case "FAIL":
            return new Game(state.deck.map(c => {
                if (action.payload.includes(c.value)) {
                    c.mismatched = true;
                }
                return c;
            }));
        default:
            return state;
    }
};

export { initialState, reducer };

