import React from 'react';

import '../../../styles/components/Home/servicos-home.css';

import cerimonialImg from '../../../images/Cerimonialista.jpg';
import paraSuaFestaImg from '../../../images/paraSuaFesta.jpg';
import videoImg from '../../../images/Video.jpg';
import SiImg from '../../../images/somEIluminacao.jpg';

const ServicosHome = () => {
    return (
        <div id="component-servicos-home">
            <div className="header-component-servicos-home">
                <h2>Serviços</h2>
            </div>

            <div className="content-left-component-servicos-home">
                <img src={paraSuaFestaImg} alt="" className="imagem-content-left-component-servicos-home"/>
             
                <div className="texto-content-left-component-servicos-home">
                    <h3 className="title-texto-content-left-component-servicos-home">Para sua festa</h3>
                    <hr className="line-texto-content-left-component-servicos-home"/>
                    <p className="text-texto-content-left-component-servicos-home">A WM conta com uma ampla gama de serviços como sonorização ambiente, iluminação decorativa, som e luz para festas, aluguel de som, eventos empresariais e também pacotes para festas!</p>
                </div>
            </div>

            <div className="content-right-component-servicos-home">
                <div className="texto-content-right-component-servicos-home">
                    <h3>Cerimonial</h3>
                    <hr/>
                    <p>O Serviço de Cerimonial é essencial para um evento de sucesso. Nós oferecemos acompanhamento de especialistas na área de eventos para te acompanhar desde a indicação de fornecedores até a finalização do evento, incluindo o serviço de recepcionistas e babá de doces!</p>
                </div>
                    <img src={cerimonialImg}  className="imagem-content-right-component-servicos-home" alt=""/>
            </div>

            <div className="content-left-component-servicos-home">
                    <img src={videoImg} alt="" className="imagem-content-left-component-servicos-home"/>
               
                <div className="texto-content-left-component-servicos-home">
                    <h3 className="title-texto-content-left-component-servicos-home">Videos</h3>
                    <hr className="line-texto-content-left-component-servicos-home"/>
                    <p className="text-texto-content-left-component-servicos-home">Com a WM a sua festa será 100% em videoclipes, com videos que vão desde os anos 50 até os dias de hoje, para você matar a saudade dos velhos tempos e ainda curtir as baladas atuais!</p>
                </div>
            </div>

            <div className="content-right-component-servicos-home">
                <div className="texto-content-right-component-servicos-home">
                    <h3>Som e Iluminação</h3>
                    <hr/>
                    <p>Equipamentos de Som profissionais, equalizados de acordo com as necessidades do seu espaço, trazendo um som de qualidade e agradável! A iluminação acompanha as últimas tecnologias, trazendo efeitos que vão encantar todos na festa!</p>
                </div>
                    <img src={SiImg} alt="" className="imagem-content-right-component-servicos-home"/>
            </div>

        </div>

    )
}

export default ServicosHome;