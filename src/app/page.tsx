import { FC } from "react";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;
