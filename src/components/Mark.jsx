import { styled } from "styled-components";
const Mark = ({
  textColor,
  backgroundColor,
  children,
  top,
  left,
  paddingX,
  paddingY,
  fontSize,
  width,
}) => {
  return (
    <Container
      textColor={textColor}
      backgroundColor={backgroundColor}
      top={top}
      left={left}
      paddingY={paddingY}
      paddingX={paddingX}
      fontSize={fontSize}
      width={width}
    >
      {children}
    </Container>
  );
};

const mark_colors = {
  darkBlue: "#003865",
  greenBlue: "#2c94a7",
  lightBlue: "#8EE2EA",
  veryLigthBlue: "#69e2f8",
  white: "#ffffff",
  yellow: '#FDD26E',
  gray: '#b8b8b8',
};

const mark_text_colors = {
  darkBlue: "#003865",
  white: "#ffffff",
};

const Container = styled.div`
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: ${(props) => props.paddingY || "1%"}
    ${(props) => props.paddingX || "2%"};
  color: ${(props) =>
    props.textColor ? mark_text_colors[props.textColor] : "#ffffff"};
  text-align: center;
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor ? mark_colors[props.backgroundColor] : "#000000"};
  z-index: 20;
  font-size: ${(props) => props.fontSize || "90%"};
  transform: translate(-50%, -50%);
  width: ${(props) => props.width || "7%"};
  @media (min-width: 500px) and (max-width: 1000px) {
    padding: 3%
}
`

export default Mark;
