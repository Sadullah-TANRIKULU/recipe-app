import Header from "../../components/header/Header";
import Form from "../../components/header/Form";

const Login = () => {
    //
    return ( 
        <div className="login flex flex-col items-center justify-center w-full h-full" style={{ backgroundImage: 'url("../../assets/bgLogin.jpg")' }} >
            <Header />
            <Form />
        </div>
     );
}
 
export default Login;