import RouteElement from "./routes";
import { GlobalStyle } from "./styles/global";                                  
import { FormProvider } from './hooks/useForm';
function App() {
  

  return (
    <>
    <FormProvider>
        <GlobalStyle/>
        <RouteElement/>
    </FormProvider>
    </>
  )
}

export default App;
