import coding from "../../assets/coding.svg";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div className="about flex flex-col items-center h-screen ">
      <Navbar />
      <img src={coding} alt="coding" className="h-1/3" />
      <h4>About Software Developer <span className="text-white text-2xl " > David Moses HENDERSON </span></h4>
      <div className="aboutContent border-white border-2 m-2">
        <p className="text-right p-2" >Lorem, ipsum dolor.</p>
        <p className="text-right p-2" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere
          dicta repellendus unde vero sed excepturi a numquam corporis
          consectetur asperiores vel, aliquid dolor nobis sunt quia placeat enim
          impedit.
        </p>
        <p className="text-right p-2" > <span className="underline text-lg text-white " > Send Email:</span> davidmoseshenderson@gmail.com </p>
      </div>
    </div>
  );
};

export default About;
