export default {
  key: "perfuratriz",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - PERFURATRIZ PP/PH",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar condições de emissão de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar limpeza dos radiadores", type: "yesno" },
        { id: "4", text: "Verificar tubulações/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Avaliar nível de óleo do motor e líquido de arrefecimento", type: "yesno" },
        { id: "6", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "7", text: "Verificar painel de instrumentos / manômetros", type: "yesno" },
        { id: "8", text: "Verificar farol de ré e lanternas", type: "yesno" },
        { id: "9", text: "Verificar caixa de fusíveis e relés (fiação e chicotes externos)", type: "yesno" },
        { id: "10", text: "Testar alarme de ré", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA PNEUMÁTICO",
      items: [
        { id: "11", text: "Verificar vazamento de ar nas mangueiras e conexões com o compressor", type: "yesno" },
        { id: "12", text: "Verificar condições das válvulas e manetes", type: "yesno" },
        { id: "13", text: "Verificar acionamento e funcionamento do compressor", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "14", text: "Verificar funilaria em geral buscando arranhões ou avarias", type: "yesno" },
        { id: "15", text: "Reservatório de óleo do martelo (nível de óleo e vazamentos)", type: "yesno" },
        { id: "16", text: "Verificar escadas e corrimão de acesso à cabine da máquina", type: "yesno" },
        { id: "17", text: "Verificar níveis de água no reservatório de limpeza do para-brisa", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "18", text: "Verificar vazamentos em mangueiras", type: "yesno" },
        { id: "19", text: "Verificar alavancas de comando da direção", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "20", text: "Bomba da unidade (vazamentos)", type: "yesno" },
        { id: "21", text: "Avaliar respiro do tanque hidráulico", type: "yesno" },
        { id: "22", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "23", text: "Verificar presença de vazamentos no sistema hidráulico geral da máquina", type: "yesno" },
        { id: "24", text: "Verificar nível de óleo do PTO", type: "yesno" },
        { id: "25", text: "Verificar cilindros de elevação da lança e braço (haste, vazamentos)", type: "yesno" },
        { id: "26", text: "Verificar mangueiras e conectores dos cilindros", type: "yesno" },
        { id: "27", text: "Verificar torre de ferramentas (visual)", type: "yesno" },
        { id: "28", text: "Verificar ancorador, centralizador e cabeçote móvel de sucção", type: "yesno" },
        { id: "29", text: "Verificar corrente de avanço, engrenagem de acionamento e esticador de mangueiras", type: "yesno" },
        { id: "30", text: "Verificar troca de haste (superior e inferior) e cilindros", type: "yesno" },
        { id: "31", text: "Verificar martelo (acumuladores, corpo do cilindro e carcaça)", type: "yesno" },
        { id: "32", text: "Verificar reservatório de graxa das hastes", type: "yesno" },
        { id: "33", text: "Verificar coletor de pó", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "34", text: "Verificar comando final (roda motriz e vazamentos)", type: "yesno" },
        { id: "35", text: "Verificar esteiras e truck (fixação das sapatas e roletes)", type: "yesno" },
        { id: "36", text: "Cilindro de oscilação da esteira lado esquerdo e direito (vazamentos)", type: "yesno" },
        { id: "37", text: "Verificar roda guia (fixação e tensionamento de esteira)", type: "yesno" }
      ]
    },

    {
      title: "800 - ITENS DE SEGURANÇA",
      items: [
        { id: "38", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "39", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "40", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "41", text: "Cordão de parada de emergência", type: "yesno" },
        { id: "42", text: "Realizar 5S da cabine do equipamento e demais pontos necessários pela máquina", type: "yesno" }
      ]
    }

  ]
};