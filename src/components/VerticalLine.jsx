import {styled} from 'styled-components'

const VerticalLine = ({height, arrow, left, top}) => {
  return (
    <Container height={height} arrow={arrow} left={left} top={top}>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    width: 2px; 
    height:${props => props.height || '5%'}; 
    background-color: #6f6f6f;
    &::after{
    display: ${props => props.arrow ? 'block' : 'none'};
    bottom: -2px;
    content: '';
    position: absolute;
    right: -3px;
    width: 0;
    height: 0;
    z-index: 20;
    border-top: 4px solid transparent; /* Ajusta el tamaño de la flecha según sea necesario */
    border-bottom: 4px solid transparent;
    border-left: 8px solid #6f6f6f; /* Color de la flecha */
    transform: rotate(90deg);
    }
`

export default VerticalLine