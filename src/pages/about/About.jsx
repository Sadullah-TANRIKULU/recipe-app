import coding from "../../assets/coding.svg";

const About = () => {
  return (
    <div className="about flex flex-col justify-center items-center ">
      <img src={coding} alt="coding" className="w-1/3" />
      <h4>About Software Developer <span className="text-white text-2xl " > David Moses HENDERSON </span></h4>
      <div className="aboutContent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere
          dicta repellendus unde vero sed excepturi a numquam corporis
          consectetur asperiores vel, aliquid dolor nobis sunt quia placeat enim
          impedit.
        </p>
      </div>
    </div>
  );
};

export default About;
