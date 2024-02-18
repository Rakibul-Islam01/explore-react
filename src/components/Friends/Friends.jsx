import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from '../Friend/Friend'

export default function Friends(){
    const [friends, setFreinds] = useState([])
        console.log(friends)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFreinds(data))
    }, [])
return(
    <>
        <div>
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend = {friend}></Friend>)
            }
        </div>
    </>
)
}