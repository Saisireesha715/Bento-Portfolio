import BentoCard from "../components/BentoCard";
import "./Projects.css";
import {motion} from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";
export default function Projects(){
    return(
       
         <>
           <div className="project-cards">
             <motion.div className="card1"  whileHover={{scale:1.04}}>
               <BentoCard title="Sentiment Analysis using LSTM" link="https://github.com/Saisireesha715/TwitterSentimentAnalysis"/>
             </motion.div>
             <motion.div className="card2"  whileHover={{scale:1.04}}>
               <BentoCard title="Airbnb clone" link="https://github.com/Saisireesha715/Wanderlust" />
             </motion.div>
             <motion.div className="card3"  whileHover={{scale:1.04}}>
               <BentoCard title="Journal writing" link="https://github.com/Saisireesha715/JournalWriting" />
             </motion.div>
             
             <motion.div className="card4"  whileHover={{scale:1.04}}>
               <BentoCard title={<TypingAnimation text="Here are some projecs i made..."/>}  />
             </motion.div>
     
             <motion.div className="card5"  whileHover={{scale:1.04}}>
               <BentoCard title="calendar" link="https://github.com/Saisireesha715/Event-Calendar"/>
             </motion.div>
     
             <motion.div className="card6"  whileHover={{scale:1.04}}>
             <BentoCard title="Movie recommender system"  link="https://github.com/Saisireesha715/MovieRecommendation"/>
         </motion.div>

         <motion.div className="card7"  whileHover={{scale:1.04}}>
          <BentoCard title="Pomodoro app" link="https://github.com/Saisireesha715/PomodoroApp"/>
         </motion.div>
             
           </div>


          

            


          
         </>
       );
    
}