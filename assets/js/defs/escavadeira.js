export default {
  key: "escavadeira",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - ESCAVADEIRA",
  version: "rev03",

  sections: [
    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saidas", type: "yesno" },
        { id: "2", text: "Verificar condicoes de emissao de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "4", text: "Verificar tubulacoes/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Avaliar nivel de oleo do motor", type: "yesno" },
        { id: "6", text: "Avaliar Nivel do Liquido Arrefecedor", type: "yesno" },
        { id: "7", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "8", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "9", text: "Verificar painel de intrumentos, mostradores e interruptores", type: "yesno" },
        { id: "10", text: "Verificar funcionamento do Giroflex", type: "yesno" },
        { id: "11", text: "Testar Alarme de re e buzina", type: "yesno" },
        { id: "12", text: "Verificar Iluminacao interna", type: "yesno" },
        { id: "13", text: "Testar Radio de comunicacao", type: "yesno" },
        { id: "14", text: "Verificar Farol da lanca lado esquerdo e/ou direito", type: "yesno" },
        { id: "15", text: "Verificar Farol da lanca lado esquerdo e/ou direito (Noturno)", type: "yesno" },
        { id: "16", text: "Verificar Farois frontais", type: "yesno" },
        { id: "17", text: "Verificar Farois frontais (Noturno)", type: "yesno" },
        { id: "18", text: "Verificar Ar Condicionado", type: "yesno" },
        { id: "19", text: "Testar Alarme de deslocamento", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "20", text: "Verificar Fechadura de Portas", type: "yesno" },
        { id: "21", text: "Verificar Retrovisores", type: "yesno" },
        { id: "22", text: "Verificar Escadas e Corrimao de acesso a cabine da maquina", type: "yesno" },
        { id: "23", text: "Verificar niveis de agua no reservatorio de agua para limpeza do para-brisa", type: "yesno" },
        { id: "24", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" },
        { id: "25", text: "Verificar Pintura e interferencias mecanicas no contra-peso", type: "yesno" },
        { id: "26", text: "Verificar Estrutura do chassi (Trincas)", type: "yesno" },
        { id: "27", text: "Verificar Compartimento do comando final (trincas, tampas, amassados)", type: "yesno" },
        { id: "28", text: "Verificar Tampa do Compartimento do Motor (fechadura, trava e amortecedor)", type: "yesno" },
        { id: "29", text: "Verificar Vidros (Limpeza, Danos)", type: "yesno" },
        { id: "30", text: "Verificar Estrutura da lanca e braco (soldas, trincas)", type: "yesno" },
        { id: "31", text: "Verificar Cacamba (soldas, trincas, caneleiras, dentes, adaptadores)", type: "yesno" },
        { id: "32", text: "Verificar Pino de articulacao do braco e cacamba", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "33", text: "Inspecionar as correntes quanto a folgas", type: "yesno" },
        { id: "34", text: "Inspecionar as correntes com possiveis trincas em seus elos", type: "yesno" },
        { id: "35", text: "Verificar Comando final (segmentos e vazamentos)", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "36", text: "Verificar cilindros de elevacao do braco quanto a trincas e vazamentos", type: "yesno" },
        { id: "37", text: "Verificar cilindros da cacamba quanto a trincas e vazamentos", type: "yesno" },
        { id: "38", text: "Verificar cilindros da lanca quanto a trincas e vazamentos", type: "yesno" },
        { id: "39", text: "Verificar nivel de oleo hidraulico", type: "yesno" },
        { id: "40", text: "Verificar a presenca de vazamentos pelo sistema hidraulico geral da maquina", type: "yesno" },
        { id: "41", text: "Verifcar Compartimento da bomba hidraulica", type: "yesno" },
        { id: "42", text: "Testar Trava do hidraulico, controles, alavancas e pedais", type: "yesno" },
        { id: "43", text: "Verificar Nivel do oleo do redutor de giro | e ||", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "44", text: "Verificar condicoes dos Parafusos de fixacao das guias de esteira", type: "yesno" },
        { id: "45", text: "Verificar Parafuso de uniao entre o chassi inferior, superior e coroa", type: "yesno" },
        { id: "46", text: "Vericar Esteira, parafusos e porcas da sapata", type: "yesno" },
        { id: "47", text: "Verificar desgaste da roda guia e roletes", type: "yesno" }
      ]
    },
    {
      title: "700 - ITENS DE SEGURANCA",
      items: [
        { id: "48", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "49", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "50", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "51", text: "Verificar posicionamento da macaneta para caso de saida de emergencia", type: "yesno" },
        { id: "52", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pela maquina", type: "yesno" }
      ]
    }
  ]
};
