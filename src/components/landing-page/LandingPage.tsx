import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/onboarding.jpeg"
          alt=""
          className="w-[40%] h-auto animate-pulse"
        />
        <h1 className="text-3xl font-medium">
          Calculate and Estimate your tax with Tax master
        </h1>
        <div className="">
          <p className="font-mono">Do you have a TIN? </p>
          <p> yes 👇click the button bellow </p>
          <p>
            No 👉{" "}
            <a
              className="text-blue-600 hover:text-blue-500 hover:underline"
              target="__blank"
              href="https://tin.jtb.gov.ng/"
            >
              https://tin.jtb.gov.ng/
            </a>{" "}
          </p>
        </div>
        <button
          onClick={() => navigate("terms-and-conditions")}
          className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer"
        >
          Get Started
        </button>
      </div>

    </div>
  );
};

export default LandingPage;
