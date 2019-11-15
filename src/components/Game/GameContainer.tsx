import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../state";
import { ICard } from "../../state/Game";
import { GameCard } from "./GameCard";

const GameContainer = () => {
    const { game, dispatch } = useContext(AppContext);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const { deck } = game;

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

