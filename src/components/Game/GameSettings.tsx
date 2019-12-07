import { FormControl, FormControlLabel, MenuItem, Select } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../state";
import { Difficulty } from "../../state/Game";

const GameSettings = () => {
    const { dispatch } = useContext(AppContext);
    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Easy)

    const handleChange = ((e: React.ChangeEvent<{ value: any }>) => setDifficulty(e.target.value));

    useEffect(() => {
        dispatch({ type: "TOGGLE_DIFFICULTY" });
    }, [difficulty, dispatch]);

    return (
        <div>
            <FormControl>
                <FormControlLabel
                    label="Difficulty:"
                    labelPlacement="start"
                    control={
                        <Select
                            id="difficulty-select"
                            value={difficulty}
                            onChange={handleChange}
                        >
                            <MenuItem value={Difficulty.Easy}>Easy</MenuItem>
                            <MenuItem value={Difficulty.Hard}>Hard</MenuItem>
                        </Select>
                    }></FormControlLabel>

            </FormControl>
        </div>
    )
};

export { GameSettings };

