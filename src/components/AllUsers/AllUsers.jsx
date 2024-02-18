import { useEffect, useState } from "react"

export default function AllUsers(){

    const [allUsers, setAllUsers] = useState(0);
    console.log(allUsers)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    },[])
    
    return(
        <>
            <h2>All User: {allUsers.length}</h2>
        </>
    )
}