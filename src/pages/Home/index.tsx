import { useState } from "react";
import Button from "../../components/Button";
import { useStages } from "../../hooks/useTools";

const Home = () => {

    const { stages } = useStages();
    const [description, setDecription] = useState('');

    const handleButton = (des: string) => {
        console.log(des)
        setDecription(des);
    }
    return(
        <>
        <h1>Orbis</h1>
        <h2>Toolkit de Design Centrado no Usuário </h2>
        
         { stages.map( (stage) => <Button name={ stage.name } key={stage.id} onClick={() => handleButton(stage.description) } /> ) }
         <p>{description}</p>
        </>
    )
}

export default Home;