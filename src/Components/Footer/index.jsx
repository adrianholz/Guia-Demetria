import "./style.css"
import { useNavigate } from "react-router-dom";

export default function Footer(){

  const navigate = useNavigate()
  let searchTerm

  function search(filter){
    let params = {term: searchTerm}
    if(filter !== undefined){
      params.filter = filter;
    }
    navigate("/search")
  }

  return (<>

    <footer>
      <div className="footer-content">
        <span>Guia do Demétria</span>
        <div>
          <h4>Contate-nos</h4>
          <div>
            <img src="assets/address.svg" alt="Endereço" />
            <address>Chácara de Recreio Jardim Alvorada<br />
              Rua Comercial do Alvorada<br />
              Botucatu, SP - Brasil</address>
            <img src="assets/email.svg" alt="E-mail" />
            <a href="mailto:adrian.holzschuh@gmail.com">adrian.holzschuh@gmail.com</a>
            <img src="assets/phone.svg" alt="Celular" />
            <a href="tel:+5514998997707">+55 (14) 99899-7707</a>
          </div>
          <div className="social">
            <a href="https://facebook.com/hostnetbotucatu" target="_blank"><img src="assets/facebook.svg" alt="Facebook" /></a>
            <a href="https://instagram.com/hostnetbotucatu" target="_blank"><img src="assets/instagram.svg" alt="Instagram" /></a>
            <a href="https://api.whatsapp.com/send/?phone=14998997707" target="_blank"><img src="assets/whatsapp.svg" alt="WhatsApp" /></a>
          </div>
        </div>
        <div>
          <h4>Categorias</h4>
          <div>
            <div>
              <a onClick={() => search("Alimentação") }>Alimentação</a>
              <a onClick={() => search("Bem-Estar") }>Bem-Estar</a>
              <a onClick={() => search("Serviços Gerais") }>Serviços Gerais</a>
              <a onClick={() => search("Transporte") }>Transporte</a>
              <a onClick={() => search("Cursos") }>Cursos</a>
            </div>
            <div>
              <a onClick={() => search("Biodinâmica") }>Biodinâmica</a>
              <a onClick={() => search("Locais") }>Locais</a>
              <a onClick={() => search("Educação") }>Educação</a>
              <a onClick={() => search("Grupos") }>Grupos</a>
              <a onClick={() => search("Eventos") }>Eventos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div className="copyright">
      <p>Guia do Demétria | Desenvolvido por <a href="https://botucatu.hostnet.com.br" target="_blank">Hostnet Botucatu</a></p>
    </div>

  </>)
}