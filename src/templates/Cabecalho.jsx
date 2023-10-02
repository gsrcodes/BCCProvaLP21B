import logo from "../assets/imagens/ricardoeletro.png";

export default function Cabecalho(props){
    return(
        <header style={
            {
                margin: '0px',
                padding: '0px',
            }
        }>
            <img src={logo} alt="Logo"/>            
        </header>
    );
}