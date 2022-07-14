import Header from "../../components/header/Header";
import Form from "../../components/header/Form";

const Login = () => {
  //
  return (
    <div
      className="login flex flex-col items-center justify-center w-full h-full bg-[url('https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2021/01/17/562651-1688694701.jpg?itok=niab7Qe7')] bg-cover "
    >
      <div className="loginModal flex flex-col items-center bg-blue-600 bg-opacity-40 rounded-full gap-5 p-2 ">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Login;
