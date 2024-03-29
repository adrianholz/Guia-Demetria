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

  function goToServices() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({
      pathname: "/services",
    });
  }

  function goToTerms() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({
      pathname: "/terms",
    });
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
            <h4>Links Úteis</h4>
            <div>
              <div>
                <a onClick={() => search("Gastronomia")}>Gastronomia</a>
                <a onClick={() => search("Saúde")}>Saúde</a>
                <a onClick={() => search("Serviços")}>Serviços</a>
                <a onClick={() => search("Hospedagem")}>Hospedagem</a>
                <a onClick={() => search("Formação")}>Formação</a>
                <a onClick={() => goToServices()}>Indicações</a>
              </div>
              <div>
                <a onClick={() => search("Orgânicos")}>Orgânicos</a>
                <a onClick={() => search("Bem-Estar")}>Bem-Estar</a>
                <a onClick={() => search("Escolas")}>Escolas</a>
                <a onClick={() => search("Artes e Ofícios")}>Artes e Ofícios</a>
                <a onClick={() => search("Cultura")}>Cultura</a>
                <a onClick={() => goToTerms()}>Termos e Condições</a>
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
