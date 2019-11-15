import { Game } from "./Game";

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
        // return state.showHideCard(action.payload.value);
        case "MATCH_CARDS":
            return state.matchCards();
        case "MISMATCH_CARDS":
            return state.misMatchCards();
        case "RESET_MISMATCHED_CARDS":
            return new Game(state.deck.map(c => {
                if (c.mismatched) {
                    c.mismatched = false;
                }
                return c;
            }));
        // return state.resetMisMatchedCards();

        default:
            return state;
    }
};

export { initialState, reducer };

