export default {
  key: "caminhao-carroceria",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - CAMINHÃO DE CARROCERIA",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" },
        { id: "3", text: "Verificar condições de emissão de poluentes (Particulados)", type: "yesno" },
        { id: "4", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "5", text: "Verificar tubulações/mangotes/mangueiras", type: "yesno" },
        { id: "6", text: "Avaliar nível de óleo do motor", type: "yesno" },
        { id: "7", text: "Avaliar nível do líquido arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar reservatório do aditivo Arla 32", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "10", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras, setas e pisca alerta", type: "yesno" },
        { id: "12", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "13", text: "Verificar farol de ré e alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Verificar funcionamento da buzina", type: "yesno" },
        { id: "16", text: "Avaliar funcionamento do tacógrafo", type: "yesno" },
        { id: "17", text: "Testar rádio de comunicação e funcionamento do relógio de horímetro", type: "yesno" },
        { id: "18", text: "Fazer teste de funcionamento do painel de informações do caminhão", type: "yesno" },
        { id: "19", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "20", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "21", text: "Verificar feixe de mola, amortecedor e batentes", type: "yesno" },
        { id: "22", text: "Verificar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "23", text: "Avaliar cardan, cruzetas e luva do estriado", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "24", text: "Avaliar cuíca de freio (desgaste e vazamentos nas mangueiras, conexões e parafusos)", type: "yesno" },
        { id: "25", text: "Avaliar em operação funcionamento do acionamento do freio motor", type: "yesno" },
        { id: "26", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "27", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "28", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "29", text: "Verificar escada de acesso ao compartimento do motorista", type: "yesno" },
        { id: "30", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "31", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "32", text: "Avaliar fixação das grades laterais inferiores de proteção e para-choques", type: "yesno" },
        { id: "33", text: "Avaliar retrovisores", type: "yesno" },
        { id: "34", text: "Verificar maçanetas externas e internas do caminhão", type: "yesno" },
        { id: "35", text: "Verificar nível de água e funcionamento dos limpadores do para-brisa", type: "yesno" },
        { id: "36", text: "Verificar condições da carroceria quanto a folgas, partes danificadas e fixação", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "37", text: "Avaliar barra de direção (verificação de terminais)", type: "yesno" },
        { id: "38", text: "Verificar nível do óleo do câmbio", type: "yesno" },
        { id: "39", text: "Testar controles, alavancas e pedais", type: "yesno" },
        { id: "40", text: "Verificar diferencial (carcaça, fixação)", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / CARROCERIA",
      items: [
        { id: "41", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "42", text: "Verificar presença de vazamentos no sistema hidráulico geral do caminhão", type: "yesno" },
        { id: "43", text: "Verificar fixação da escada de acesso à carroceria", type: "yesno" },
        { id: "44", text: "Verificar e garantir que a carga na carroceria esteja fixada corretamente", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "45", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "46", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "47", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "48", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "49", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "50", text: "Verificar posicionamento da maçaneta para caso de saída de emergência", type: "yesno" },
        { id: "51", text: "Realizar 5S da cabine e carroceria do caminhão", type: "yesno" }
      ]
    }

  ]
};