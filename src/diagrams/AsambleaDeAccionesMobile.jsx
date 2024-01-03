import Mark from "../components/Mark";
import VerticalLine from "../components/VerticalLine";
import { HorizonalLine } from "../components/HorizonalLine";
import DiagramContainer from "../components/DiagramContainer";

const AsambleaDeAccionesMobile = () => {
  return (
    <DiagramContainer>
      <Mark
        backgroundColor={"darkBlue"}
        left={"50%"}
        top={"5%"}
        paddingY={"5%"}
        width={"70%"}
      >
        Asamblea de Accionistas
      </Mark>
      <Mark
        backgroundColor={"greenBlue"}
        left={"50%"}
        top={"15%"}
        paddingY={"5%"}
        width={"70%"}
      >
        Consejo de Administración
      </Mark>
      <VerticalLine left={"18%"} top={"18%"} height={"80%"} />
      <HorizonalLine width={'10%'} left={'18%'} top={'25%'}/>
      <Mark
        backgroundColor={"lightBlue"}
        left={"50%"}
        top={"25%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Consejo de Auditoría
      </Mark>
      <HorizonalLine width={'10%'} left={'18%'} top={'35%'}/>
      <Mark
        backgroundColor={"lightBlue"}
        left={"50%"}
        top={"35%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Consejo de Crédito
      </Mark>
      <VerticalLine left={"26%"} top={"35%"} height={"20%"} />
      <HorizonalLine width={'10%'} left={'26%'} top={'45%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"45%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Comité de Cobros
      </Mark>
      <HorizonalLine width={'10%'} left={'26%'} top={'55%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"55%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Comité FHA
      </Mark>
      <HorizonalLine width={'10%'} left={'18%'} top={'65%'}/>
      <Mark
        backgroundColor={"lightBlue"}
        left={"50%"}
        top={"65%"}
        paddingY={"5%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Comité de Gestión <br/> de Riesgos
      </Mark>
      <HorizonalLine width={'10%'} left={'18%'} top={'75%'}/>
      <Mark
        backgroundColor={"lightBlue"}
        left={"50%"}
        top={"75%"}
        paddingY={"5%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Comité de <br/> Cumplimiento
      </Mark>
      <HorizonalLine width={'10%'} left={'18%'} top={'85%'}/>
      <Mark
        backgroundColor={"lightBlue"}
        left={"50%"}
        top={"85%"}
        paddingY={"5%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
        Comité de Contingencia <br/> de Recuperación Corp.
      </Mark>
      <HorizonalLine width={'10%'} left={'18%'} top={'98%'}/>
      <Mark
        backgroundColor={"greenBlue"}
        left={"50%"}
        top={"97%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"white"}
      >
       Gerencia General
      </Mark>
      <VerticalLine left={"26%"} top={"98%"} height={"52%"} />
      <HorizonalLine width={'10%'} left={'26%'} top={'110%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"110%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
       Comité de Ética
      </Mark>
      <HorizonalLine width={'10%'} left={'26%'} top={'120%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"120%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
       Comité de Gerentes
      </Mark>
      <HorizonalLine width={'10%'} left={'26%'} top={'130%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"130%"}
        paddingY={"7%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
       Comité de Tecnología
      </Mark>
      <HorizonalLine width={'10%'} left={'26%'} top={'140%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"140%"}
        paddingY={"5%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
       Comité de Continuidad <br/> del Negocio
      </Mark>
      <HorizonalLine width={'10%'} left={'26%'} top={'150%'}/>
      <Mark
        backgroundColor={"white"}
        left={"58%"}
        top={"150%"}
        paddingY={"5%"}
        width={"50%"}
        textColor={"darkBlue"}
      >
       Comité de Continuidad <br/> del Negocio
      </Mark>
    </DiagramContainer>
  );
};
export default AsambleaDeAccionesMobile;
