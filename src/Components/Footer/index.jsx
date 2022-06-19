import "./style.css"

export default function Footer(){
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
          <div class="social">
            <a href="https://facebook.com/hostnetbotucatu" target="_blank"><img src="assets/facebook.svg" alt="Facebook" /></a>
            <a href="https://instagram.com/hostnetbotucatu" target="_blank"><img src="assets/instagram.svg" alt="Instagram" /></a>
            <a href="https://api.whatsapp.com/send/?phone=14998997707" target="_blank"><img src="assets/whatsapp.svg" alt="WhatsApp" /></a>
          </div>
        </div>
        <div>
          <h4>Categorias</h4>
          <div>
            <div>
              <a>Alimentação</a>
              <a>Bem-Estar</a>
              <a>Serviços Gerais</a>
              <a>Transporte</a>
              <a>Cursos</a>
            </div>
            <div>
              <a>Biodinâmica</a>
              <a>Locais</a>
              <a>Educação</a>
              <a>Grupos</a>
              <a>Eventos</a>
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