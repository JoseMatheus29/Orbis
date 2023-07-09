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
            <h4>SE LIGA NA DICA</h4>
           <p> {text}</p>
        </Container>
        </>
        
    )
}

export default Tips