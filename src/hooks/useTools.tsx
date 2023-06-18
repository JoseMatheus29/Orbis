// import { createContext, ReactNode, useContext, useState, useEffect } from 'react'
// import { api } from '../services/api'

// interface ITool {
//     id: number;
//     name_pt: string;
//     name_en: string;
//     type: string;
//     effort: string | number;
//     Stage_idStage: string;
//     time: string | number;
// }


// interface IToolsContextData {
//     tools: ITool[];
//     isLoading: boolean;
// }

// interface IToolsProvider {
//     children: ReactNode;
// }

// const ToolsContext = createContext<IToolsContextData>(
//     {} as IToolsContextData
// )

// export function ToolsProvider({ children }: IToolsProvider) {

//     const [ tools, setTools ] = useState<ITool[]>([]);
//     const [ isLoading, setIsLoading ] = useState(true);

//     useEffect(() => {
//         let url = '/Tools/list';
      
//         setIsLoading(true); // Define isLoading como true antes de buscar os dados
      
//         api(url)
//           .then(response => {
//             setTools(response.data);
//             setIsLoading(false); // Define isLoading como false quando os dados são carregados
//           })
//       }, []);

//     return (
//         <ToolsContext.Provider value={{ tools, isLoading }}>
//             { children }
//         </ToolsContext.Provider>
//     )
// }

// export function useTools() {
//     const context = useContext(ToolsContext);

//     return context
// }

