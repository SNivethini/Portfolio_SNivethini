import React from "react";
import { Bio } from "../data/constants";
import Girl from "../assets/Girl.json";
import Arrow from "../assets/Arrow.json";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import { motion, useScroll } from "framer-motion";
import { fadeIn } from "../data/Variants";
import { Link } from "react-scroll";

function Home() {
  const PersonalDetails = () => {
    return (
      <>
        
        <div className="w-[5px] h-[60px] bg-blue-700"></div>
        <div>
          <div className="pb-[10px] cursor-pointer hover:text-blue-700">
            <a href="tel:{Bio.Number}">{Bio.Number}</a>
          </div>
          <div className="pb-[10px] cursor-pointer hover:text-blue-700">
            <a href="mailto: {Bio.mail}"> {Bio.mail}</a>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="bg-blue-50 ">
        <div
          id="home"
          className="px-[30px] lg:pl-[300px] max-w-[1340px] w-[88%] mx-auto lg:pr-[30px] py-[100px] lg:py-[70px]  h-auto  flex flex-col  md:flex-row  md:justify-around "
        >
          <div className=" flex flex-col items-center md:items-start justify-center">
            <div className=" pb-[50px] flex flex-col items-center md:items-start">
              <div className="md:hidden pb-[40px]">
                <Lottie style={{ width: 200 }} animationData={Girl} />
              </div>
              <p className="text-3xl  sm:text-4xl lg:text-5xl font-bold pb-[10px]">
                Hi I'm <span className="text-blue-700">{Bio.fname}</span>
              </p>
              <p className="text-xl xl:text-5xl sm:text-4xl font-bold pb-[50px]">
                <Typewriter
                  options={{
                    strings: ["Front End Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <motion.p
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="w-[90%] md:w-[75%]"
              >
                {Bio.shortDesc1}
              </motion.p>
            </div>
            
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col w-[200px] md:flex-row md:w-[400px] text-sm md:text-lg font-medium gap-[50px] pb-[50px]"
            >
              <div className="px-[40px] py-[10px] flex justify-center text-thin md:text-lg rounded-lg border border-black bg-blue-950 text-white hover:text-black hover:bg-transparent">
                <a href={Bio.resume} target="blank">
                  <button>Resume</button>
                </a>
              </div>
              <div className=" px-[40px] py-[10px] flex justify-center  rounded-lg border border-black hover:bg-blue-950 hover:text-white">
                <Link to="contact">
                  <button>Lets Connect</button>
                </Link>
              </div>
            </motion.div>
           
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex  text-medium font-medium gap-[20px] "
            >
              
              <PersonalDetails />
              
            </motion.div>
            {/* <div className="flex  text-medium font-medium gap-[20px] sm:hidden ">
            <PersonalDetails />
            </div> */}
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="hidden md:visible md:flex flex-col justify-center md:items-start"
          >
            <Lottie style={{ width: 200 }} animationData={Girl} />
            <Lottie style={{ width: 100 }} animationData={Arrow} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
