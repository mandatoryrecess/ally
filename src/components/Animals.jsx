import axios from "axios";
import React from "react";

const api_call = "/animals";

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
      <div class="container" onClick={nextAnimal} >
        <h1 class="font-weight-light">Animals</h1>
        <img width="400px" src={`${animal[currentAnimalIndex].image_url}`} /> 
      </div>
    </div>
  );
}

export default Animals;
