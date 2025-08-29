import "./Home.css";
import BentoCard from "../components/BentoCard";
import TypingAnimation from "../components/TypingAnimation";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <>
      <div className="row-cards">
        <motion.div className="card1" whileHover={{scale:1.04}}>
          <BentoCard title="Projects" link="/projects"/>
        </motion.div>
        <motion.div className="card2"  whileHover={{scale:1.04}}>
          <BentoCard title="Resume" link="https://docs.google.com/document/d/1srUxO1r_V3f5_Sdk1pKZ3-zIDD07oEWE/edit?usp=sharing&ouid=111557966545155196302&rtpof=true&sd=true"/>
        </motion.div>
        <motion.div className="card3"  whileHover={{scale:1.04}}>
          <BentoCard title="Experience"  link="/Experience" />
        </motion.div>

        <motion.div className="card4"  whileHover={{scale:1.04}}>
          {/* <BentoCard title="Hello My name is sireesha.."  /> */}
           <BentoCard
              title={<TypingAnimation text="Hello I am sireesha. Developer and builds beautiful websites"/>}
            />
        </motion.div>

        <motion.div className="card5"  whileHover={{scale:1.04}}>
          <BentoCard title="Connect" link="http://linkedin.com/in/sai-sireesha-tripurari-0274ba24b" />
        </motion.div>

        <motion.div className="card6"  whileHover={{scale:1.04}}>
        <BentoCard title="Academics" link="/academics" />
    </motion.div>

    <motion.div className="card7"  whileHover={{scale:1.04}}>
      <BentoCard  link="/thanku" />

    </motion.div>
      </div>
    </>
  );
}
