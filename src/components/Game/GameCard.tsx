import { Card, CardContent } from "@material-ui/core";
import React, { FC, useState, useContext, useEffect } from "react";
import { AppContext } from "../../state";

const GameCard: FC<{ value: number, isVisible: boolean }> = ({ value, isVisible }) => {
    const [visible, setVisible] = useState<boolean>(isVisible);
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: "SHOW_HIDE_CARD", payload: { visible } })
    }, [visible, dispatch]);

    return (
        <Card className="card" onClick={() => setVisible(!visible)}>
            <CardContent className="card-content">
                {visible && (value > 5 ? value - 5 : value)}
            </CardContent>
        </Card>
    )
};

export { GameCard };

