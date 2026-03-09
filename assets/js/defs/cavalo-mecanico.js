export default {
  key: "cavalo-mecanico",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - CAVALO MECÂNICO",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar funcionamento do motor quanto a ruídos anormais", type: "yesno" },
        { id: "3", text: "Verificar condições de emissão de poluentes (particulados)", type: "yesno" },
        { id: "4", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "5", text: "Verificar tubulações / mangotes / mangueiras", type: "yesno" },
        { id: "6", text: "Avaliar nível de óleo do motor", type: "yesno" },
        { id: "7", text: "Avaliar nível do líquido arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar reservatório do aditivo Arla 32", type: "yesno" },
        { id: "10", text: "Drenar todos reservatórios de ar", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "11", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "12", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "13", text: "Verificar farol de ré", type: "yesno" },
        { id: "14", text: "Farol de ré e alarme de ré", type: "yesno" },
        { id: "15", text: "Verificar iluminação interna", type: "yesno" },
        { id: "16", text: "Verificar funcionamento da buzina", type: "yesno" },
        { id: "17", text: "Avaliar funcionamento do tacógrafo", type: "yesno" },
        { id: "18", text: "Testar rádio de comunicação e funcionamento do relógio de horímetro", type: "yesno" },
        { id: "19", text: "Verificar faróis, setas e lanternas", type: "yesno" },
        { id: "20", text: "Testar funcionamento do painel de informações do caminhão", type: "yesno" },
        { id: "21", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "22", text: "Verificar ar-condicionado", type: "yesno" },
        { id: "23", text: "Avaliar mensagens de erro no painel do caminhão", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA PNEUMÁTICO",
      items: [
        { id: "24", text: "Avaliar mangueiras e conexões do implemento", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "25", text: "Verificar feixe de mola, amortecedor, barra de direção e batentes", type: "yesno" },
        { id: "26", text: "Verificar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "27", text: "Avaliar cardã, cruzetas e luva do estriado", type: "yesno" },
        { id: "28", text: "Avaliar fixação / trava / lubrificação da 5ª roda", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA DE FREIOS",
      items: [
        { id: "29", text: "Avaliar cuíca de freio (desgaste e vazamentos nas mangueiras, conexões e parafusos)", type: "yesno" },
        { id: "30", text: "Avaliar em operação funcionamento e acionamento do freio motor", type: "yesno" },
        { id: "31", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "32", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "33", text: "Testar funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "34", text: "Avaliar escada de acesso ao compartimento do motorista", type: "yesno" },
        { id: "35", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "36", text: "Avaliar parte inferior do equipamento se existe dano, amassado ou vazamento", type: "yesno" },
        { id: "37", text: "Verificar para-lamas, para-choques e para-brisa quanto a trincas ou quebras", type: "yesno" },
        { id: "38", text: "Avaliar retrovisores", type: "yesno" },
        { id: "39", text: "Verificar maçanetas externas e internas do caminhão", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "40", text: "Avaliar barra de direção (verificação de terminais)", type: "yesno" },
        { id: "41", text: "Verificar nível do óleo do câmbio", type: "yesno" },
        { id: "42", text: "Avaliar diferencial (carcaça, fixação)", type: "yesno" },
        { id: "43", text: "Testar controles, alavancas e pedais", type: "yesno" },
        { id: "44", text: "Verificar nível de água e funcionamento dos limpadores do para-brisa", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA HIDRÁULICO",
      items: [
        { id: "45", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "46", text: "Verificar presença de vazamentos no sistema hidráulico geral do caminhão", type: "yesno" }
      ]
    },

    {
      title: "900 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "47", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "48", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },

    {
      title: "1000 - ITENS DE SEGURANÇA",
      items: [
        { id: "49", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "50", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "51", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "52", text: "Verificar posicionamento da maçaneta para saída de emergência", type: "yesno" },
        { id: "53", text: "Realizar 5S da cabine do equipamento e demais pontos necessários pelo caminhão", type: "yesno" }
      ]
    }

  ]
};