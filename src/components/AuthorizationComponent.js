import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function AuthorizationComponent(){

    const {register, handleSubmit} = useForm({
        mode: 'all',
    });

    const navigate = useNavigate();
    let baseURL = "http://localhost:6060/api";

    const axiosService = axios.create({baseURL});

    const login = {
        login:(data)=>axiosService.post("/auth/signin",data),
    };

    function submit(data) {
        login.login(data).then((res) => {
            localStorage.setItem("user",JSON.stringify(res.data));
            navigate("/logOut")
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder={'email'} {...register('email')}/>
                <input placeholder={'password'} {...register('password')}/>
                <button type={"submit"}>submit</button>
            </form>
        </div>
    )
}