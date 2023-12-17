import { useState, useEffect } from 'react';
import AsambleaDeAccionesMobile from '../diagrams/AsambleaDeAccionesMobile';
import AsambleaDeAccionistas from '../diagrams/AsambleaDeAccionistas';
const AsambleaDiagram = () => {
    const [anchuraPantalla, setAnchuraPantalla] = useState(window.innerWidth);
    const [anchuraMenor500, setAnchuraMenor500] = useState(window.innerWidth < 500);
  
    useEffect(() => {
      const manejarRedimensionVentana = () => {
        const nuevaAnchura = window.innerWidth;
        setAnchuraPantalla(nuevaAnchura);
        setAnchuraMenor500(nuevaAnchura < 500);
      };
  
      // Agrega un event listener para el evento de redimensionamiento de la ventana
      window.addEventListener('resize', manejarRedimensionVentana);
  
      // Limpia el event listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', manejarRedimensionVentana);
      };
    }, []); // Dependencia vacía para ejecutar el efecto solo una vez al montar el componente
  return (
    <>
    {anchuraMenor500 ? <AsambleaDeAccionesMobile/> : <AsambleaDeAccionistas/>}
    </>
  )
}

export default AsambleaDiagram