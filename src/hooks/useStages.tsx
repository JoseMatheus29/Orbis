// import { createContext, ReactNode, useContext, useState, useEffect } from 'react'
// import { api } from '../services/api'

// interface IStage {
//     id: number;
//     name: string;
//     description: string;
// }

// interface IStagesContextData {
//     stages: IStage[]
// }

// interface IStagesProvider {
//     children: ReactNode;
// }

// const StagesContext = createContext<IStagesContextData>(
//     {} as IStagesContextData
// )

// export function StagesProvider({ children }: IStagesProvider) {

//     const [ stages, setStages] = useState<IStage[]>([]);

//     useEffect(() => {
//         let url = '/stages'

//         api(url)
//             .then(response => setStages(response.data))
//     }, [])

//     return (
//         <StagesContext.Provider value={{ stages }}>
//             { children }
//         </StagesContext.Provider>
//     )
// }

// export function useStages() {
//     const context = useContext(StagesContext);

//     return context
// }

