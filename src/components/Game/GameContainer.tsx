import React, { useContext, useEffect } from "react";
import { AppContext } from "../../state";
import { GameCard } from "./GameCard";
import { ICard } from "../../state/Game";

const GameContainer = () => {
    const { game, dispatch } = useContext(AppContext);

    const { deck } = game;

    useEffect(() => {
        const selectedCards = deck.filter((c: ICard) => c.visible);

        if (selectedCards.length > 1) {
            const card1 = selectedCards[0].value,
                card2 = selectedCards[1].value;
            if ((card1 - card2) === 5 || (card2 - card1) === 5) {
                alert(`It's a match`);
                dispatch({ type: "MATCH_THEM", payload: [card1, card2] });
            } else {
                alert(`Try again`);
            }
            dispatch({ type: "HIDE_ALL" });
        }
    }, [deck, dispatch])

    return (
        <div className="game-container">
            <h1>React Memory Game</h1>
            <div className="card-container">
                {deck.map((card: ICard) => (
                    <GameCard key={deck.indexOf(card)} value={card.value} isVisible={card.visible} isMatched={card.matched} />
                ))}
            </div>
        </div>
    );
};

export { GameContainer };