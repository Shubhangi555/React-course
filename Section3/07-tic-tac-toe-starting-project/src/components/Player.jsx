import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); //First call: editing = false → !false = true
        
        if (isEditing){
            onChangeName(symbol, playerName);       //Second call: editing = true → !true = false
    } 
            }                                       // Final result: false (correct — it toggled twice)
    
             // setIsEditing(!isEditing);    ->First call: !false = true
            // setIsEditing(!isEditing);     ->Second call: !false = true again! 
                                             // Final result: true (wrong — it only toggled once even though clicked twice)
    
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    let editableplayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) { 
        editableplayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />  //Two-way binding
        ); //User types in input ➜ onChange triggers ➜ setPlayerName updates state ➜ value={playerName} updates input ➜ UI reflects new value

    }

    return (
        <li className={isActive ? "active": undefined}>
            <span className="player">
                {editableplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}