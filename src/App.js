import { useEffect, useState } from "react";
import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import Carrinho from "./templates/Carrinho";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : {};
  });
  const [qtdCarrinho, setQtdCarrinho] = useState();

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    setQtdCarrinho(calcularTotalItensCarrinho());
  }, [carrinho]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
  }, []);

  const adicionarAoCarrinho = (produto, quantidade) => {
    setCarrinho((prevCarrinho) => {
      console.log(quantidade);
      const novoCarrinho = { ...prevCarrinho };
  
      if (novoCarrinho[produto.id]) {
        novoCarrinho[produto.id].quantidade += parseInt(quantidade, 10);
      } else {
        novoCarrinho[produto.id] = {
          produto,
          quantidade: Math.max(parseInt(quantidade, 10), 1),
        };
      }

      return novoCarrinho;
    });
  };

  const calcularTotalItensCarrinho = () => {
    let total = 0;
    for (const id in carrinho) {
      total += carrinho[id].quantidade;
    }
    return total;
  };

  return (
    <div className="App">
      <Cabecalho />
      <BarraBusca qtdCarrinho={qtdCarrinho} setCarrinho={setCarrinho} />
      <GradeProdutos
        listaProdutos={produtos}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />
    </div>
  );
}

export default App;