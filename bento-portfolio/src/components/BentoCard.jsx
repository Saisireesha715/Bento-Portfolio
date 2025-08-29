import "./BentoCard.css";
import { useNavigate } from "react-router-dom";

export default function BentoCard({ title , uni , period,cgpa ,link , company , description}) {
  const navigate = useNavigate();

    const handleClick = () => {
    // Check if link is external
    if (/^https?:\/\//.test(link)) {
      window.open(link, "_blank"); // open external in new tab
    } else {
      navigate(link); // internal route
    }
  };

  return (
         

    <div className="bento-card" onClick={handleClick} >
     
    

    <h3 className="card-text">{title}</h3>
    <div className="card-details">
      <ul>
         {uni && <li> {uni} </li>}
         {period && <li> {period} </li>}
         {cgpa && <li>CGPA:{cgpa}</li>}

      </ul>

     
    {/* {uni && 
    <ul className="card-details">
      <li>
        {uni}
      </li>
      </ul>}
  {gif && <img src={gif} alt="gif" className="gif-card" />}
   */}

      
    </div>


     <div className="experience-details">
      <ul>
         {company && <li> {company} </li>}
         {period && <li> {period} </li>}
         {description && <li>{description}</li>}

      </ul>
     

      


    </div>

    </div>

    
  );
}