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
  background-color: transparent;
  overflow: auto;
`
export default DiagramContainer