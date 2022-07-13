import Header from "../../components/header/Header";
import Form from "../../components/header/Form";
import { Outlet } from "react-router-dom";

const Login = () => {
    //
    return ( 
        <div className="login flex flex-col items-center justify-center w-full h-full" style={{ background: 'url("https://picsum.photos/1600/900")' }} >
            <Header />
            <Form />
        </div>
     );
}
 
export default Login;