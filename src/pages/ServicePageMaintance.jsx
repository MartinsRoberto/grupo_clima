import { useEffect } from "react";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill
} from "react-icons/pi";
import "./ServicePage.css";

const ServicePageMaintance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="maintance" id="service-page">
      <div className="img"></div>
      <div className="container">
        <h2 className="my-4 text-color-blue">
          Manutenção de Ar Condicionado
        </h2>
        <div className="mb-5">
          <h4 className="my-3">O que é</h4>
          <p>
          O Grupo Clima preza pela qualidade dos serviços prestados. Entendemos que até o melhor modelo de aparelho de ar-condicionado necessita de manutenção corretiva e preventiva, por isso, oferecemos uma equipe composta por técnicos especializados para realizar os procedimentos mais adequados, após análise caso a caso.
          </p>
          <p>
          Apostar na realização de manutenções preventivas de aparelhos condicionadores de ar é ter a chance de reduzir gastos futuros, além de contribuir diretamente com o bem-estar das pessoas que ficam em contato frequente com o ar dos ambientes climatizados.
          </p>
          <p>
          Um dos procedimentos que realizamos é a limpeza de todos os tipos de sujeiras acumuladas no aparelho para evitar a proliferação de agentes que prejudicam a qualidade do ar e atingem diretamente à saúde das pessoas. Nossas manutenções são realizadas em conformidade com a Portaria 3.523/98 do Ministério da Saúde, Resolução nº9/2003, da Agência Nacional de Vigilância Sanitária (Anvisa) e com a elaboração do Plano de Manutenção, Operação e Controle (PMOC).
          </p>
        </div>
        <div className="rounded shadow p-2 px-md-5 bg-color-blue mb-5 text-white py-5">
          <h4 className="my-5 display-4 text-center">Benefícios</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Redução do consumo de energia
              </span>
              <p className="px-3">
                Manutenção regular melhora a eficiência energética do ar-condicionado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Prolongamento da vida útil do equipamento
              </span>
              <p className="px-3">
                Cuidados adequados aumentam a durabilidade do aparelho de ar-condicionado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Melhoria na qualidade do ar
              </span>
              <p className="px-3">
                Limpeza regular reduz a quantidade de partículas nocivas no ar.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Menor incidência de problemas mecânicos
              </span>
              <p className="px-3">
                Manutenção previne falhas e reparos emergenciais custosos.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Conforto térmico constante
              </span>
              <p className="px-3">
                Ar-condicionado mantém a temperatura ideal durante todo o ano.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Cumprimento das normas sanitárias
              </span>
              <p className="px-3">
                Serviços realizados de acordo com regulamentos de saúde e segurança.
              </p>
            </li>
          </ul>
          
          <h4 className="my-5 display-4 text-center">Está Incluso</h4>
          <ul className="row">

            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/5530/5530534.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3 mb">
                Inspeção detalhada de componentes internos e externos do equipamento.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/5454/5454670.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Testes de desempenho e ajustes necessários para otimização do ar-condicionado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/4881/4881100.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Substituição de peças danificadas ou desgastadas, se necessário.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="   https://cdn-icons-png.flaticon.com/512/1683/1683023.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Verificação de vazamentos e reparos adequados para prevenção de problemas futuros.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="   https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Emissão de certificados e relatórios técnicos após a conclusão dos serviços.
              </p>
            </li>

            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">

              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/3203/3203478.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Suporte técnico contínuo para esclarecimento de dúvidas e assistência pós-serviço.
              </p>
            </li>

            <h4 className="my-5 display-4 text-center">Diferenciais</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Atendimento personalizado
              </span>
              <p className="px-3">
                Equipe especializada oferece suporte técnico individualizado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Uso de tecnologia avançada
              </span>
              <p className="px-3">
                Equipamentos modernos garantem eficiência nos serviços prestados.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Garantia de satisfação
              </span>
              <p className="px-3">
                Compromisso com a qualidade e a plena satisfação do cliente.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Agilidade nos serviços
              </span>
              <p className="px-3">
                Atendimento rápido e eficiente para minimizar impactos no dia a dia.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Transparência nos processos
              </span>
              <p className="px-3">
                Informações claras sobre os procedimentos realizados e os custos envolvidos.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Disponibilidade 24/7
              </span>
              <p className="px-3">
                Serviços de manutenção acessíveis a qualquer momento, incluindo emergências.
              </p>
            </li>
          </ul>

          </ul>
          <h4 className="my-5 display-4 text-center">Etapas</h4>
          <ul className="text-center mx-5">
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleOneFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start">
               Realizar inspeção visual para identificação de danos ou desgastes.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleTwoFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start ">
              Verificar e ajustar a tensão dos componentes elétricos.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleThreeFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start">
              Iniciar os reparos necessários de acordo com as inspeções e testes feitos no aparelho.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleFourFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start">
              Testar o funcionamento geral e a eficiência do ar-condicionado.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleFiveFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start">
              Montar novamente todas as partes do aparelho e finalizar os ajustes finais.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleSixFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-start">
                Envio de certificado de garantia e relátorios para o esclarecimentos dos serviçõs prestados.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePageMaintance;

