import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api'
import { AutoComplete } from "primereact/autocomplete";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [ stage, setStage ] = useState({});

  useEffect(() => {
    api('/tools')
      .then((response) => {
        const newItems = response.data;
        setItems(newItems);
      })
  }, []);

  useEffect(() => {

    if(selectedItem.name) {
      api(`/stages?id=${selectedItem.stage_id}`)
       .then((response) => {
      const newStage = response.data;
      setStage(newStage[0]);
      console.log(stage)
      })
    }
  }, [selectedItem])

  const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            _filteredItems.push(item);
        }
    }

    setFilteredItems(_filteredItems);
  }



  return (
    <>
      <h1>Orbis 2.0</h1>
      <div className="flex">
      <div>
        <h1>Selecione a ferramenta</h1>
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems} placeholder='Ferramenta'
            virtualScrollerOptions={{ itemSize: 38 }} field="name" dropdown onChange={(e) => setSelectedItem(e.value)} />
      </div>
      <div>
        <h2>Ferramenta: {selectedItem.name}</h2>
        <p>Tipo: {selectedItem.type}</p>
        <p>Etapa: {stage.name}</p>
        <p>A etapa de {stage.name}: {stage.description}</p>
      </div>
      </div>
    </>
  );
}

export default App;