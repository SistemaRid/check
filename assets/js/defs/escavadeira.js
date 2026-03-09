export default {
  key: "escavadeira",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - ESCAVADEIRA",
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
        { id: "8", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "9", text: "Verificar painel de instrumentos, mostradores e interruptores", type: "yesno" },
        { id: "10", text: "Verificar funcionamento do giroflex", type: "yesno" },
        { id: "11", text: "Testar alarme de ré e buzina", type: "yesno" },
        { id: "12", text: "Verificar iluminação interna", type: "yesno" },
        { id: "13", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "14", text: "Verificar farol da lança lado esquerdo e/ou direito", type: "yesno" },
        { id: "15", text: "Verificar farol da lança lado esquerdo e/ou direito (noturno)", type: "yesno" },
        { id: "16", text: "Verificar faróis frontais", type: "yesno" },
        { id: "17", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "18", text: "Verificar ar condicionado", type: "yesno" },
        { id: "19", text: "Testar alarme de deslocamento", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "20", text: "Verificar fechadura de portas", type: "yesno" },
        { id: "21", text: "Verificar retrovisores", type: "yesno" },
        { id: "22", text: "Verificar escadas e corrimão de acesso à cabine da máquina", type: "yesno" },
        { id: "23", text: "Verificar níveis de água no reservatório para limpeza do para-brisa", type: "yesno" },
        { id: "24", text: "Verificar funilaria em geral procurando arranhões ou avarias", type: "yesno" },
        { id: "25", text: "Verificar pintura e interferências mecânicas no contrapeso", type: "yesno" },
        { id: "26", text: "Verificar estrutura do chassi (trincas)", type: "yesno" },
        { id: "27", text: "Verificar compartimento do comando final (trincas, tampas, amassados)", type: "yesno" },
        { id: "28", text: "Verificar tampa do compartimento do motor (fechadura, trava e amortecedor)", type: "yesno" },
        { id: "29", text: "Verificar vidros (limpeza, danos)", type: "yesno" },
        { id: "30", text: "Verificar estrutura da lança e braço (soldas, trincas)", type: "yesno" },
        { id: "31", text: "Verificar caçamba (soldas, trincas, caneleiras, dentes, adaptadores)", type: "yesno" },
        { id: "32", text: "Verificar pino de articulação do braço e caçamba", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "33", text: "Inspecionar correntes quanto a folgas", type: "yesno" },
        { id: "34", text: "Inspecionar correntes com possíveis trincas em seus elos", type: "yesno" },
        { id: "35", text: "Verificar comando final (segmentos e vazamentos)", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "36", text: "Verificar cilindros de elevação do braço quanto a trincas e vazamentos", type: "yesno" },
        { id: "37", text: "Verificar cilindros da caçamba quanto a trincas e vazamentos", type: "yesno" },
        { id: "38", text: "Verificar cilindros da lança quanto a trincas e vazamentos", type: "yesno" },
        { id: "39", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "40", text: "Verificar presença de vazamentos no sistema hidráulico geral da máquina", type: "yesno" },
        { id: "41", text: "Verificar compartimento da bomba hidráulica", type: "yesno" },
        { id: "42", text: "Testar trava do hidráulico, controles, alavancas e pedais", type: "yesno" },
        { id: "43", text: "Verificar nível de óleo do redutor de giro I e II", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA MATERIAL RODANTE / ESTEIRAS",
      items: [
        { id: "44", text: "Verificar condições dos parafusos de fixação das guias de esteira", type: "yesno" },
        { id: "45", text: "Verificar parafuso de união entre o chassi inferior, superior e coroa", type: "yesno" },
        { id: "46", text: "Verificar esteira, parafusos e porcas da sapata", type: "yesno" },
        { id: "47", text: "Verificar desgaste da roda guia e roletes", type: "yesno" }
      ]
    },

    {
      title: "700 - ITENS DE SEGURANÇA",
      items: [
        { id: "48", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "49", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "50", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "51", text: "Verificar posicionamento da maçaneta para saída de emergência", type: "yesno" },
        { id: "52", text: "Realizar 5S da cabine do equipamento e demais pontos necessários", type: "yesno" }
      ]
    }

  ]
};