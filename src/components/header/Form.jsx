import { FormGroup, Button, Input } from "@mui/material";
import meal2 from "../../assets/meal2.svg";

const Form = () => {
  return (
    <div className="form flex flex-col items-center bg-blue-200 rounded-full gap-5 border-2 border-red-600 ">
      <img className=" w-1/3 p-2" src={meal2} alt="login form header" />

      <FormGroup className="flex flex-col gap-8 p-2">
        <Input placeholder="name" required />
        <Input placeholder="password" required />
        <Button className="bg-stone-500" variant="contained" type="submit">
          Submit
        </Button>
      </FormGroup>
    </div>
  );
};

export default Form;
