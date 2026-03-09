export default {
  key: "mini-carregadeira",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - MINI CARREGADEIRA",
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
        { id: "8", text: "Verificar painel de instrumentos / manômetros", type: "yesno" },
        { id: "9", text: "Verificar lanternas", type: "yesno" },
        { id: "10", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "11", text: "Verificar farol de ré (noturno)", type: "yesno" },
        { id: "12", text: "Testar alarme de ré", type: "yesno" },
        { id: "13", text: "Verificar iluminação interna", type: "yesno" },
        { id: "14", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "15", text: "Verificar ar condicionado / interclima", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "16", text: "Verificar balança em tandem LD e LE", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA FREIOS",
      items: [
        { id: "17", text: "Verificar freio estacionário", type: "yesno" },
        { id: "18", text: "Verificar acionamento e funcionamento do freio de serviço", type: "yesno" },
        { id: "19", text: "Verificar ruídos anormais na frenagem", type: "yesno" },
        { id: "20", text: "Verificar acumulador de freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "21", text: "Verificar fechadura de portas", type: "yesno" },
        { id: "22", text: "Verificar para-choque, paralamas, para-brisa quanto a trincas", type: "yesno" },
        { id: "23", text: "Verificar retrovisores", type: "yesno" },
        { id: "24", text: "Verificar corrimão de acesso à cabine da máquina", type: "yesno" },
        { id: "25", text: "Verificar níveis de água no reservatório de limpeza do para-brisa", type: "yesno" },
        { id: "26", text: "Verificar funilaria em geral buscando arranhões ou avarias", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "27", text: "Verificar vazamentos em mangueiras", type: "yesno" },
        { id: "28", text: "Testar direção para esquerda e para direita", type: "yesno" },
        { id: "29", text: "Avaliar possível folga na alavanca de direção (joystick)", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "30", text: "Verificar cilindros de elevação do braço", type: "yesno" },
        { id: "31", text: "Verificar cilindros da concha", type: "yesno" },
        { id: "32", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "33", text: "Verificar presença de vazamentos no sistema hidráulico geral da máquina", type: "yesno" },
        { id: "34", text: "Verificar condições de pinos e buchas dos braços", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "35", text: "Verificar condições dos pneus (calibragem, cortes, banda de rodagem)", type: "yesno" },
        { id: "36", text: "Verificar prisioneiros das rodas", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "37", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "38", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "39", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "40", text: "Verificar posicionamento da maçaneta para saída de emergência", type: "yesno" },
        { id: "41", text: "Realizar 5S da cabine do equipamento e demais pontos necessários", type: "yesno" }
      ]
    }

  ]
};