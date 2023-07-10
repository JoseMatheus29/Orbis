import  {Container}  from "./styles"
import OrbisTip from '../../assets/tip-orbis.svg';

interface ICardTips{
    text:string,
    template:string
}

const Tips = ({ text, template} : ICardTips) => {
    
    return (
        <>
        <Container
            variant= {template}
        >
            <img src={OrbisTip}/>
            <h4>SE LIGA NA DICA</h4>
           <p> {text}</p>
        </Container>
        </>
        
    )
}

export default Tips