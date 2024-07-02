import { useEffect } from "react"; import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill,
  PiNumberCircleSevenFill,
  
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
          <h4 className="mb-3">O que é</h4>
          <p>
            No Grupo Clima, valorizamos a qualidade dos serviços prestados. Entendemos que a limpeza regular do ar-condicionado é essencial para garantir um ambiente saudável e confortável. Por isso, oferecemos uma equipe de técnicos especializados para realizar a limpeza detalhada de todos os componentes do aparelho.
          </p>
          <p>
            A limpeza regular dos aparelhos de ar-condicionado é fundamental para evitar a proliferação de bactérias, fungos e outros agentes que podem comprometer a qualidade do ar e a saúde das pessoas. Além disso, a limpeza adequada contribui para o melhor desempenho do aparelho, aumentando sua vida útil e eficiência.
          </p>
          <p>
            Realizamos a limpeza completa, removendo toda a sujeira acumulada, como poeira, mofo e outros resíduos. Nossos serviços seguem rigorosamente a Portaria 3.523/98 do Ministério da Saúde, a Resolução nº 9/2003 da Anvisa e o Plano de Manutenção, Operação e Controle (PMOC), assegurando que os aparelhos estejam sempre em conformidade com as normas de saúde e segurança.
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
                Inspeção detalhada de componentes internos e externos do equipamento antes da realização da higienização.
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
                Limpeza e desinfecção da unidade evaporadora (split), incluindo as bobinas e a bandeja de drenagem, para evitar a proliferação de fungos e bactérias.
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
                Limpeza da unidade condensadora, incluindo as aletas e o ventilador, para remover sujeira e detritos que possam afetar o desempenho do sistema.
              </p>
            </li>
            <li className="col-md-4 text-center mb-5 d-flex flex-column align-items-center gap-3">
              <div className="" style={{ width: "8rem" }}>
                <img
                  className="img-fluid"
                  src="https://cdn-icons-png.flaticon.com/512/2960/2960766.png"
                  alt="Ícone de tubo"
                />
              </div>
              <p className="px-3">
                Limpeza do sistema de drenagem para evitar vazamentos de água e acúmulo de umidade que possam causar mofo.
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
                Verificação geral do estado do ar-condicionado, identificando possíveis sinais de desgaste ou danos que necessitem de atenção.
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
                Aplicação de produtos específicos para eliminar bactérias e outros agentes nocivos que possam estar presentes no sistema.
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
          <h4 className="my-5 display-4 text-center">Etapas</h4>
          <ul className="text-center mx-5">
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleOneFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Verificar funcionalidade do ar-condicionado via testes especificos.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleTwoFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Proteger móveis e tudo que necessário nas áreas ao redor do aparelho.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleThreeFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Realizar o preparo para a higienização incluindo a desmontagem do aparelho para conseguir alcançar lugares onde fungos se proliferam.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleFourFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Limpar a unidade interna, incluindo as aletas e bobinas, com equipamento especifico para higienização eficiente do aparelho.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleFiveFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Lavar a unidade externa com equipamento especifico e pressão correta para um higienização mais eficiente.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleSixFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Secar completamente todas as partes e remontar todas as peças do aparelho.
              </p>
            </li>
            <li className="d-flex align-items-center mb-3 justify-content-center">
              <span className="d-flex align-items-center justify-content-center me-3">
                <PiNumberCircleSevenFill className="text-color-green" size={35} />
              </span>
              <p className="mb-0 text-center">
                Realizar todos os testes de funcionamento para garantir a eficiencia do Ar-condicionado e da Higienização.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePageCleaning;

