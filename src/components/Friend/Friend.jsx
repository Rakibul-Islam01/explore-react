import './Freind.css'
export default function Friend({friend}){
    const {name, email} = friend;
    console.log(name)
    console.log(email)
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <h3>Email: {email} </h3>
        </div>
    )
}