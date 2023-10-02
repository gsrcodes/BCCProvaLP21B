import BarraBusca from "../templates/BarraBusca";
import Carrinho from "../templates/Carrinho";

export default function BarraSuperior(props){
    return(
        <div>
            <BarraBusca/>
            <Carrinho/>
        </div>
    );
}