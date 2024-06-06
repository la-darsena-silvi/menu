import Ristorante from "./ristorante/ristoranteIta";
import RistoranteEng from "./ristorante/ristoranteEng";
import Vini from "./vini/viniIta";
import ViniEng from "./vini/viniEng";
import Aperitivo from "./aperitivo/aperitivoIta";
import AperitivoEng from "./aperitivo/aperitivoEng";
import RistorantePranzo from "./ristorante-pranzo/ristorantePranzoIta";
import RistorantePranzoEng from "./ristorante-pranzo/ristorantePranzoEng";

const Sezioni = {
  ita: {
    "ristorante-cena": Ristorante,
    "ristorante-pranzo": RistorantePranzo,
    vini: Vini,
    aperitivo: Aperitivo,
  },
  eng: {
    "ristorante-cena": RistoranteEng,
    "ristorante-pranzo": RistorantePranzoEng,
    vini: ViniEng,
    aperitivo: AperitivoEng,
  },
};

export default Sezioni;
