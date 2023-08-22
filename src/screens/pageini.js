import Primeirasecao from "../componentsbasic/componentspageinicial/primeirasection";
import Segundasection from "../componentsbasic/componentspageinicial/segundasection/segundasection";
import Terceirasection from "../componentsbasic/componentspageinicial/terceirasection";
import QuartaSecao from "../componentsbasic/componentspageinicial/quartasection";
import QuintaSection from "../componentsbasic/componentspageinicial/quintasection";
import Menu from "../componentsbasic/menus";
import Rodape from "../componentsbasic/componentspageinicial/rodapé";


function PrimeiraPage() {
  return (
    <div>

      <Menu />
      <br />
      <Primeirasecao />
      <br />
      
      <Segundasection />
      <br />
      <Terceirasection />
      <br />
      <QuartaSecao />

      <QuintaSection />
      <br />
      <Rodape />
    </div>
  );
}

export default PrimeiraPage;
