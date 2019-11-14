import React, { useContext } from "react";
import { AppContext } from "../../state";
import { GameCard } from "./GameCard";

const GameContainer = () => {
    const { game } = useContext(AppContext);

    const { deck, visibility } = game;

    return (
        <div className="game-container">
            <h1>React Memory Game</h1>
            <div className="card-container">
                {deck.map((card: number) => (
                    <GameCard key={deck.indexOf(card)} value={card} isVisible={visibility[deck.indexOf(card)]} />
                ))}
            </div>
        </div>
    );
};

export { GameContainer };