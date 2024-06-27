import React, { useEffect } from "react";
import { PiNumberCircleThreeFill } from "react-icons/pi";
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
                Redução de riscos à saúde
              </span>
              <p className="px-3">
                Melhora na qualidade do ar com a limpeza e manutenção adequadas.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Eficiência energética
              </span>
              <p className="px-3">
                Economia de energia ao manter o sistema de ar-condicionado em
                condições ideais de funcionamento.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Conformidade regulatória
              </span>
              <p className="px-3">
                Cumprimento das normas vigentes para operação de sistemas de
                climatização.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Longevidade dos equipamentos
              </span>
              <p className="px-3">
                Prolongamento da vida útil dos aparelhos com manutenções adequadas.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Segurança operacional
              </span>
              <p className="px-3">
                Redução de falhas e melhor desempenho dos sistemas de climatização.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Economia financeira
              </span>
              <p className="px-3">
                Redução de custos com reparos emergenciais ao evitar problemas graves.
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
                Serviços adaptados às necessidades específicas de cada cliente.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Equipe especializada
              </span>
              <p className="px-3">
                Profissionais capacitados para execução de PMOC conforme
                exigências técnicas.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Relatório detalhado
              </span>
              <p className="px-3">
                Documentação completa das atividades realizadas, garantindo
                transparência e controle.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Suporte pós-serviço
              </span>
              <p className="px-3">
                Assistência contínua para dúvidas e manutenções adicionais.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Uso de tecnologia avançada
              </span>
              <p className="px-3">
                Equipamentos modernos para diagnóstico preciso e eficiente.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <span className="fw-semibold fs-4 text-color-green">
                Compromisso ambiental
              </span>
              <p className="px-3">
                Práticas sustentáveis durante as operações de manutenção.
              </p>
            </li>
          </ul>
          <h4 className="my-5 display-4 text-center">Está Incluso</h4>
          <ul className="row">
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Limpeza de filtros de ar"
              />
              <p className="px-3">
                Limpeza detalhada dos filtros de ar para melhorar a eficiência do sistema.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Inspeção de dutos"
              />
              <p className="px-3">
                Inspeção e limpeza dos dutos de ar para evitar obstruções e melhorar a circulação.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <img
                src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
                alt="Ajustes e testes"
              />
              <p className="px-3">
                Ajustes e testes operacionais para assegurar o funcionamento          
                </p>
        </li>
        <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
          <img
            src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
            alt="Documentação completa"
          />
          <p className="px-3">
            Emissão de documentação completa das atividades realizadas, garantindo conformidade.
          </p>
        </li>
        <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
          <img
            src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
            alt="Suporte técnico"
          />
          <p className="px-3">
            Suporte técnico contínuo para esclarecimento de dúvidas e assistência adicional.
          </p>
        </li>
        <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
          <img
            src="https://blog.frigelar.com.br/institucional-marcas/agyx/servico-de-manutencao-de-ar-condicionado/img/desc-servico-manutencao-icone-tubo.png"
            alt="Conformidade legal"
          />
          <p className="px-3">
            Assegurar conformidade com normas e regulamentações vigentes para operação de sistemas de climatização.
          </p>
        </li>
      </ul>
      
    </div>
  </div>
</div>

);
};

export default ServicePagePmoc;