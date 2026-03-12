export default {
  key: "veiculos-leves",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - VEICULOS LEVES",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saidas", type: "yesno" },
        { id: "2", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" },
        { id: "3", text: "Verificar condicoes de emissao de poluentes (Particulados)", type: "yesno" },
        { id: "4", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "5", text: "Verificar tubulacoes/mangotes/mangueiras", type: "yesno" },
        { id: "6", text: "Avaliar nivel de oleo do motor", type: "yesno" },
        { id: "7", text: "Avaliar nivel do liquido arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "9", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "10", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "11", text: "Verificar luz indicadora de marcha re", type: "yesno" },
        { id: "12", text: "Verificar iluminacao interna", type: "yesno" },
        { id: "13", text: "Verificar farois, setas, piscas alertas", type: "yesno" },
        { id: "14", text: "Verificar buzina", type: "yesno" },
        { id: "15", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "16", text: "Verificar feixe de mola, amortecedor e batentes", type: "yesno" },
        { id: "17", text: "Verificar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "18", text: "Verificar pastilha/discos de freios", type: "yesno" },
        { id: "19", text: "Testar funcionamento do freio estacionario", type: "yesno" },
        { id: "20", text: "Avaliar nivel de fluido de freio", type: "yesno" },
        { id: "21", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "22", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "23", text: "Avaliar retrovisores, quebra-sol e desembacador do para-brisa", type: "yesno" },
        { id: "24", text: "Verificar macanetas externas e internas do veiculo", type: "yesno" },
        { id: "25", text: "Limpeza do interior do veiculo", type: "yesno" },
        { id: "26", text: "Verificar nivel de agua e funcionamento dos limpadores do para-brisa", type: "yesno" },
        { id: "27", text: "Verificar lataria quanto a amassados e desgastes da pintura", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "28", text: "Avaliar barra de direcao (verificacao de terminais)", type: "yesno" },
        { id: "29", text: "Verificar nivel de oleo da direcao", type: "yesno" },
        { id: "30", text: "Controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "31", text: "Verificar condicoes dos parafusos e porcas das rodas", type: "yesno" },
        { id: "32", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" },
        { id: "33", text: "Verificar calibragem dos pneus", type: "yesno" }
      ]
    },

    {
      title: "800 - ITENS DE SEGURANCA",
      items: [
        { id: "34", text: "Verifique o banco do motorista (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "35", text: "Verificar estados e condicoes dos cintos de seguranca", type: "yesno" },
        { id: "36", text: "Verificar extintor de incendio (suporte, pressao, lacre e validade)", type: "yesno" },
        { id: "37", text: "Verificar posicionamento da macaneta para caso de saida de emergencia", type: "yesno" },
        { id: "38", text: "Verificar macaco, triangulo e chave de rodas", type: "yesno" }
      ]
    }

  ]
};
