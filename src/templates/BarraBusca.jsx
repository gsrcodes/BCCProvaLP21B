import Carrinho from './Carrinho';
export default function BarraBusca(props) {
    return (
        <>
            <div style={{
                width: '100%',
                display: 'flex',
                backgroundColor: 'rgb(255,255,0)',
                margin: '0px',
                padding: '10px',
                height: '60px',
            }}>
                <div style={{
                    backgroundColor: 'rgb(255,200,0)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:'10px 0 0 10px',
                    outline: 'none',
                }} id='icone-lupa'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div style={{
                    width: '80%',
                }} id='inputBusca'>
                    <input 
                    style={{
                        height: '40px',
                        width: '100%',
                        border: '0px',
                        outline: 'none',
                    }}
                    type="text" 
                    placeholder="o que você procura?" 
                    />
                </div>
                <div 
                    style={{
                        margin: '0 20px 0 0',
                    }} id='botao-busca'>
                    <button type='button'
                        style={{
                            height: '40px',
                            width: '100%',
                            color: 'white',
                            backgroundColor: 'rgb(255,60,60)',
                            border: '0px',
                            borderRadius: '0 10px 10px 0',
                        }}
                    >Buscar</button>
                </div>
                <div>
                    <Carrinho qtdCarrinho={props.qtdCarrinho} setCarrinho={props.setCarrinho}/>
                </div>
            </div>
            <div style={{
                width: '100%',
                height: '10px',
                backgroundColor: 'rgb(255,200,0)',
            }}>
            </div>
        </>
    );
}