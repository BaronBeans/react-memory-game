import React, { createContext, FunctionComponent, ReactNode, useReducer, useState } from "react";
import { initialState, reducer } from "./GameState";

export const AppContext = createContext<any>(null);

export const AppContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [game, dispatch] = useReducer(reducer, initialState);

    const [locked, setLocked] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ game, dispatch, locked, setLocked }}>
            {children}
        </AppContext.Provider>
    );
};