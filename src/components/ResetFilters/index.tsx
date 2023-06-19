interface IResetFilters {
    onClick:() => void;
}

const ResetFilters = ({onClick}: IResetFilters) => {
    return(
        <>
            <div onClick={onClick} >
                Limpar Filtros
            </div>
        </>
    )
}   
export default ResetFilters;