import "./style.css"

export default function Header(){
  return (<>

<header>
    <div class="header-content">
      <h1><a href="index.html">Guia do Demétria</a></h1>
      <form method="post">
        <input type="text" name="search" placeholder="Digite um negócio..." />
        <input type="submit" name="submit" value="Procurar" />
      </form>
      <nav>
        <ul>
          <li>
            <a href="#">Serviços</a>
            <ul>
              <li><a href="#">Alimentação</a></li>
              <li><a href="#">Bem-Estar</a></li>
              <li><a href="#">Serviços Gerais</a></li>
              <li><a href="#">Transporte</a></li>
              <li><a href="#">Cursos</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Comunidade</a>
            <ul>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Biodinâmica</a></li>
              <li><a href="#">Educação</a></li>
              <li><a href="#">Grupos</a></li>
              <li><a href="#">Locais</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  </>)
}