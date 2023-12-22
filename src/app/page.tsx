import { serverApi } from "./_trpc/server-api";
import Greeting1 from "@/components/greeting-1";

const Home = async () => {
  const greeting2 = await serverApi.greeting2({ name: "Next" });

  return (
    <div className="">
      <div className="bg-blue-100 p-5 border-2 border-blue-500">
        <div className="text-blue-500 font-bold">Server Component</div>
        <div>{JSON.stringify(greeting2)}</div>
      </div>
      <Greeting1 />
    </div>
  );
};

export default Home;
