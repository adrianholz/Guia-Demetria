import "./style.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(props){
  const navigate = useNavigate()
  let searchTerm
  function search(filter){ 
    let params = {term: searchTerm}
    if(filter !== undefined){
      params.filter = filter;
    }
    navigate("/search")
    props.changeTerm(params);
  }
  useEffect(()=> {}, [])
  return (<>

<header>
    <div class="header-content">
      <h1><Link to="/">Guia do Demétria</Link></h1>
      {/* <form method="post"> */}
        <input type="text" name="search" placeholder="Digite um negócio..." onChange={event => searchTerm = event.target.value} />
        <input type="submit" name="submit" value="Procurar" onClick={()=> search()} />
      {/* </form> */}
      <nav>
        <ul>
          <li>
            <a>Serviços</a>
            <ul>
              <li><a onClick={() => search("Alimentação")}>Alimentação</a></li>
              <li><a>Bem-Estar</a></li>
              <li><a>Serviços Gerais</a></li>
              <li><a>Transporte</a></li>
              <li><a>Cursos</a></li>
            </ul>
          </li>
          <li>
            <a>Comunidade</a>
            <ul>
              <li><a>Eventos</a></li>
              <li><a>Biodinâmica</a></li>
              <li><a>Educação</a></li>
              <li><a>Grupos</a></li>
              <li><a>Locais</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  </>)
}