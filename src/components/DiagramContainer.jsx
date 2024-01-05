import {styled} from "styled-components"
const DiagramContainer = ({children}) => {
  return (
    <MetaContainer>
    <Container>
    {children}
    </Container>
    </MetaContainer>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  background-color: transparent;
  overflow: visible;
  overflow-y: visible;
  box-sizing: border-box;
`
const MetaContainer = styled.div`
position : relative;
width : 100%;
height: 100%
box-sizing: border-box;
`
export default DiagramContainer