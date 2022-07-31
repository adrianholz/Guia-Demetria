import "./styles.css";
import Header from "./../../Components/Header";
import Footer from "./../../Components/Footer";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

export default function Terms() {
  return (
    <>
      <Header changeTerm={(term) => console.log()} />

      <section className="conditions">
        <div className="conditions-inner">
          <h1>TERMO DE AUTORIZAÇÃO PARA USO DE IMAGEM E DADOS</h1>
          <p>
            Eu, aqui denominado(a) como <strong>TITULAR</strong>, autorizo que{" "}
            <strong>HOSTNET BOTUCATU</strong>, tido como{" "}
            <strong>CONTROLADOR</strong>, inscrito no CNPJ sob n°
            46.301.212/0001-00, em razão da prestação de serviços publicitários,
            disponha dos meus dados pessoais, de acordo com os artigos 7° e 11
            da Lei n° 13.709/2018, e também autorizo a utilização de minha
            imagem, consoante disposto neste instrumento.
          </p>
          <h2>CLÁUSULA PRIMEIRA</h2>
          <p>
            O <strong>TITULAR</strong> autoriza o <strong>CONTROLADOR</strong> a
            realizar o tratamento, ou seja, a utilizar os dados pessoais
            relacionados à divulgação de sua imagem para finalidade de promoção
            da campanha publicitária de interesse do <strong>TITULAR</strong>,
            ocorrendo a divulgação no seu site e demais mídias, online e
            offline, já existentes ou que venham a existir. <br></br>
            <br></br>
            <strong>Parágrafo Primeiro:</strong> A autorização ora pactuada é
            feita de forma inteiramente gratuita, nada havendo a ser pleiteado
            ou recebido do <strong>CONTROLADOR</strong> seja a que título for,
            ficando desde já ajustado que o <strong>TITULAR</strong> concorda
            que nada tem a reclamar com relação à autorização ora concedida, em
            Juízo ou fora dele. <br></br>
            <br></br>
            <strong>Parágrafo Segundo:</strong> Nenhuma das utilizações
            previstas no caput desta Cláusula, ou ainda qualquer outra que
            pretenda o <strong>CONTROLADOR</strong> dar às imagens cuja
            utilização foi autorizada através deste Termo, têm limitação de
            tempo ou de número de vezes, podendo ocorrer no Brasil e/ou no
            exterior, sem que seja devida ao <strong>TITULAR</strong> qualquer
            remuneração.
          </p>
          <h2>CLÁUSULA SEGUNDA – Finalidade do Tratamento dos Dados</h2>
          <p>
            O <strong>TITULAR</strong> autoriza que o{" "}
            <strong>CONTROLADOR</strong> utilize sua imagem com a finalidade de
            divulgação de campanha publicitária de seu interesse, adotando todas
            as medidas de proteção de dados, visando a preservação de seu
            direito à intimidade, coibindo o uso com finalidade distinta
            prevista neste termo. <br></br>
            <br></br>
            <strong>Parágrafo Primeiro:</strong> Caso seja necessário o
            compartilhamento de dados com terceiros que não tenham sido
            relacionados nesse termo ou qualquer alteração contratual posterior,
            será ajustado novo termo de consentimento para este fim (§ 6° do
            artigo 8° e § 2° do artigo 9° da Lei n° 13.709/2018). <br></br>
            <br></br>
            <strong>Parágrafo Segundo:</strong> Em caso de alteração na
            finalidade, que esteja em desacordo com o consentimento original, o{" "}
            <strong>CONTROLADOR</strong> deverá comunicar o{" "}
            <strong>TITULAR</strong>, que poderá revogar o consentimento,
            conforme previsto na cláusula sexta. <br></br>
            <br></br>
            <strong>Parágrafo Terceiro:</strong> O <strong>TITULAR</strong> se
            compromete a não inspecionar ou aprovar a arte final ou qualquer
            material relacionado ao uso de sua imagem ora concedido, ficando
            acordado que o <strong>CONTROLADOR</strong> se obriga a não utilizar
            os direitos de sua personalidade de forma pejorativa ou distorcida.
          </p>
          <h2>CLÁUSULA TERCEIRA – Compartilhamento de Dados</h2>
          <p>
            Ao <strong>CONTROLADOR</strong> fica autorizado o compartilhamento
            de dados pessoais do <strong>TITULAR</strong> com outros agentes de
            tratamento de dados, caso seja necessário para as finalidades
            previstas neste instrumento, desde que sejam respeitados os
            princípios da boa-fé, finalidade, adequação, necessidade, livre
            acesso, qualidade dos dados, transparência, segurança, prevenção,
            não discriminação e responsabilização e prestação de contas.
          </p>
          <h2>CLÁUSULA QUARTA – Responsabilidade pela Segurança dos Dados</h2>
          <p>
            Fica o <strong>CONTROLADOR</strong> responsabilizado por manter
            medidas de segurança, técnicas e administrativas suficientes a
            proteger os dados pessoais do <strong>TITULAR</strong> e à
            Autoridade Nacional de Proteção de Dados (ANPD), comunicando ao{" "}
            <strong>TITULAR</strong>, caso ocorra algum incidente de segurança
            que possa acarretar risco ou dano relevante, conforme artigo 48 da
            Lei n° 13.709/2020.
          </p>
          <h2>CLÁUSULA QUINTA – Término do Tratamento dos Dados</h2>
          <p>
            Ao <strong>CONTROLADOR</strong>, é permitido manter e utilizar os
            dados pessoais do <strong>TITULAR</strong> durante todo o período
            contratualmente firmado para as finalidades relacionadas nesse termo
            e ainda após o término da contratação para cumprimento de obrigação
            legal ou impostas por órgãos de fiscalização, nos termos do artigo
            16 da Lei n° 13.709/2018.
          </p>
          <h2>CLÁUSULA SEXTA – Direito de Revogação do Consentimento</h2>
          <p>
            O <strong>TITULAR</strong> poderá revogar seu consentimento, a
            qualquer tempo, por e-mail ou por carta escrita, conforme o artigo
            8°, § 5°, da Lei n° 13.709/2020.
          </p>
          <h2>CLÁUSULA SÉTIMA – Tempo de Permanência dos Dados</h2>
          <p>
            Recolhidos o <strong>TITULAR</strong> fica ciente de que o{" "}
            <strong>CONTROLADOR</strong> deverá permanecer com os seus dados
            pelo período mínimo necessário à finalidade publicitária ora
            estabelecida.
          </p>
        </div>
      </section>

      <Footer changeTerm={(term) => console.log()} />
    </>
  );
}
