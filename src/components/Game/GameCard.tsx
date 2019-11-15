import { Card, CardContent } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { AppContext } from "../../state";
import { ICard } from "../../state/Game";

const GameCard: FC<{ value: number, isVisible: boolean, isMatched: boolean, isMismatched: boolean }> = ({ value, isVisible, isMatched, isMismatched }) => {
    const { game, dispatch } = useContext(AppContext);

    const toggleCard = () => {
        dispatch({ type: "SHOW_HIDE_CARD", payload: { value, isVisible } })
        const selectedCards = game.deck.filter((c: ICard) => c.visible).map((c: ICard) => (c.value));
        if (selectedCards.length < 2) {
            return;
        }
        const [card1, card2] = selectedCards;
        if (card1 - card2 === 5 || card2 - card1 === 5) {
            dispatch({ type: "MATCH_CARDS" })
            return;
        }
        dispatch({ type: "MISMATCH_CARDS" })
        setTimeout(() => {
            dispatch({ type: "RESET_MISMATCHED_CARDS" })
        }, 1000);
        return;
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

    if (isMismatched) {
        return (
            <Card className="card mismatched" onClick={toggleCard}>
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

