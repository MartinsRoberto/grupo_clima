import React, { useEffect } from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill, PiNumberCircleSixFill } from "react-icons/pi";
import "./ServicePage.css";

const ServicePagePmoc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pmoc" id="service-page">
      <div className="img"></div>
      <div className="container">
        <h2 className="my-4 text-color-blue">
          Plano de Manutenção, Operação e Controle (PMOC)
        </h2>
        <div className="mb-5">
          <h4>O que é</h4>
          <p>
            O Grupo Clima preza pela qualidade dos serviços prestados. Entendemos que a manutenção de aparelhos de ar-condicionado é essencial para garantir um ambiente saudável e confortável. Por isso, oferecemos uma equipe composta por técnicos especializados para realizar os procedimentos mais adequados, após análise caso a caso.
          </p>
          <p>
            A implementação do PMOC é essencial para garantir a eficiência, segurança e qualidade do ar condicionado. Este plano visa reduzir gastos futuros, além de contribuir diretamente com o bem-estar das pessoas que ficam em contato frequente com o ar dos ambientes climatizados.
          </p>
          <p>
            Nossas manutenções são realizadas em conformidade com a Portaria 3.523/98 do Ministério da Saúde, Resolução nº 9/2003, da Agência Nacional de Vigilância Sanitária (Anvisa) e com a elaboração do Plano de Manutenção, Operação e Controle (PMOC).
          </p>
        </div>
        <div className="rounded shadow p-2 bg-color-blue mb-5 px-md-5 text-white py-5">
          <h4 className="my-5 display-4 text-center">Benefícios</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Eficiência Melhorada
              </span>
              <p className="px-3">
                A manutenção regular dos sistemas de ar condicionado garante que eles funcionem com máxima eficiência, proporcionando um ambiente mais confortável e saudável.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Ar Mais Puro
              </span>
              <p className="px-3">
                A manutenção adequada ajuda a remover poeira, pólen e outros alérgenos do ar, melhorando a qualidade do ar que você respira em sua casa ou escritório.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Durabilidade do Equipamento
              </span>
              <p className="px-3">
                Manter os sistemas de ar condicionado em boas condições prolonga a vida útil dos aparelhos, reduzindo a necessidade de reparos e substituições caras.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Menor Consumo de Energia
              </span>
              <p className="px-3">
                Com a manutenção adequada, seu ar condicionado opera de forma mais eficiente, resultando em menor consumo de energia elétrica e redução nos custos de manutenção.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Conforto Térmico
              </span>
              <p className="px-3">
                Um sistema de ar condicionado bem mantido proporciona uma distribuição mais uniforme de temperatura, garantindo conforto térmico durante todo o ano.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Redução de Odores
              </span>
              <p className="px-3">
                A manutenção dos sistemas ajuda a eliminar odores desagradáveis, mantendo o ambiente fresco e agradável.
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
                Inspeção detalhada dos componentes do sistema de ar-condicionado para garantir o funcionamento adequado e prevenir falhas.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/3925/3925998.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Limpeza e desinfecção dos filtros de ar para garantir a qualidade do ar interno e a eficiência do sistema.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/4235/4235859.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Verificação e limpeza das serpentinas de resfriamento e aquecimento para manter a troca térmica eficiente.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column justify-items align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/2960/2960766.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Verificação e limpeza do sistema de drenagem para prevenir vazamentos e acúmulo de água.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/911/911409.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Avaliação das condições dos ventiladores e motores para garantir a circulação adequada do ar.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/7674/7674996.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Aplicação de produtos específicos para evitar a proliferação de fungos, bactérias e outros agentes nocivos no sistema.
              </p>
            </li>
          </ul>


          <h4 className="my-5 display-4 text-center">Diferenciais</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Tecnologia Avançada de Manutenção
              </span>
              <p className="px-3">
                Utilizamos técnicas avançadas para garantir uma manutenção profunda e eficiente, seguindo os mais altos padrões de qualidade.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Profissionais Especializados
              </span>
              <p className="px-3">
                Nossa equipe é composta por técnicos treinados e experientes, garantindo um serviço de manutenção seguro e confiável.
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
                Oferecemos opções de agendamento flexíveis para a manutenção do ar condicionado, adaptando-nos à sua agenda e conveniência.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePagePmoc;
