import Mark from "../components/Mark";
import VerticalLine from "../components/VerticalLine";
import { HorizonalLine } from "../components/HorizonalLine";
import DiagramContainer from "../components/DiagramContainer";
const AsambleaDeAccionistas = () => {
  return (
<DiagramContainer>
<Mark backgroundColor={'darkBlue'} left={'50%'} paddingY={'0.8%'}  top={'5%'} >
Asamblea de<br/> Accionistas
</Mark>
<VerticalLine arrow left={'50%'} top={'6%'}/>  
<Mark backgroundColor={'greenBlue'}left={'50%'} paddingY={'0.8%'} top={'15%'} >
Consejo de<br/> Administración
</Mark>
<VerticalLine height={'40.2%'} arrow  left={'49.8%'} top={'18%'}/>
<HorizonalLine width={'90%'} left={'5%'} top={'25%'}/>
<VerticalLine height={'6%'} arrow  left={'5%'} top={'25%'}/>
<VerticalLine height={'6%'} arrow  left={'25%'} top={'25%'}/>
<VerticalLine height={'6%'} arrow  left={'60%'} top={'25%'}/>
<VerticalLine height={'6%'} arrow  left={'78%'} top={'25%'}/>
<VerticalLine height={'6%'} arrow  left={'95%'} top={'25%'}/>
<Mark backgroundColor={'lightBlue'} left={'6%'} top={'36%'} paddingY={'0.8%'}  paddingX={'1.5%'} textColor={'darkBlue'}>
Comité de Auditoria
</Mark>
<Mark backgroundColor={'lightBlue'}left={'25%'} paddingY={'1.2%'} top={'35%'} paddingX={'1.5%'}textColor={'darkBlue'}>
Comité de Crédito
</Mark>
<Mark backgroundColor={'lightBlue'}left={'60%'} top={'37%'}  paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Gestión <br/> de Riesgos
</Mark>
<Mark backgroundColor={'lightBlue'}left={'78%'} top={'36%'}  paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de <br/> Cumplimiento
</Mark>
<Mark backgroundColor={'lightBlue'}left={'94%'} top={'37%'}  paddingY={'0.8%'} width={'9%'} paddingX={'1%'} textColor={'darkBlue'}>
Comité de Contingencia <br/> de Recuperacion Corp.
</Mark>
<VerticalLine height={'4%'}  position={'absolute'} left={'25%'} top={'38%'}/>
<HorizonalLine width={'13%'} position={'absolute'} left={'18.8%'} top={'42%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'18.8%'} top={'42%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'31.8%'} top={'42%'}/>
<Mark backgroundColor={'white'}left={'18%'} top={'50%'} paddingX={'1.5%'} paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Auditoría
</Mark>
<Mark backgroundColor={'white'}left={'32%'} top={'50%'} paddingX={'1.5%'} paddingY={'1.2%'} textColor={'darkBlue'}>
Comité de Crédito
</Mark>
<Mark backgroundColor={'greenBlue'}left={'50%'} top={'63%'} paddingX={'1.5%'} paddingY={'1.2%'} textColor={'white'}>
Gerencia General
</Mark>
<VerticalLine height={'8%'} arrow  position={'absolute'} left={'49.8%'} top={'67%'}/>
<HorizonalLine width={'80%'} position={'absolute'} left={'10%'} top={'71%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'10%'} top={'71%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'29%'} top={'71%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'68%'} top={'71%'}/>
<VerticalLine height={'4%'} arrow  position={'absolute'} left={'90%'} top={'71%'}/>
<Mark backgroundColor={'white'}left={'10%'} top={'79%'} paddingX={'1.5%'} paddingY={'1.2%'} textColor={'darkBlue'}>
Comité de Ética
</Mark>
<Mark backgroundColor={'white'}left={'29%'} top={'79%'} paddingX={'1.5%'} paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Gerentes
</Mark>
<Mark backgroundColor={'white'}left={'50%'} top={'79%'} paddingX={'1.5%'} paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Tecnologia
</Mark>
<Mark backgroundColor={'white'}left={'68%'} top={'79%'} width={'9%'} paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Continuidad <br/> del Negocio
</Mark>
<Mark backgroundColor={'white'}left={'90%'} top={'79%'} width={'9%'} paddingY={'0.8%'} textColor={'darkBlue'}>
Comité de Gestión de <br/> Activos y Pasivos
</Mark>
</DiagramContainer>
)
}

export default AsambleaDeAccionistas