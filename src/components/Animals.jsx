import axios from "axios";
import React from "react";
import './Animals.css';

const api_call = "/api/animals";

function Animals(props) {
  const [animal, setAnimal] = React.useState(null);
  const [currentAnimalIndex, setcurrentAnimalIndex] = React.useState(0);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setAnimal(response.data);
    });
  }, []);

  if (!animal) return null;

  const nextAnimal = function(){

    setcurrentAnimalIndex((prev) => (prev + 1))

  };
 
  return (
    <div className="Animals">
      <div class="anipics" onClick={nextAnimal} >
        <img class="apics" alt="cute-animals" width="275px" src={`${animal[currentAnimalIndex].image_url}`} /> 
      </div>
    </div>
  );
}

export default Animals;
