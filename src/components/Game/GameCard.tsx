import { Card, CardContent } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { AppContext } from "../../state";

const GameCard: FC<{ value: number, isVisible: boolean, isMatched: boolean }> = ({ value, isVisible, isMatched }) => {
    const { dispatch } = useContext(AppContext);

    const toggleCard = () => {
        dispatch({ type: "SHOW_HIDE_CARD", payload: { value, isVisible } })
    }

    if (isMatched) {
        return (
            <Card className="card matched" onClick={toggleCard}>
                <CardContent className="card-content">
                    {(value > 5 ? value - 5 : value)}
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="card" onClick={toggleCard}>
            <CardContent className="card-content">
                {isVisible && (value > 5 ? value - 5 : value)}
            </CardContent>
        </Card>
    )
};

export { GameCard };

