import { ResetFiltersStyle } from "./styles";
import Reset from '../../assets/icon/close.svg';

interface IResetFilters {
    onClick:() => void;
    className: string;
}

const ResetFilters = ({onClick, className}: IResetFilters) => {
    return(
        <>
            <ResetFiltersStyle  onClick={onClick} className={className}>
                <img src={Reset} alt="" />Limpar Filtros
            </ResetFiltersStyle >
        </>
    )
}   
export default ResetFilters;