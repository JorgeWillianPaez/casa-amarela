import "./App.css";
import VetorAtividade1 from "./images/vetorAtividades1.svg";
import VetorAtividade2 from "./images/vetorAtividades2.svg";
import Logo from "./images/logo.svg";
import Background from "./images/background.png";
import VetorWhats from "./images/vetorWhats.svg";
import VetorContatos from "./images/vetorContatos.svg";
import WhatsappIcon from "./images/whatsIcon.svg";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="logo" />
        <div className="links">
          <a href="#atividades">Atividades</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contatos">Contatos</a>
          <button>Admin</button>
        </div>
      </header>
      <img src={Background} alt="background" />
      <main>
        <div id="atividades" className="atividades">
          <h1>Atividades</h1>
          <div>
            <div className="bloco blocoUm">
              <img src={VetorAtividade1} alt="vetorAtividades" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere tempus elementum. Ut rutrum sagittis cursus. Mauris
                blandit, arcu nec cursus pulvinar, ex lacus accumsan ligula,
                quis euismod est erat eget neque. Praesent tristique enim leo,
                vitae euismod nulla vehicula sit amet. Integer finibus leo
                cursus lacus pellentesque lacinia. In consectetur laoreet metus
                ut viverra. Curabitur vitae felis at justo tempus laoreet vitae
                eget lacus. Ut eu lorem tincidunt, dictum lectus sit amet,
                laoreet urna.
              </p>
            </div>
            <div className="bloco blocoDois">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere tempus elementum. Ut rutrum sagittis cursus. Mauris
                blandit, arcu nec cursus pulvinar, ex lacus accumsan ligula,
                quis euismod est erat eget neque. Praesent tristique enim leo,
                vitae euismod nulla vehicula sit amet. Integer finibus leo
                cursus lacus pellentesque lacinia. In consectetur laoreet metus
                ut viverra. Curabitur vitae felis at justo tempus laoreet vitae
                eget lacus. Ut eu lorem tincidunt, dictum lectus sit amet,
                laoreet urna.
              </p>
              <img src={VetorAtividade2} alt="vetorAtividades" />
            </div>
          </div>
        </div>
        <div id="sobre">
          <h1>Sobre nós</h1>
          <p>
            Somos um centro de convivência sem fins lucrativos. Nossa missão é
            promover a transformação social.ullam posuere tempus elementum. Ut
            rutrum sagittis cursus. Mauris blandit, arcu nec cursus pulvinar, ex
            lacus accumsan ligula, quis euismod est erat eget neque. Praesent
            tristique enim leo, vitae euismod nulla vehicula sit amet. Integer
            finibus leo cursus lacus pellentesque lacinia. In consectetur
            laoreet metus ut viverra. Curabitur vitae felis at justo tempus
            laoreet vitae eget lacus. Ut eu lorem tincidunt, dictum lectus sit
            amet, laoreet urna.
          </p>
        </div>
        <div id="contatos">
          <div style={{ position: "relative" }}>
            <h1>Contatos</h1>
            <div className="contatosContainer">
              <img src={VetorContatos} alt="vetorContatos" />
              <p>Faça uma doação direto em nossa conta bancária.</p>
              <p style={{ color: "#fdfd96", fontSize: "28px" }}>
                PIX FEAK: CNPJ 07.317.684/0001-07
              </p>
              <p>/casaamarelacampomagro</p>
              <p>@casa.amarela.osc</p>
            </div>
            <div className="whatsapp">
              <img src={VetorWhats} alt="Vetor Whatsapp" />
              <img src={WhatsappIcon} alt="Ícone Whatsapp" />
            </div>
            <p
              style={{
                fontFamily: "Nunito",
                position: "absolute",
                color: "black",
                right: "132px",
                bottom: "58px",
                width: "126px",
              }}
            >
              Entre em contato pelo WhatsApp
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
