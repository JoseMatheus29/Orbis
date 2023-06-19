import styled from 'styled-components';

export const Main = styled.main`  
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 30px;

    h1 {
      font-size: 5rem;
      margin-bottom: 8px;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: 16px;
    }
    p {
        font-size: 1rem;
        line-height: 160%;
        margin-bottom: 24px;
    }

    button {
        width: 50%;
    }

    button + button {
        margin-left: 20px;
    }

    img {
        width: 50%;
    }
`
export const Section = styled.section`
    background-color: #FFE9B0;
    padding: 74px 64px; 
    margin:  70px 125px;
    border-radius: 20px;
    border-color: #F29F19;
    box-shadow: 5px 5px 0 #F29F19;
    color: #474747;

    h1 {
        font-family: "Sansita", sans-serif;
        font-size: 3rem;
        font-weight: 500;
    }
    p{
        font-family: "Raleway", sans-serif;
    }
`
export const TextsRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 4% 0;
    

    p {
        line-height: 160%;
        font-size: 1rem;
        font-weight: 400;
        
    }
`

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
`
export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        color: #F46142;
        font-family: 'Sansita', sans-serif;
        text-shadow: 2px 2px 0 #474747;
    }

    h2{
        color: #474747;
        font-family: 'Raleway', sans-serif;
    }

    p{
        color: #474747;
        font-family: 'Raleway', sans-serif;
    }

`
export const Animation = styled.div`
padding-bottom: 20%;

    h1{
        color: #474747;
        font-family: 'Sansita', sans-serif;
    }
.circles{
display: flex;
align-items: center;
justify-content: center;
}
.circle1{
  background-color: #9882E3;
  box-shadow: 3px 7px 0 #725AC1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 1450px;
  left: 150px;
  transform: translateX(-50%);
  color: white;
}

.circle2 {
  background-color: #FDBC42;
  box-shadow: 3px 7px 0 #F29F19;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 1650px;
  left: 80px;
  transform: translateX(-50%);
  color: white;
}

.circle3 {
  background-color: #19888F;
  border: none;
  box-shadow: 3px 7px 0 #136469;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 1650px;
  left: 250px;
  transform: translateX(-50%);
  color: white;
}

`