import { useState, useEffect } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import classNames from "classnames";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav && nav.getBoundingClientRect().top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Nav */}
      <nav
        className={classNames(
          "sticky top-0 z-50 flex h-20 w-screen items-center justify-between bg-white px-4 py-4 xl:px-20 xl:py-[26px]",
          {
            "nav-is-sticky": isSticky,
          },
        )}
      >
        {/* Modus Logo */}
        <div className="flex items-center gap-x-2">
          <img src="./modus-logo.svg" className="h-7 w-7" alt="" />
          <div className="text-2xl font-bold">Modus</div>
        </div>
        {/* Nav item */}
        <div className="hidden items-center gap-x-6 text-base font-semibold sm:flex sm:text-sm">
          <div>Home</div>
          <a
            href="https://docs.modus.finance"
            target="_blank"
            className="font-medium text-[#626262] sm:text-sm"
          >
            <div>Docs</div>
          </a>
          <a
            href="https://x.com/Modus_Finance"
            target="_blank"
            className="font-medium text-[#626262] sm:text-sm"
          >
            <div>Community</div>
          </a>
          {/* <div>Borrow / Lend</div>
          <div>Borrow / Lend</div>
          <div>Borrow / Lend</div> */}
        </div>
        <button className="invisible h-10 rounded-[40px] bg-black px-6 py-0 font-medium text-white">
          Launch APP
        </button>
      </nav>
      {/* main-1 */}
      <main className="flex w-screen flex-col items-center justify-center bg-[#60CDFF] px-4 py-8 xl:py-[106px]">
        <div className="text-nowrap text-[28px] font-bold leading-[32px] text-black md:text-6xl xl:text-[72px] xl:leading-[88px]">
          Unlock capital efficiency
        </div>
        <div className="mt-3 flex items-center text-[28px] font-bold leading-[32px] text-black md:text-6xl xl:mt-2 xl:text-[72px] xl:leading-[88px]">
          for{" "}
          <Typewriter
            options={{
              wrapperClassName: "text-[#012994] ml-4",
              cursorClassName:
                "Typewriter__cursor text-[#012994] ml-4 opacity-50 text-2xl",
              loop: true,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(200)
                .typeString("LSTs")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("LRTs")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("LP tokens")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("stablecoins")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("synthetic assets")
                .pauseFor(1000)
                .deleteAll(1)
                .start();
            }}
          />
        </div>
        <div className="mt-3 text-base font-medium text-black xl:text-2xl">
          On Monad’s first modular lending stack
        </div>
        <a href="https://x.com/Modus_Finance" target="_blank">
          <button className="mt-6 flex h-10 w-full transform appearance-none items-center justify-center rounded-[40px] bg-black px-6 py-0 font-medium text-white outline-none transition-transform duration-300 hover:scale-[1.2] hover:border-transparent hover:outline-none focus:outline-none sm:mt-[68px] sm:w-auto">
            <img src="./x-logo.svg" className="h-9 w-9" alt="" />
          </button>
        </a>
        <div className="mt-3 text-base font-medium text-black md:text-base xl:text-base">
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
          <div className="text-center text-2xl font-bold sm:text-left sm:text-5xl sm:font-semibold">
            High LTV lending markets
          </div>
          <div className="text-center text-base font-medium sm:mt-2 sm:text-left sm:text-[18px] sm:leading-[28px] md:mt-6 xl:mt-12">
            Up to 95% LTV for assets with high price correlation. Earn more.
            Borrow more.
          </div>
          {/* <div className="px-4 sm:px-0">
            <button className="mt-4 flex h-10 w-full items-center justify-center rounded-[40px] border-2 border-black text-[18px] font-medium md:w-[120px] xl:mt-6 xl:border">
              Borrow
            </button>
          </div> */}
        </div>
        <div className="shadow-box relative mt-8 flex flex-col items-center justify-center rounded-[20px] border-2 border-black bg-white px-[46px] py-8 xl:ml-6 xl:mr-0 xl:px-[56px] 2xl:ml-[190px] 2xl:mt-0">
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
          <button className="mt-4 flex h-10 w-full cursor-default items-center justify-center rounded-[40px] border-2 border-black text-[18px] font-medium hover:border-black hover:outline-none focus:border-black focus:outline-none md:w-full xl:mt-6 xl:border-2">
            Borrow
          </button>
          {/* <img
            src="./ltv-border-shadow.svg"
            className="absolute -top-[2px] left-[4px] z-[-1] w-[102%] max-w-[none] lg:top-[4px] xl:left-[2px] xl:w-[104%] 2xl:-top-[2px]"
            alt="border-shadow"
          /> */}
        </div>
      </main>
      {/* main-3 */}
      {/* <main
        className="flex w-screen flex-col-reverse items-center justify-center overflow-x-hidden bg-no-repeat px-4 sm:flex-col sm:px-[120px] lg:py-[120px] xl:flex-row xl:gap-x-[118px]"
        style={{
          background: "url(./strategies-bg.png)",
          backgroundSize: "100% 100%",
          backgroundColor: "#012993",
        }}
      >
        <div className="relative mt-8 flex w-[100%] max-w-none items-center justify-center xl:mt-0 xl:max-w-[680px] 2xl:w-full">
          <img src="./strategies-left-2.svg" className="z-10 w-full" alt="" />
          <img
            src="./strategies-left-shadow.svg"
            className="absolute -left-[20px] -top-[45px] z-0 w-[120%] max-w-none"
            alt=""
          />
        </div>
        <div className="mb-8 mt-12 flex w-auto flex-col items-center justify-center text-center sm:text-center md:mb-16 xl:-mt-20 xl:mb-0 2xl:w-[437px]">
          <div className="text-2xl font-bold text-white md:text-5xl xl:font-semibold">
            Auto-strategies
          </div>
          <div className="mt-2 w-auto text-base font-medium text-white sm:mt-[32px] sm:text-[18px] sm:font-normal sm:leading-[28px] md:w-4/5">
            Lever up your positions and outperform thanks to our optimized, high
            LTV markets.
          </div>
        </div>
      </main> */}
      {/* main-4 */}
      {/* <main className="flex w-screen items-center justify-center bg-white px-4 py-6 xl:px-[88px] xl:py-[120px]">
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
      </main> */}
      {/* footer */}
      <footer className="bg-[#EEF0F2] px-4 py-6 md:px-[80px] md:pb-[6px] md:pt-[106px] xl:px-[120px] xl:pt-[108px]">
        <div className="flex flex-col items-start pb-10 text-center sm:flex-row sm:items-center sm:justify-between xl:pb-[120px]">
          <div className="flex flex-col justify-start">
            <div className="flex items-center">
              <img
                src="./modus-logo.svg"
                className="h-6 w-6 sm:h-12 sm:w-12"
                alt=""
              />
              <div className="ml-1 text-2xl font-medium text-black sm:ml-3 sm:text-[42px]">
                Modus
              </div>
            </div>
            <div
              className="mt-2 text-left text-sm font-normal sm:mt-6 sm:text-base"
              style={{
                color: "rgba(0, 0, 0, 0.68)",
              }}
            >
              Unlock your assets on Monad's modular lending stack
            </div>
          </div>
          <div className="mt-4">
            <div className="text-base font-semibold sm:text-[18px] sm:leading-[26px]">
              Follow us
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/Modus_Finance"
                target="_blank"
                className="cursor-pointer"
              >
                <img src="./x-white.svg" className="h-9 w-9" alt="" />
              </a>
              {/* <img src="./discord-white.svg" className="h-9 w-9" alt="" /> */}
              <a
                href="https://docs.modus.finance"
                target="_blank"
                className="cursor-pointer"
              >
                <img src="./gitbook-white.svg" className="h-9 w-9" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#D2D2D7]" />
        <div
          className="mt-3 pb-0 text-center text-sm font-normal sm:mt-8 sm:pb-6"
          style={{
            color: "rgba(91, 96, 118, 0.80)",
          }}
        >
          © 2024 – Modus
        </div>
      </footer>
    </>
  );
}

export default App;
