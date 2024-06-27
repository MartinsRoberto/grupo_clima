import React, { useEffect } from "react";import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill
} from "react-icons/pi";
import "./ServicePage.css";

const ServicePageCleaning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cleaning" id="service-page">
      <div className="img"></div>
      <div className="container">
        <h2 className="my-4 text-color-blue">Limpeza de ar-condicionado</h2>
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
                Eficiência Melhorada
              </span>
              <p className="px-3">
                A limpeza regular dos filtros de ar garante que seu ar condicionado funcione com máxima eficiência, proporcionando um ambiente mais confortável e saudável.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Ar Mais Puro
              </span>
              <p className="px-3">
                Filtros limpos ajudam a remover poeira, pólen e outros alérgenos do ar, melhorando a qualidade do ar que você respira em sua casa ou escritório.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Durabilidade do Equipamento
              </span>
              <p className="px-3">
                Manter os filtros limpos prolonga a vida útil do seu aparelho de ar condicionado, reduzindo a necessidade de reparos e substituições caras.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Menor Consumo de Energia
              </span>
              <p className="px-3">
                Com filtros limpos, seu ar condicionado opera de forma mais eficiente, resultando em menor consumo de energia elétrica e redução nos custos de manutenção.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Conforto Térmico
              </span>
              <p className="px-3">
                Um sistema de ar condicionado limpo proporciona uma distribuição mais uniforme de temperatura, garantindo conforto térmico durante todo o ano.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Redução de Odores
              </span>
              <p className="px-3">
                A limpeza dos filtros ajuda a eliminar odores desagradáveis, mantendo o ambiente fresco e agradável.
              </p>
            </li>
          </ul>
          <h4 className="my-5 display-4 text-center">Diferenciais</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Tecnologia Avançada de Limpeza
              </span>
              <p className="px-3">
                Utilizamos técnicas avançadas para garantir uma limpeza profunda e eficiente dos filtros de ar, seguindo os mais altos padrões de qualidade.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Profissionais Especializados
              </span>
              <p className="px-3">
                Nossa equipe é composta por técnicos treinados e experientes, garantindo um serviço de limpeza de ar condicionado seguro e confiável.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Atendimento Personalizado
              </span>
              <p className="px-3">
                Oferecemos um atendimento personalizado, adaptando nossos serviços às necessidades específicas de cada cliente e garantindo sua total satisfação.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Uso de Produtos Eco-friendly
              </span>
              <p className="px-3">
                Priorizamos o uso de produtos de limpeza que são seguros para o meio ambiente e para a saúde dos ocupantes do espaço.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Garantia de Satisfação
              </span>
              <p className="px-3">
                Garantimos a qualidade do nosso serviço com uma política de satisfação total do cliente, assegurando que suas expectativas sejam sempre superadas.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Agendamento Flexível
              </span>
              <p className="px-3">
                Oferecemos opções de agendamento flexíveis para a limpeza do ar condicionado, adaptando-nos à sua agenda e conveniência.
              </p>
            </li>
          </ul>
          <h4 className="my-5 display-4 text-center">Está Incluso</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Limpeza detalhada dos filtros de ar para remoção de sujeira, poeira e contaminantes.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
            <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Inspeção visual e teste de funcionamento após a limpeza dos filtros de ar.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Verificação e ajuste dos controles de temperatura e umidade do ar condicionado.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Revisão geral do sistema de ventilação e funcionamento dos ventiladores do aparelho.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Verificação no condensador do ar-condicionado para garantia de um melhor funcionamento
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt=""
              />
              <p className="px-3">
                Teste de pressão do gás refrigerante e ajustes necessários para garantir a eficiência do ar condicionado.
              </p>
            </li>
          </ul>
          <h4 className="my-5 display-4 text-center">Etapas</h4>
          <ul className="text-center">
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleOneFill className="text-color-green display-1" style={{ width: "50px" }} />
              Revisão geral do sistema de ventilação e funcionamento de todos os componentes do aparelho
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleTwoFill className="text-color-green display-1" style={{ width: "50px" }} />
              Desmontar a parte frontal do aparelho de ar condicionado
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleThreeFill className="text-color-green display-1" style={{ width: "50px" }} />
              Fazemos a limpeza minuciosa de todo o sistema de ar condicionado, para remoção eficiente de sujeira, poeira e contaminantes
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleFourFill className="text-color-green display-1" style={{ width: "50px" }} />
              Inspeção visual e teste de funcionamento após a limpeza detalhada
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleFiveFill className="text-color-green display-1" style={{ width: "50px" }} />
              Verificação e ajuste dos controles de temperatura e umidade do ar condicionado
            </li>
            <li className="d-flex align-items-center justify-content-center gap-3">
              <PiNumberCircleSixFill className="text-color-green display-1" style={{ width: "50px" }} />
              Teste e ajustes necessários para garantir a eficiência do ar condicionado
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePageCleaning;

