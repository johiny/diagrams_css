import {styled} from 'styled-components'

const HorizontalLineDotted = ({width, arrow, left, top}) => {
  return (
    <Container width={width} arrow={arrow} left={left} top={top}>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    width: ${props => props.width || '5%'}; /* Ajusta la longitud de la línea según sea necesario */
    border-bottom: dotted  #6f6f6f 2px;
    &::after{
    display: ${props => props.arrow ? 'block' : 'none'};
    bottom: -5px;
    content: '';
    position: absolute;
    right: -5px;
    width: 0;
    height: 0;
    z-index: 10;
    border-top: 4px solid transparent; /* Ajusta el tamaño de la flecha según sea necesario */
    border-bottom: 4px solid transparent;
    border-left: 8px solid #6f6f6f; /* Color de la flecha */
    transform: rotate(0deg);
    }
`

export default HorizontalLineDotted