export default {
  key: "perfuratriz",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - PERFURATRIZ PP/PH",
  version: "rev03",

  sections: [
    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saidas", type: "yesno" },
        { id: "2", text: "Verificar condicoes de emissao de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar limpeza dos radiadores", type: "yesno" },
        { id: "4", text: "Verificar tubulacoes/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Avaliar nivel de oleo do motor e liquido do arrefecimento", type: "yesno" },
        { id: "6", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "9", text: "Verificar painel de intrumentos / manometros", type: "yesno" },
        { id: "10", text: "Verificar farol de re e lanternas", type: "yesno" },
        { id: "11", text: "Verificar Caixa de fusiveis e reles (Fiacao, chicotes externos)", type: "yesno" },
        { id: "12", text: "Testar Alarme de re", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA PNEUMATICO",
      items: [
        { id: "13", text: "Verificar vazamento de ar nas mangueiras e conexoes com o compressor", type: "yesno" },
        { id: "14", text: "Verificar Condicoes das valvulas e manetes", type: "yesno" },
        { id: "15", text: "Verificar acionamento e funcionamento compressor", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "16", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" },
        { id: "17", text: "Reservatorio de oleo do martelo (nivel de oleo e vazamentos)", type: "yesno" },
        { id: "18", text: "Verificar Escadas e Corrimao de acesso a cabine da maquina", type: "yesno" },
        { id: "19", text: "Verificar niveis de agua no reservatorio de agua para limpeza do para-brisa", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "21", text: "Verificar Vazamentos em mangueiras", type: "yesno" },
        { id: "22", text: "Verificar alavancas de comando da direcao", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "22", text: "Bomba da unidade (vazamentos)", type: "yesno" },
        { id: "24", text: "Avaliar respiro do tanque hidraulico", type: "yesno" },
        { id: "25", text: "Verificar o nivel de oleo do PTO", type: "yesno" },
        { id: "26", text: "Verificar Cilindros de Elevacao da Lanca e Braco (Haste, Vazamentos)", type: "yesno" },
        { id: "27", text: "Verificar Mangueiras e Conectores dos Cilindros", type: "yesno" },
        { id: "28", text: "Verificar Torre de Ferramentas (Visual)", type: "yesno" },
        { id: "29", text: "Verificar Ancorador, centralizador, cabecote movel de succao", type: "yesno" },
        { id: "30", text: "Verificar Corrente de avanco, engrenagem de acionamento e esticador de mangueiras", type: "yesno" },
        { id: "31", text: "Verificar Troca de haste (Superior e inferior) e cilindros", type: "yesno" },
        { id: "32", text: "Verificar Martelo (acumuladores, corpo do cilindro e carcaca)", type: "yesno" },
        { id: "33", text: "Verificar o resevatorio de graxa das hastes", type: "yesno" },
        { id: "34", text: "Verificar o coletor de po", type: "yesno" },
        { id: "35", text: "Verificar o comando final (Roda motriz e vazamentos)", type: "yesno" },
        { id: "36", text: "Verificar as esteiras e truck (fixacao das sapatas e roletes)", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "36", text: "Verificar o comando final (Roda motriz e vazamentos)", type: "yesno" },
        { id: "37", text: "Verificar as esteiras e truck (fixacao das sapatas e roletes)", type: "yesno" },
        { id: "38", text: "Cilindro de oscilacao da esteira lado esquerdo e direito (vazamentos)", type: "yesno" },
        { id: "39", text: "Verificar a roda guia (fixacao, tensionamento de esteira)", type: "yesno" }
      ]
    },
    {
      title: "800 - ITENS DE SEGURANCA",
      items: [
        { id: "39", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "40", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "41", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "42", text: "Cordao de parada de emergencia", type: "yesno" },
        { id: "43", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pela maquina", type: "yesno" }
      ]
    }
  ]
};
