export default {
  key: "empilhadeira",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - EMPILHADEIRA",
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
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "9", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "10", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "12", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "13", text: "Testar alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "16", text: "Verificar faróis frontais", type: "yesno" },
        { id: "17", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "18", text: "Avaliar cubo das rodas", type: "yesno" },
        { id: "19", text: "Avaliar suspensão rígida", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "20", text: "Avaliar funcionamento do freio estacionário", type: "yesno" },
        { id: "21", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "22", text: "Verificar funcionamento dos freios de serviço", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "23", text: "Verificar escada de acesso ao compartimento do operador", type: "yesno" },
        { id: "24", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "25", text: "Avaliar parte inferior do equipamento quanto a danos, amassados ou vazamentos", type: "yesno" },
        { id: "26", text: "Avaliar fixação das grades laterais inferiores de proteção e para-choques", type: "yesno" },
        { id: "27", text: "Avaliar retrovisores", type: "yesno" },
        { id: "28", text: "Limpeza da cabine do equipamento", type: "yesno" },
        { id: "29", text: "Avaliar correntes de elevação, colunas e deslocadores quanto à lubrificação", type: "yesno" },
        { id: "30", text: "Avaliar garfos quanto a desgaste e trincas", type: "yesno" },
        { id: "31", text: "Avaliar correntes de elevação quanto a folga e seus elos", type: "yesno" },
        { id: "32", text: "Avaliar contrapeso quanto a danos na sua estrutura", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "33", text: "Avaliar barra de direção (verificar buchas)", type: "yesno" },
        { id: "34", text: "Avaliar funcionamento da direção girando em totalidades", type: "yesno" },
        { id: "35", text: "Verificar nível de óleo do câmbio", type: "yesno" },
        { id: "36", text: "Testar controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "37", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "38", text: "Verificar presença de vazamentos no sistema hidráulico", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "39", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "40", text: "Verificar borracha rígida de rodagem dos pneus ou cortes", type: "yesno" },
        { id: "41", text: "Verificar se já existe marca de fogo, caso não exista alertar posição", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "42", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "43", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "44", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "45", text: "Realizar 5S da cabine", type: "yesno" }
      ]
    }

  ]
};