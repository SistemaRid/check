import caminhaoBasculante from "./caminhao-basculante.js";
import caminhaoCarroceria from "./caminhao-carroceria.js";
import caminhaoComboio from "./caminhao-comboio.js";
import caminhaoMunck from "./caminhao-munck.js";
import caminhaoPipa from "./caminhao-pipa.js";
import carregadeira from "./carregadeira.js";
import cavaloMecanico from "./cavalo-mecanico.js";
import compressor from "./compressor.js";
import empilhadeira from "./empilhadeira.js";
import escavadeira from "./escavadeira.js";
import geradorEnergia from "./gerador-energia.js";
import miniCarregadeira from "./mini-carregadeira.js";
import motoniveladora from "./motoniveladora.js";
import onibus from "./onibus.js";
import perfuratriz from "./perfuratriz.js";
import prancha from "./prancha.js";
import retroescavadeira from "./retroescavadeira.js";
import rompedor from "./rompedor.js";
import tratorEsteira from "./trator-esteira.js";
import veiculosLeves from "./veiculos-leves.js";

export const CHECKLIST_DEFS = {
  "caminhao-basculante": caminhaoBasculante,
  "caminhao-carroceria": caminhaoCarroceria,
  "caminhao-comboio": caminhaoComboio,
  "caminhao-munck": caminhaoMunck,
  "caminhao-pipa": caminhaoPipa,
  "carregadeira": carregadeira,
  "cavalo-mecanico": cavaloMecanico,
  "compressor": compressor,
  "empilhadeira": empilhadeira,
  "escavadeira": escavadeira,
  "gerador-energia": geradorEnergia,
  "mini-carregadeira": miniCarregadeira,
  "motoniveladora": motoniveladora,
  "onibus": onibus,
  "perfuratriz": perfuratriz,
  "prancha": prancha,
  "retroescavadeira": retroescavadeira,
  "rompedor": rompedor,
  "trator-esteira": tratorEsteira,
  "veiculos-leves": veiculosLeves
};

export function getChecklistDef(key) {
  return CHECKLIST_DEFS[key] || null;
}