import {styled} from "styled-components"
const DiagramContainer = ({children, marginTop}) => {
  return (
    <Container marginTop={marginTop}>
    {children}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: transparent;
  overflow: visible;
  margin-top: ${(props) => props.marginTop || 0};
  overflow-y: visible;
`
export default DiagramContainer