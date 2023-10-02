import { useState, useEffect } from "react";
export default function Carrinho(props) {
    useEffect(() => {
        console.log("Quantidade no Carrinho:", props.qtdCarrinho);
      }, [props.qtdCarrinho]);
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-between",
            backgroundColor: 'rgb(255, 60, 60)',
            width: '250px',
            height: '40px',
            border: '0px',
            margin: '0px',
            padding: '0px',
            borderRadius: '10px',
        }}>
            <div style={{
                textAlign: 'center',
                margin: '4px',
                padding: '2px',
                width: '40px'
            }} id='icone-carrinho'>
                <button id='botao-carrinho' style={{
                    backgroundColor: "inherit",
                    border: '0px',
                }
                } type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
            <div id='meu-carrinho' style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0px',
                padding: '1px',
            }}>
                <p style={{
                    color: 'white',
                    margin: '0px',
                    padding: '0px',
                }}>meu carrinho</p>
                <p style={{
                    margin: '0px',
                    padding: '0px',
                }}>{props.qtdCarrinho || 0} item</p>
            </div>
            <div id='segurança' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                border: '0px',
                margin: '0px',
                padding: '0px',
                boxSizing: 'border-box',
            }}>
                <p style={{
                    backgroundColor: 'rgb(0,157,0)',
                    boxSizing: 'border-box',
                    margin: '0px',
                    padding: '0px',
                    width: '70px',
                    height: '20px',
                    borderRadius: '0 10px 0 0'
                }}>100%</p>
                <p style={{
                    backgroundColor: 'rgb(0,90,0)',
                    boxSizing: 'border-box',
                    margin: '0px',
                    padding: '0px',
                    border: '0px',
                    height: '20px',
                    width: '70px',
                    borderRadius: '0 0 10px 0'
                }}>seguro</p>
            </div>
        </div>
    );
}