import { FormGroup, Button, Input } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {


  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const name = 'clarusway';
  const password = '123';

  const handleLoginSubmit = () => {
    if ( (nameInput === name && passwordInput === password) || (nameInput.length > 0 && passwordInput.length > 0) ) {
      navigate('/home');
    }
    else {
      alert('pls enter a valid username/password');
      
    }
  }

  console.log(passwordInput.length);
  console.log(nameInput.length);
  

  return (
    <div className="form flex flex-col items-center ">
      <FormGroup className="flex flex-col gap-8 p-2 text-2xl text-white ">
        <Input onChange={(e)=>setNameInput(e.target.value)} type="text" placeholder="name" required />
        <Input onChange={(e)=>setPasswordInput(e.target.value)} type="password" placeholder="password" required />
        <Button className="bg-stone-500" variant="contained" onClick={handleLoginSubmit} >
          Submit
        </Button>
      </FormGroup>
    </div>
  );
};

export default Form;
