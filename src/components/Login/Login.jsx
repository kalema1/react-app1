
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
export default function Login () {
    return (
        <div className="login-container">
            <div><a className="nav-btn login">Login</a></div>
            <div><a className="nav-btn register">Register</a></div>
            <div className="toggle">
                <IoMenu className="icon-mobile-nav" name="menu" />
                <IoClose className="icon-mobile-nav" name="close"/>
            </div>
        </div>
    );
}