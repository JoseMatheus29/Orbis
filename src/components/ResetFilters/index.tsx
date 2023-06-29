import { ResetFiltersStyle } from "./styles";
import Reset from '../../assets/icon/close.svg';

interface IResetFilters {
    onClick:() => void;
}

const ResetFilters = ({onClick}: IResetFilters) => {
    return(
        <>
            <ResetFiltersStyle  onClick={onClick} >
                <img src={Reset} alt="" />Limpar Filtros
            </ResetFiltersStyle >
        </>
    )
}   
export default ResetFilters;