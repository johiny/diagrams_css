import ReactDOM from 'react-dom/client'
import AsambleaDiagram from "./components/AsambleaDiagram"
import AsambleaDiagramExtended from "./components/AsambleaDiagramExtended"
import './index.css'

if(document.getElementById('diagram_1')){
    ReactDOM.createRoot(document.getElementById('diagram_1')).render(<AsambleaDiagram/>);
}
if(document.getElementById('diagram_2')){
    ReactDOM.createRoot(document.getElementById('diagram_2')).render(<AsambleaDiagramExtended/>);
}
    
