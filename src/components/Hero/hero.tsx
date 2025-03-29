import portrait from "../../assets/portrait.png";

export const Hero = () => {
  return (
    <div className="w-full flex-grow border-t border-white bg-blue-main">
      <div className="flex  w-3/4 mx-auto mt-23">
        <div className="flex justify-end h-full w-1/2 ">
          <img
            src={portrait}
            className="rounded-t-full bg-cover bg-center w-[100%] max-w-[535px]  shadow-[-2rem_1.75rem_0_0_#ffffff]"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
