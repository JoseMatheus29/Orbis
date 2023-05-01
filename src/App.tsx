import { useEffect, useState } from "react";
import { api } from "./services/api";

interface IStages {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [ stages, setStages ] = useState<IStages[]>([]);

  useEffect(() => {
    let url = '/stages'

    api(url)
      .then((response) => setStages(response.data))
  }, [])

  console.log(stages)

  return (
    <>
      <ul>
          {
            stages.map((stage) => <li>{stage.name}</li>)
          }
      </ul>
    </>
  )
}

export default App
