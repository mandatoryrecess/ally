import axios from "axios";
import React from "react";
import './Animals.css';
import  Navigation  from "./Navigation";

const api_call = "/api/animals";

function Animals(props) {
  const [animal, setAnimal] = React.useState(null);
  const [currentAnimalIndex, setCurrentAnimalIndex] = React.useState(0);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setAnimal(response.data);
    });
  }, []);

  if (!animal) return null;

  function nextAnimal(){
    //if current picture is the last one, return to the beginning
    if (currentAnimalIndex === animal.length - 1) {
      setCurrentAnimalIndex(0)
      return;
    }

    setCurrentAnimalIndex((prev) => prev + 1)
 
  };
 
  return (
    
    <div className="Animals">
      <Navigation />
      <div class="anipics" onClick={nextAnimal} >
        <img class="apics" alt="cute-animals" width="275px" src={`${animal[currentAnimalIndex].image_url}`} /> 
      </div>
    </div>
  );
}

export default Animals;
