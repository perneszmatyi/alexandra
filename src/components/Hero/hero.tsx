import portrait from "../../assets/portrait.png";
import quoteUp from "../../assets/quote-up.svg";
import quoteLine from "../../assets/quote-line.svg";

export const Hero = () => {
  return (
    <div className="w-full flex-grow border-t border-white bg-blue-main">
      <div className="flex gap w-3/4 mx-auto mt-23 gap-12">
        <div className="flex justify-end h-full w-1/2 ">
          <img
            src={portrait}
            className="rounded-t-full w-[100%] max-w-[535px]  shadow-[-2rem_1.75rem_0_0_#ffffff]"
          />
        </div>
        <div className="flex flex-col  w-1/3 gap-50">
          <div className="flex flex-col pt-10 gap-7">
            <div className=" flex justify-between items-start">
              <p className="font-raleway text-white-text text-3xl leading-[0.95] ml-10">
                Alattad a föld, <br />
                fölötted az ég, <br />
                benned a létra.
              </p>
              <img src={quoteUp} />
            </div>
            <div className=" flex justify-between">
              <img src={quoteUp} className="rotate-180" />
              <img src={quoteLine} />
              <span className="font-raleway text-3xl text-white-text mr-6">
                Weöres Sándor
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 ml-10">
            <h1 className="font-montagu-slab text-8xl text-white-text leading-[0.95] font-medium">
              Boldov <br />
              Alexandra
            </h1>
            <p className="font-raleway text-white-text text-3xl leading-[41px]">
              Felnőtt klinikai <br />
              és mentálhigiéniai <br />
              szakpszichológus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
