export default {
  key: "veiculos-leves",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - VEÍCULOS LEVES",
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
        { id: "9", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "10", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "11", text: "Verificar luz indicadora de marcha ré", type: "yesno" },
        { id: "12", text: "Verificar iluminação interna", type: "yesno" },
        { id: "13", text: "Verificar faróis, setas, piscas alertas", type: "yesno" },
        { id: "14", text: "Verificar buzina", type: "yesno" },
        { id: "15", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "16", text: "Verificar feixe de mola, amortecedor e batentes", type: "yesno" },
        { id: "17", text: "Verificar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "18", text: "Verificar pastilha/discos de freios", type: "yesno" },
        { id: "19", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "20", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "21", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "22", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "23", text: "Avaliar retrovisores, quebra-sol e desembaçador do para-brisa", type: "yesno" },
        { id: "24", text: "Verificar maçanetas externas e internas do veículo", type: "yesno" },
        { id: "25", text: "Limpeza do interior do veículo", type: "yesno" },
        { id: "26", text: "Verificar nível de água e funcionamento dos limpadores do para-brisa", type: "yesno" },
        { id: "27", text: "Verificar lataria quanto a amassados e desgastes da pintura", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "28", text: "Avaliar barra de direção (verificação de terminais)", type: "yesno" },
        { id: "29", text: "Verificar nível de óleo da direção", type: "yesno" },
        { id: "30", text: "Controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "31", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "32", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" },
        { id: "33", text: "Verificar calibragem dos pneus", type: "yesno" }
      ]
    },

    {
      title: "800 - ITENS DE SEGURANÇA",
      items: [
        { id: "34", text: "Verifique o banco do motorista (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "35", text: "Verificar estados e condições dos cintos de segurança", type: "yesno" },
        { id: "36", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "37", text: "Verificar posicionamento da maçaneta para caso de saída de emergência", type: "yesno" },
        { id: "38", text: "Verificar macaco, triângulo e chave de rodas", type: "yesno" }
      ]
    }

  ]
};