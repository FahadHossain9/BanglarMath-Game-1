    import React from "react";

    const Rules = () => {
    return (
        <div className=" bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-4">Game Instructions</h2>
            <ol className="list-decimal pl-4">
            <li>This two-player game features a single pawn that begins on the play button icon at position 14.</li>
            <li>The game starts at location 14.</li>
            <li>The first player rolls the dice, adds the result to 14, and moves the pawn accordingly. For instance, if Shanto rolls a 5 on their first turn, they'll move to spot 14+5 = 19.</li>
            <li>The second player's goal is to subtract their dice roll from the current position and return the pawn. For example, if Mitu rolls a 6, she'd subtract it from spot 19 and move the pawn back to position 13.</li>
            <li>If adding moves would lead the first player (Shanto) to a spot below 14 with a skeleton icon, their turn is canceled. They cannot claim that spot; instead, it becomes Mitu's turn.</li>
            <li>Similarly, for the player moving backward by subtraction (Mitu), they can't claim spots above 14 with skeleton icons. If this happens, Mitu's turn is canceled, and Shanto resumes play.</li>
            <li>The ultimate goal for each player is simple: Shanto aims to reach or exceed position 27 through addition, while Mitu seeks to reach or pass location 1 through subtraction.</li>
            </ol>
        </div>
    );
    };

    export default Rules;
