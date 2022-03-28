import { useAuth } from "context/auth-context";
import { FormEvent} from "react";
// const  apiUrl=process.env.REACT_APP_API_URL
export const RegisterScreen=()=>{

    const {login,user}=useAuth()
    console.log(user);
    
    //HTMLFormElement extends Element
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username=(event.currentTarget.elements[0] as HTMLInputElement).value
        const password=(event.currentTarget.elements[1] as HTMLInputElement).value
        
        login({username,password})
    }
     
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">账户</label>
            <input type="text" id={'username'}></input>
        </div>
        <div>
            <label htmlFor="userpassword">密码</label>
            <input type="password" id={'userpassword'}></input>
        </div>
        <button type={"submit"}>登录</button>
    </form>
}