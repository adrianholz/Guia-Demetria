import "./styles.css";
import Header from "./../../Components/Header";
import Footer from "./../../Components/Footer";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Home(props) {
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

  function getBase(file) {
    const baseImage = document.querySelector("#baseImage");
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (file.type.includes("image")) {
        baseImage.value = reader.result;
      } else {
        alert("Insira uma imagem");
        // setImage(undefined);
      }
    };
  }

  return (
    <>
      <Header changeTerm={(term) => console.log()} />

      <section id="main">
        <div className="main-content">
          <div className="content">
            <span>Bem-Vindo ao</span>
            <h1>Guia Demétria</h1>
            <p>Todas as atividades do bairro em um só lugar.</p>
            <a onClick={() => search(null)}>Acesse</a>
          </div>
          <div className="picture"></div>
        </div>
      </section>

      <section id="businesses">
        <img src="assets/leaves-dec.png" alt="Folhas" />
        <div className="businesses-content">
          <div className="content">
            <span>Nossos</span>
            <h1>Negócios</h1>
            <p>
              Clique nas categorias presentes nas placas para visualizar as
              opções do bairro.
            </p>
          </div>
          <div className="links">
            <img src="assets/duosign.png" alt="Placas" />
            <img src="assets/sign.png" alt="Placa" />
            <a onClick={() => search("Gastronomia")}>Gastronomia</a>
            <a onClick={() => search("Bem-Estar")}>Bem-Estar</a>
            <a onClick={() => search("Serviços")}>Serviços</a>
            <a onClick={() => search("Transporte")}>Transporte</a>
            <a onClick={() => search("Cursos")}>Cursos</a>
            <a onClick={() => goToServices()}>Diversos</a>
            <a onClick={() => search("Eventos")}>Eventos</a>
            <a onClick={() => search("Orgânicos")}>Orgânicos</a>
            <a onClick={() => search("Lojas")}>Lojas</a>
            <a onClick={() => search("Educação")}>Educação</a>
            <a onClick={() => search("Religiosidade")}>Religiosidade</a>
          </div>
        </div>
      </section>

      <section id="form">
        <div className="form-content">
          <h1>Não Encontrou seu Negócio?</h1>
          <p>
            Preencha o formulário abaixo ou entre em contato conosco para
            incluirmos seu serviço no Guia Demétria.
          </p>
          <div className="form">
            <div className="form-left">
              <h4>Fale com a gente</h4>
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
            <div className="form-right">
              <form action="https://form.ultramail.com.br/" method="POST">
                <div>
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nome do Negócio"
                    required
                  />
                </div>
                <div>
                  <label for="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(14) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="contato@email.com"
                  />
                </div>
                <div>
                  <label for="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Endereço do Negócio"
                  />
                </div>
                <div>
                  <label for="site">Site</label>
                  <input
                    type="text"
                    id="site"
                    name="site"
                    placeholder="Site do Negócio"
                  />
                </div>
                <div>
                  <label for="category">Categoria</label>
                  <select name="category" id="category">
                    <option value="gastronomia">Gastronomia</option>
                    <option value="bem-estar">Bem-Estar</option>
                    <option value="servicos">Serviços</option>
                    <option value="transporte">Transporte</option>
                    <option value="cursos">Cursos</option>
                    <option value="organicos">Orgânicos</option>
                    <option value="lojas">Lojas</option>
                    <option value="educacao">Educação</option>
                    <option value="religiosidade">Religiosidade</option>
                    <option value="eventos">Eventos</option>
                  </select>
                </div>
                <div>
                  <label for="time">Horário de Funcionamento</label>
                  <input type="time" id="time-start" name="time-start" />
                  <span>até</span>
                  <input type="time" id="time-end" name="time-end" />
                </div>
                <div>
                  <label for="description">Descrição</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    cols="30"
                    placeholder="Até 20 palavras"
                    resize="none"
                  ></textarea>
                </div>
                <div>
                  <label for="image">Imagens do Negócio</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(event) => getBase(event.target.files[0])}
                  />
                </div>
                <input type="hidden" id="baseImage" name="baseImage" />
                <input
                  type="hidden"
                  name="key"
                  value="eyJpdiI6Im5YbENHTmN1cVNoVGV3cXlyaDJWbFE9PSIsInZhbHVlIjoiQ1oybnU3aGNTSUlxaDRERldmSUZYdlBQeGJod0V1c21JaWFYT2ZqMUh2VTVcL3o4XC9tdTM1N2ZGMktUVXRZOElRczhDRVdidGd1YUsyOVJvaGFENnN1SEZwUlhibjNPc0VPWnZ5Z2VZdm9Oa2FWWDJOTWh3UVV3M0RKNkhKdTkxaHFRSXNRVGxidFhSMVBCdHZWOXFxdlEySzVsMnQwTzhjdHZvWXJRXC9ySHRWRVpwS2tDbjAxYVpwb3U0NFRiWEJ0N0YyUXZOQWFibHg1N0xYeG8ybENtZz09IiwibWFjIjoiM2YyMGUzYTUwZjFhNDMwMDk2MTE0OTgzZTZkZTdlYzFlNWVjMGJjZjZiOTM1ZjY0OTc0YWM3Y2VlMzdkMDZmMSJ9"
                ></input>
                <div className="term-check">
                  <input type="checkbox" name="terms" id="terms" required />
                  <label htmlFor="terms">
                    Eu aceito os{" "}
                    <a onClick={() => goToTerms()}>Termos e Condições</a>
                  </label>
                </div>
                <input className="form-button" type="submit" value="Enviar" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer changeTerm={(term) => console.log()} />
    </>
  );
}
