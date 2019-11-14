import React, { createContext, FunctionComponent, ReactNode, useReducer } from "react";
import { reducer, initialState } from "./GameState";

export const AppContext = createContext<any>(null);

export const AppContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [game, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ game, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};