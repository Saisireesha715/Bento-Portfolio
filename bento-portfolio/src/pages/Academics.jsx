import BentoCard from "../components/BentoCard";
import "./Academics.css";
import {motion} from "framer-motion";
export default function Academics(){
    return(
       
         <>
           <div className="academics-cards">
             <motion.div className="card1"  whileHover={{scale:1.04}}>
               <BentoCard title="Bachelors in Computer Science" uni="SRM University AP" period="2021-2025" cgpa="8.24" />
             </motion.div>
             <motion.div className="card2"  whileHover={{scale:1.04}}>
               <BentoCard title="Intermediate" uni="GRC Junior College"period="2018-2020" cgpa="8.94"/>
             </motion.div>
             <motion.div className="card3"  whileHover={{scale:1.04}}>
               <BentoCard title="Class 10th" uni="Bhashyam EM High School" period="2017-2018" cgpa="10.0" />
             </motion.div>
     
             
           </div>
         </>
       );
    
}