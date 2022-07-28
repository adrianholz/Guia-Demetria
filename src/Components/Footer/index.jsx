import "./style.css";
import { Link } from "react-router-dom";
import {
  useNavigate,
  createSearchParams,
  matchRoutes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let searchTerm;

  function search(filter) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname !== "/search") {
      navigate({
        pathname: "/search",
        search: createSearchParams({ filter: filter }).toString(),
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let params = { term: searchTerm };
      if (filter !== undefined) {
        params.filter = filter;
      }
      navigate("/search", { state: params });
      window.scrollTo({ top: 0, behavior: "smooth" });
      props.changeTerm(params);
    }
  }

  return (
    <>
      <footer>
        <div className="footer-content">
          <span>Guia Demétria</span>
          <div>
            <h4>Contate-nos</h4>
            <div>
              <img src="assets/address.svg" alt="Endereço" />
              <address>
                Km. 4 da Rod. Gastão dal Farra
                <br />
                Bairro Demétria
                <br />
                Botucatu, SP - Brasil
              </address>
              <img src="assets/email.svg" alt="E-mail" />
              <a href="mailto:adrian.holzschuh@gmail.com">
                adrian.holzschuh@gmail.com
              </a>
              <img src="assets/phone.svg" alt="Celular" />
              <a href="tel:+5514998997707">+55 (14) 99899-7707</a>
            </div>
            <div className="social">
              <a href="https://facebook.com/hostnetbotucatu" target="_blank">
                <img src="assets/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://instagram.com/hostnetbotucatu" target="_blank">
                <img src="assets/instagram.svg" alt="Instagram" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=14998997707"
                target="_blank"
              >
                <img src="assets/whatsapp.svg" alt="WhatsApp" />
              </a>
            </div>
          </div>
          <div>
            <h4>Categorias</h4>
            <div>
              <div>
                <a onClick={() => search("Gastronomia")}>Gastronomia</a>
                <a onClick={() => search("Bem-Estar")}>Bem-Estar</a>
                <a onClick={() => search("Serviços")}>Serviços</a>
                <a onClick={() => search("Transporte")}>Transporte</a>
                <a onClick={() => search("Cursos")}>Cursos</a>
              </div>
              <div>
                <a onClick={() => search("Biodinâmica")}>Orgânicos</a>
                <a onClick={() => search("Lojas")}>Lojas</a>
                <a onClick={() => search("Educação")}>Educação</a>
                <a onClick={() => search("Religiosidade")}>Religiosidade</a>
                <a onClick={() => search("Eventos")}>Eventos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>
          Guia Demétria | Desenvolvido por{" "}
          <a href="https://botucatu.hostnet.com.br" target="_blank">
            Hostnet Botucatu
          </a>
        </p>
      </div>
    </>
  );
}
