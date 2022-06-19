import "./styles.css"
import Header from "./../../Components/Header"
import Footer from "./../../Components/Footer"
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

export default function Home(){
  const locationCollection = collection(database, "locations")
  const [locations, setLocations] = useState([])
  async function getLocationsFromFirebase(){
    const locations = await getDocs(locationCollection);
    let lol = []
    locations.docs.map(doc => lol.push(doc.data()));
    setLocations(lol);
  }
  useEffect(() => {

    getLocationsFromFirebase();

  }, [])
  return (<>

  <Header />

  <section id="main">
    <div class="main-content">
      <div class="content">
        <span>Seja Bem-Vindo ao</span>
        <h1>Nosso Demétria</h1>
        <p>Um bairro sustentável, amante da natureza, da cultura, e do bem-estar ecológico.</p>
        <a href="#">Explorar</a>
      </div>
      <div class="picture"></div>
    </div>
  </section>

  <section id="businesses">
    <img src="assets/leaves-dec.png" alt="Folhas" />
    <div class="businesses-content">
      <div class="content">
        <span>Explore Todos os</span>
        <h1>Nossos Negócios</h1>
        <p>O bairro Demétria conta com diversos negócios, como restaurantes, lojas e produtores locais.</p>
        <p>Clique nas categorias presentes nas placas para visualizar os negócios do bairro Demétria.</p>
      </div>
      <div class="links">
        <img src="assets/duosign.png" alt="Placas" />
        <img src="assets/sign.png" alt="Placa" />
        <a>Alimentação</a>
        <a>Bem-Estar</a>
        <a>Serviços Gerais</a>
        <a>Transporte</a>
        <a>Cursos</a>
        <a>Biodinâmica</a>
        <a>Locais</a>
        <a>Educação</a>
        <a>Grupos</a>
        <a>Eventos</a>
      </div>
    </div>
  </section>
  
  <section id="form">
    <div class="form-content">
      <h1>Não Encontrou seu Negócio?</h1>
      <p>Preencha o formulário abaixo, ou entre em contato conosco, para que possamos incluir seu negócio no Guia do Demétria.</p>
      <div class="form">
        <div class="form-left">
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
        <div class="form-right">
          <form action="">
            <div>
              <label for="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Nome do Negócio" />
            </div>
            <div>
              <label for="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" placeholder="(14) 99999-9999" required />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="contato@email.com" />
            </div>
            <div>
              <label for="address">Endereço</label>
              <input type="text" id="address" name="address" placeholder="Endereço do Negócio" />
            </div>
            <div>
              <label for="site">Site</label>
              <input type="url" id="site" name="site" placeholder="Site do Negócio" />
            </div>
            <div>
              <label for="category">Categoria</label>
              <select name="category" id="category">
                <option value="alimentacao">Alimentação</option>
                <option value="bem-estar">Bem-Estar</option>
                <option value="servicos">Serviços Gerais</option>
                <option value="transporte">Transporte</option>
                <option value="cursos">Cursos</option>
                <option value="biodinamica">Biodinâmica</option>
                <option value="locais">Locais</option>
                <option value="educacao">Educação</option>
                <option value="grupos">Grupos</option>
                <option value="eventos">Eventos</option>
              </select>
            </div>
            <div>
              <label for="time">Horário de Funcionamento</label>
              <input type="time" id="time-start" name="time" />
              <span>até</span>
              <input type="time" id="time-end" name="time" />
            </div>
            <div>
              <label for="description">Descrição</label>
              <textarea id="description" name="description" rows="5" cols="30" placeholder="Até 20 palavras" resize="none"></textarea>
            </div>
            <div>
              <label for="image">Imagens do Negócio</label>
              <input type="file" id="image" name="image" multiple />
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  </section>

  <Footer />
  
  </>);
}