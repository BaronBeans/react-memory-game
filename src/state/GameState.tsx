import { Game } from "./Game";

const initialState = new Game();

const reducer = (state: Game, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "NEW_GAME":
            return new Game();
        // case "SHOW_HIDE_CARD":
        //     return { ...state, visibility: [...state.visibility,] }
        default:
            return state;
    }
};

export { initialState, reducer };