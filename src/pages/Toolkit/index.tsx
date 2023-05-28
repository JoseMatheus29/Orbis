import Card from "../../components/Card";
import Header from "../../components/Header";
import { Content, GridCards } from "./styles";

const Toolkit = () => {
    return ( 
        <>
            <Header/>
            <Content>
                <GridCards>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </GridCards>
            </Content>
        </>
    )
}
export default Toolkit;