import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <>
      {/* Nav */}
      <nav className="flex h-20 w-screen items-center justify-between px-4 py-4 xl:px-20 xl:py-[26px]">
        {/* Modus Logo */}
        <div className="flex items-center gap-x-2">
          <img src="./modus-logo.svg" className="h-7 w-7" alt="" />
          <div className="text-2xl font-bold">Modus</div>
        </div>
        {/* Nav item */}
        <div className="items-center hidden text-base font-semibold gap-x-6 sm:flex sm:text-sm">
          {/* <div>Home</div> */}
          {/* <div>Borrow / Lend</div>
          <div>Borrow / Lend</div>
          <div>Borrow / Lend</div> */}
        </div>
        {/* <button className="h-10 rounded-[40px] bg-black px-6 py-0 font-medium text-white">
          Launch APP
        </button> */}
      </nav>
      {/* main-1 */}
      <main className="flex w-screen flex-col items-center justify-center bg-[#60CDFF] px-4 py-8 xl:py-[73px]">
        <div className="text-nowrap text-[28px] font-bold leading-[32px] text-black md:text-6xl xl:text-[72px] xl:leading-[88px]">
          Unlock capital efficiency
        </div>
        <div className="mt-3 flex items-center text-[28px] font-bold leading-[32px] text-black md:text-6xl xl:mt-2 xl:text-[72px] xl:leading-[88px]">
          for{" "}
          <Typewriter
            options={{
              wrapperClassName: "text-[#012994] ml-3",
              cursorClassName:
                "Typewriter__cursor text-[#012994] ml-4 opacity-50 text-2xl",
              loop: true,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(200)
                .typeString("LRTs")
                .pauseFor(3000)
                .deleteAll(1)
                .typeString("LSTs")
                .pauseFor(3000)
                .deleteAll(1)
                .typeString("LP tokens")
                .pauseFor(3000)
                .deleteAll(1)
                .typeString("Stables")
                .pauseFor(3000)
                .deleteAll(1)
                .typeString("Synthetics Assets")
                .pauseFor(3000)
                .deleteAll(1)
                .start();
            }}
          />
        </div>
        <div className="mt-3 text-base font-medium text-black xl:text-2xl">
          On Monad’s first modular lending stack
        </div>
        <button className="mt-6 flex h-10 w-full items-center justify-center rounded-[40px] bg-black px-6 py-0 font-medium text-white sm:mt-[68px] sm:w-auto">
          <img src="./x-logo.svg" className="h-9 w-9" alt="" />
        </button>
        <div className="mt-3 text-sm font-medium text-black md:text-base xl:text-2xl">
          Notifications on to avoid FOMO
        </div>
      </main>
      {/* main-2 */}
      <main
        className="flex w-screen flex-col items-center justify-center px-4 py-8 pb-12 md:flex-col md:py-16 xl:flex-row 2xl:py-[148px]"
        style={{
          background: "url(./ltv-bg.svg)",
        }}
      >
        <div className="flex w-auto flex-col items-center justify-center xl:w-[410px]">
          <div className="text-2xl font-bold text-center sm:text-left sm:text-5xl sm:font-semibold">
            High LTV lending markets
          </div>
          <div className="text-center text-base font-medium sm:mt-2 sm:text-left sm:text-[18px] sm:leading-[28px] md:mt-6 xl:mt-12">
            Up to 95% LTV for assets with high price correlation. Earn more.
            Borrow more.
          </div>
          <div className="px-4 sm:px-0">
            <button className="mt-4 flex h-10 w-full items-center justify-center rounded-[40px] border-2 border-black text-[18px] font-medium md:w-[120px] xl:mt-6 xl:border">
              Borrow
            </button>
          </div>
        </div>
        <div className="relative mt-8 flex flex-col items-center justify-center rounded-[20px] border-2 border-black bg-white px-[46px] py-8 xl:ml-6 xl:mr-0 xl:px-[56px] xl:py-[44px] 2xl:ml-[190px] 2xl:mt-0">
          <div className="z-10 text-base font-medium leading-[14px] text-[#000000a6] xl:text-[18px]">
            Monad LST market
          </div>
          <div className="z-10 mt-3 text-[52px] font-semibold leading-[68px] text-black 2xl:text-[68px]">
            LTV: 95%
          </div>
          <img
            src="./ltv-logo-group.svg"
            className="z-10 mt-5 h-[44px] 2xl:mt-8 2xl:h-[68px]"
            alt=""
          />
          <img
            src="./ltv-border-shadow.svg"
            className="absolute -top-[2px] left-[4px] z-[-1] w-[102%] max-w-[none] lg:top-[4px] xl:left-[2px] xl:w-[104%] 2xl:-top-[2px]"
            alt="border-shadow"
          />
        </div>
      </main>
      {/* main-3 */}
      <main
        className="flex w-screen flex-col-reverse items-center justify-center overflow-x-hidden bg-no-repeat px-4 sm:flex-col sm:px-[120px] lg:py-[120px] xl:flex-row xl:gap-x-[118px]"
        style={{
          background: "url(./strategies-bg.png)",
          backgroundSize: "100% 100%",
          backgroundColor: "#012993",
        }}
      >
        <img
          src="./strategies-left.svg"
          className="mt-8 w-[80%] max-w-none xl:mt-0 xl:max-w-[680px] 2xl:w-full"
          alt=""
        />
        <div className="mb-8 mt-12 flex w-auto flex-col items-center justify-center text-center sm:text-center md:mb-16 xl:-mt-20 xl:mb-0 2xl:w-[437px]">
          <div className="text-2xl font-bold text-white md:text-5xl xl:font-semibold">
            Auto-strategies
          </div>
          <div className="mt-2 w-auto text-base font-medium text-white sm:mt-[32px] sm:text-[18px] sm:font-normal sm:leading-[28px] md:w-4/5">
            Automate your looping and outperform thanks to our optimized, high
            LTV markets.
          </div>
        </div>
      </main>
      {/* main-4 */}
      <main className="flex w-screen items-center justify-center bg-white px-4 py-6 xl:px-[88px] xl:py-[120px]">
        <div
          className="flex w-full flex-col items-center rounded-[20px] bg-center bg-no-repeat px-[32px] py-[40px]"
          style={{
            backgroundImage: "url(./bg-circle.svg)",
            backgroundColor: "#000",
            backgroundSize: "100% 100%",
          }}
        >
          <img src="cam-img.svg" className="w-[120px] xl:w-[188px]" alt="" />
          <div className="mt-8 text-2xl font-bold text-white sm:mt-4 sm:text-[48px] sm:font-semibold sm:leading-[72px]">
            Risk isolated by market
          </div>
          <div className="mt-1 text-center text-sm font-medium text-white sm:text-base sm:leading-[24px]">
            Custom lending markets tailored to asset type. One bad apple
            shouldn't spoil the bunch.
          </div>
          <img
            src="./market-logo.svg"
            className="mt-6 w-[188px] sm:mt-12 sm:w-[328px]"
            alt=""
          />
        </div>
      </main>
      {/* footer */}
      <footer className="bg-[#EEF0F2] px-4 py-6 md:px-[80px] md:pb-[6px] md:pt-[106px] xl:px-[120px] xl:pt-[108px]">
        <div className="flex flex-col items-start pb-10 text-center sm:flex-row sm:items-center sm:justify-between xl:pb-[120px]">
          <div className="flex flex-col justify-start">
            <div className="flex items-center">
              <img
                src="./modus-logo.svg"
                className="w-6 h-6 sm:h-12 sm:w-12"
                alt=""
              />
              <div className="ml-1 text-2xl font-medium text-black sm:ml-3 sm:text-[42px]">
                Modus
              </div>
            </div>
            <div
              className="mt-2 text-sm font-normal sm:mt-6 sm:text-base"
              style={{
                color: "rgba(0, 0, 0, 0.68)",
              }}
            >
              Unlock capital efficiency. Earn more. Borrow more.
            </div>
          </div>
          <div className="mt-4">
            <div className="text-base font-semibold sm:text-[18px] sm:leading-[26px]">
              Follow Us
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src="./x-white.svg" className="h-9 w-9" alt="" />
              <img src="./discord-white.svg" className="h-9 w-9" alt="" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#D2D2D7]" />
        <div
          className="pb-0 mt-3 text-sm font-normal text-center sm:mt-8 sm:pb-6"
          style={{
            color: "rgba(91, 96, 118, 0.80)",
          }}
        >
          @2024.All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
