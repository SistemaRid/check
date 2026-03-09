export default {
  key: "retroescavadeira",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - RETROESCAVADEIRA",
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
        { id: "7", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "8", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "9", text: "Verificar painel de instrumentos / manômetros", type: "yesno" },
        { id: "10", text: "Verificar lanternas", type: "yesno" },
        { id: "11", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "12", text: "Farol de ré (noturno)", type: "yesno" },
        { id: "13", text: "Testar alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "16", text: "Verificar ar condicionado / interclima", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "17", text: "Verificar batentes e suspensão", type: "yesno" },
        { id: "18", text: "Verificar suportes/amortecedores/jumelos/coxins/barra estabilizadora", type: "yesno" },
        { id: "19", text: "Verificar grampos/fixadores", type: "yesno" },
        { id: "20", text: "Verificar eixo dianteiro/traseiro", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA FREIOS",
      items: [
        { id: "21", text: "Verificar freio estacionário", type: "yesno" },
        { id: "22", text: "Verificar acionamento e funcionamento do freio de serviço", type: "yesno" },
        { id: "23", text: "Verificar ruídos anormais na frenagem", type: "yesno" },
        { id: "24", text: "Verificar nível do fluido de freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "25", text: "Verificar fechadura de portas", type: "yesno" },
        { id: "26", text: "Verificar para-choque, paralamas e para-brisa quanto a trincas", type: "yesno" },
        { id: "27", text: "Verificar retrovisores", type: "yesno" },
        { id: "28", text: "Verificar escadas e corrimão de acesso à cabine da máquina", type: "yesno" },
        { id: "29", text: "Verificar níveis de água no reservatório para limpeza do para-brisa", type: "yesno" },
        { id: "30", text: "Verificar funilaria em geral buscando arranhões ou avarias", type: "yesno" },
        { id: "31", text: "Verificar patolas quanto a trincas ou desgastes nas soldas", type: "yesno" },
        { id: "32", text: "Verificar desgaste dos dentes e caçambas", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "33", text: "Verificar vazamentos em mangueiras", type: "yesno" },
        { id: "34", text: "Verificar acionamento da embreagem", type: "yesno" },
        { id: "35", text: "Avaliar ruídos anormais em cardã/cruzetas", type: "yesno" },
        { id: "36", text: "Avaliar possível folga existente na barra de direção", type: "yesno" },
        { id: "37", text: "Avaliar funcionamento do volante", type: "yesno" },
        { id: "38", text: "Avaliar nível de óleo da transmissão", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "39", text: "Verificar nível do óleo hidráulico", type: "yesno" },
        { id: "40", text: "Verificar presença de vazamentos no sistema hidráulico geral da máquina", type: "yesno" },
        { id: "41", text: "Verificar condições de pinos e buchas dos braços dianteiros e traseiros", type: "yesno" },
        { id: "42", text: "Verificar cilindros da concha dianteira e traseira", type: "yesno" },
        { id: "43", text: "Verificar cilindros de elevação do braço dianteiro e traseiro", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "44", text: "Verificar condições dos pneus (calibragem, cortes, banda de rodagem)", type: "yesno" },
        { id: "45", text: "Verificar prisioneiros de rodas frouxos ou faltantes", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "46", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "47", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "48", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "49", text: "Verificar condição da maçaneta para saída de emergência", type: "yesno" },
        { id: "50", text: "Realizar 5S da cabine do equipamento e demais pontos necessários pela máquina", type: "yesno" }
      ]
    }

  ]
};