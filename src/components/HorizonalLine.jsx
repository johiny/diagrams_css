import {styled} from 'styled-components'
export const HorizonalLine = ({width, arrow, left, top, backArrow}) => {
  return (
    <Container width={width} arrow={arrow} left={left} top={top} backArrow={backArrow}>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    width: ${props => props.width || '5%'}; /* Ajusta la longitud de la línea según sea necesario */
    height:  2px; /* Ajusta el grosor de la línea según sea necesario */
    background-color: #6f6f6f;
    &::after{
    display: ${props => props.arrow ? 'block' : 'none'};
    bottom: -3px;
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
    &::before{
    display: ${props => props.backArrow ? 'block' : 'none'};
    bottom: -3px;
    content: '';
    position: absolute;
    left: -5px;
    width: 0;
    height: 0;
    z-index: 10;
    border-top: 4px solid transparent; /* Ajusta el tamaño de la flecha según sea necesario */
    border-bottom: 4px solid transparent;
    border-left: 8px solid #6f6f6f; /* Color de la flecha */
    transform: rotate(180deg);
    }
`