import { useState } from "react"

export default function Team(){
    const [player, setPlayer] = useState(0);

    const addPlayer =()=>{
        const newPlayer = player + 1;
        setPlayer(newPlayer)
    }

    const removePlayer = () =>{
        const newPlayer = player - 1;
        setPlayer(newPlayer)
    }

    const teamStyle = {
        border: '2px solid green',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
    }

    return(
        <>
            <div style={teamStyle}>
                <p>Players: {player}</p>
                <button onClick={addPlayer}>Add </button>
                <button onClick={removePlayer}>Remove </button>
            </div>
        </>
    )
}