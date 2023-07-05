import  {Container}  from "./styles"

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
            <h4>Se liga na dica</h4>
            {text}
        </Container>
        </>
        
    )
}

export default Tips