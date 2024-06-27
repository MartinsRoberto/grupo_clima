import React, { useEffect } from "react";
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
          <h4>O que é</h4>
          <p>
            O Grupo Clima preza pela qualidade dos serviços prestados.
            Entendemos que até o melhor modelo de aparelho de ar-condicionado
            necessita de manutenção corretiva e preventiva, por isso, oferecemos
            uma equipe composta por técnicos especializados para realizar os
            procedimentos mais adequados, após análise caso a caso.
          </p>
          <p>
            Apostar na realização de manutenções preventivas de aparelhos
            condicionadores de ar é ter a chance de reduzir gastos futuros, além
            de contribuir diretamente com o bem-estar das pessoas que ficam em
            contato frequente com o ar dos ambientes climatizados.
          </p>
          <p>
            Um dos procedimentos que realizamos é a limpeza de todos os tipos de
            sujeiras acumuladas no aparelho para evitar a proliferação de
            agentes que prejudicam a qualidade do ar e atingem diretamente à
            saúde das pessoas. Nossas manutenções são realizadas em conformidade
            com a Portaria 3.523/98 do Ministério da Saúde, Resolução nº9/2003,
            da Agência Nacional de Vigilância Sanitária (Anvisa) e com a
            elaboração do Plano de Manutenção, Operação e Controle (PMOC).
          </p>
        </div>
        <div className="rounded shadow p-2 bg-color-blue mb-5 text-white py-5">
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
          <h4 className="my-5 display-4 text-center">Está Incluso</h4>
          <ul className="row">

            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Inspeção detalhada de componentes internos e externos do equipamento.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Testes de desempenho e ajustes necessários para otimização do ar-condicionado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Substituição de peças danificadas ou desgastadas, se necessário.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Verificação de vazamentos e reparos adequados para prevenção de problemas futuros.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Emissão de certificados e relatórios técnicos após a conclusão dos serviços.
              </p>
            </li>

            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ícone de tubo"
              />
              <p className="px-3">
                Suporte técnico contínuo para esclarecimento de dúvidas e assistência pós-serviço.
              </p>
            </li>

          </ul>
          <h4 className="my-5 display-4 text-center">Etapas</h4>
          <ul>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleOneFill className="display-5 text-color-green " />
              Desmontar a parte frontal do aparelho de ar condicionado.
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleTwoFill className="display-5 text-color-green" />
              Limpar cuidadosamente os filtros de ar e os componentes internos.
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleThreeFill className="display-5 text-color-green" />
              Verificar e ajustar a tensão dos componentes elétricos.
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleFourFill className="display-5 text-color-green" />
              Testar o funcionamento geral e a eficiência do ar-condicionado.
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleFiveFill className="display-5 text-color-green" />
              Realizar inspeção visual para identificação de danos ou desgastes.
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleSixFill className="display-5 text-color-green" />
              Montar novamente todas as partes do aparelho e finalizar os ajustes finais.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePageMaintance;

