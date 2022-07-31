import "./style.css";
import { Link } from "react-router-dom";
import {
  useNavigate,
  createSearchParams,
  matchRoutes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(props) {
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

  function goToServices(){
    window.scrollTo({ top: 0, behavior: "smooth" });
      navigate({
        pathname: "/services"
      });
  }

  return (
    <>
      <header>
        <div className="header-content">
          <h1>
            <Link to="/">Guia Demétria</Link>
          </h1>
          {/* <form method="post"> */}
          {/* <input type="text" name="search" placeholder="Digite um negócio..." onChange={event => searchTerm = event.target.value} />
        <input type="submit" name="submit" value="Procurar" onClick={()=> search()} /> */}
          {/* </form> */}
          <nav>
            <ul>
              <li>
                <a>Serviços</a>
                <ul>
                  <li>
                    <a onClick={() => search("Gastronomia")}>Gastronomia</a>
                  </li>
                  <li>
                    <a onClick={() => search("Bem-Estar")}>Bem-Estar</a>
                  </li>
                  <li>
                    <a onClick={() => search("Serviços")}>Serviços</a>
                  </li>
                  <li>
                    <a onClick={() => search("Transporte")}>Transporte</a>
                  </li>
                  <li>
                    <a onClick={() => search("Cursos")}>Cursos</a>
                  </li>
                  <li>
                    <a onClick={() => goToServices()}>Diversos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Comunidade</a>
                <ul>
                  <li>
                    <a onClick={() => search("Eventos")}>Eventos</a>
                  </li>
                  <li>
                    <a onClick={() => search("Orgânicos")}>Orgânicos</a>
                  </li>
                  <li>
                    <a onClick={() => search("Educação")}>Educação</a>
                  </li>
                  <li>
                    <a onClick={() => search("Lojas")}>Lojas</a>
                  </li>
                  <li>
                    <a onClick={() => search("Religiosidade")}>Religiosidade</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
