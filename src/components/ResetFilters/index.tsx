import { ResetFiltersStyle } from "./styles";

interface IResetFilters {
    onClick:() => void;
}

const ResetFilters = ({onClick}: IResetFilters) => {
    return(
        <>
            <ResetFiltersStyle  onClick={onClick} >
                Limpar Filtros
            </ResetFiltersStyle >
        </>
    )
}   
export default ResetFilters;