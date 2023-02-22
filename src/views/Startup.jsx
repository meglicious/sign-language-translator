import './Startup.css';
import 'animate.css';
import './Username'
import Username from './Username';

const Login = () =>{
    return (
        <div id="Login">
            <div id="logo">
                <h1 className="header">Lost in Translation</h1>
                <h2>Login</h2>
                <img className="image" src="/Icons/sign-language.png" alt="No picture"/>
            </div>
            <Username/>
        </div>
    )
}

export default Login
