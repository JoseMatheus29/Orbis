import { ToolsProvider } from "./hooks/useTools";
import RouteElement from "./routes";
import { GlobalStyle } from "./styles/global";

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        
function App() {

  return (
    <>
      <ToolsProvider>
        <GlobalStyle/>
        <RouteElement/>
      </ToolsProvider>
    </>
  )
}

export default App
