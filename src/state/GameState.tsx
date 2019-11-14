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
        case "HIDE_ALL":
            return new Game(state.deck.map(c => ({ ...c, visible: false, mismatched: false })));
        case "MATCH_THEM":
            return new Game(state.deck.map(c => {
                if (action.payload.includes(c.value)) {
                    c.matched = true;
                }
                return c;
            }));
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