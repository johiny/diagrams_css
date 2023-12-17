import {styled} from "styled-components"
const DiagramContainer = ({children}) => {
  return (
    <Container>
    {children}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  @media (min-width: 1000px){
    min-height: 1080px;
    width: 1920px;
  }
  background-color: transparent;
`
export default DiagramContainer