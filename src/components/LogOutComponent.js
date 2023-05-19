import {useNavigate} from "react-router-dom";


export default function LogOutComponent() {



    const navigate = useNavigate();
    function logOut(){
        localStorage.removeItem("user")
        navigate("/authorization")
    }


    let user = JSON.parse(localStorage.getItem("user"))

    return (
        <div>
            <button onClick={logOut}>logout</button>

            <p>Email: {user.email}</p>
            <p>Name: {user.profile.name}</p>

        </div>
    )
}