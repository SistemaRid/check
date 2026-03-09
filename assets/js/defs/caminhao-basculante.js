export default {
  key: "caminhao-basculante",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - CAMINHÃO BASCULANTE",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar condições de emissão de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "4", text: "Verificar tubulações/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Avaliar nível de óleo do motor", type: "yesno" },
        { id: "6", text: "Avaliar nível do líquido arrefecedor", type: "yesno" },
        { id: "7", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "8", text: "Verificar reservatório do aditivo Arla 32", type: "yesno" },
        { id: "9", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "10", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "12", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "13", text: "Testar alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Verificar funcionamento da buzina", type: "yesno" },
        { id: "16", text: "Avaliar funcionamento do tacógrafo", type: "yesno" },
        { id: "17", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "18", text: "Verificar faróis, setas e lanternas", type: "yesno" },
        { id: "19", text: "Fazer teste de funcionamento do painel de informações do caminhão", type: "yesno" },
        { id: "20", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "21", text: "Verificar ar-condicionado", type: "yesno" },
        { id: "22", text: "Alarme sonoro e luminoso de báscula levantada", type: "yesno" },
        { id: "23", text: "Verificar falhas e mensagens do painel do inclinômetro", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "24", text: "Avaliar feixe de mola, amortecedor, barra de direção e batentes", type: "yesno" },
        { id: "25", text: "Avaliar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "26", text: "Avaliar cardan, cruzetas e luva do estriado", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "27", text: "Verificar cuíca de freio (desgaste e vazamentos nas mangueiras, conexões e parafusos)", type: "yesno" },
        { id: "28", text: "Avaliar em operação funcionamento do acionamento do freio motor", type: "yesno" },
        { id: "29", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "30", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "31", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "32", text: "Verificar escada de acesso ao compartimento do motorista", type: "yesno" },
        { id: "33", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "34", text: "Avaliar se existe desgaste nos coxins do chassi", type: "yesno" },
        { id: "35", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "36", text: "Verificar para-lamas, para-choques e para-brisa quanto a trincas ou quebras", type: "yesno" },
        { id: "37", text: "Trava de fechamento da caçamba e correntes – avaliar pino de fixação", type: "yesno" },
        { id: "38", text: "Avaliar caçamba quanto a amassados e danos na pintura ou estrutura", type: "yesno" },
        { id: "39", text: "Avaliar retrovisores", type: "yesno" },
        { id: "40", text: "Verificar maçanetas externas e internas do caminhão", type: "yesno" },
        { id: "41", text: "Limpeza da cabine do caminhão", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "42", text: "Testar controles, alavancas e pedais", type: "yesno" },
        { id: "43", text: "Avaliar barra de direção (verificação de buchas)", type: "yesno" },
        { id: "44", text: "Verificar nível de água e funcionamento dos limpadores do para-brisa", type: "yesno" },
        { id: "45", text: "Verificar nível do óleo do câmbio", type: "yesno" },
        { id: "46", text: "Diferencial (carcaça, fixação)", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / BASCULANTE",
      items: [
        { id: "47", text: "Verificar cilindro de elevação da báscula, limitador e proteção", type: "yesno" },
        { id: "48", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "49", text: "Verificar presença de vazamentos no sistema hidráulico geral", type: "yesno" },
        { id: "50", text: "Verificar mancais de articulação da caçamba", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "51", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "52", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" },
        { id: "53", text: "Verificar se já existe marca de fogo – caso não exista, informar manutenção", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "54", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "55", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "56", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "57", text: "Verificar posicionamento da maçaneta para caso de saída de emergência", type: "yesno" },
        { id: "58", text: "Realizar 5S da cabine do equipamento e demais pontos necessários", type: "yesno" }
      ]
    }

  ]
};