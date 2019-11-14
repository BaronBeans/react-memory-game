import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../state";
import { GameCard } from "./GameCard";
import { ICard } from "../../state/Game";
import { Button } from "@material-ui/core";

const GameContainer = () => {
    const { game, dispatch } = useContext(AppContext);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const { deck } = game;

    useEffect(() => {
        const selectedCards = deck.filter((c: ICard) => c.visible);

        if (selectedCards.length > 1) {
            const card1 = selectedCards[0].value,
                card2 = selectedCards[1].value;
            if ((card1 - card2) === 5 || (card2 - card1) === 5) {
                // alert(`It's a match`);
                dispatch({ type: "MATCH_THEM", payload: [card1, card2] });
                dispatch({ type: "HIDE_ALL" });
                return;
            }
            // alert(`Try again`);
            dispatch({ type: "FAIL", payload: [card1, card2] });
            setTimeout(() => {
                dispatch({ type: "HIDE_ALL" });
            }, 1000);
            return;
        }
    }, [deck, dispatch])

    const startOver = () => dispatch({ type: "NEW_GAME" });

    useEffect(() => {
        (game.deck.filter((c: ICard) => !c.matched).length === 0) ? setGameOver(true) : setGameOver(false);
    }, [game])

    return (
        <div className="game-container">
            <h1>React Memory Game</h1>
            <div className="card-container">
                {deck.map((card: ICard) => (
                    <GameCard key={deck.indexOf(card)} value={card.value} isVisible={card.visible} isMatched={card.matched} isMismatched={card.mismatched} />
                ))}
            </div>
            {gameOver &&
                <Button variant="contained" color="primary" onClick={startOver}>New Game</Button>
            }
        </div>
    );
};

export { GameContainer };
