export default {
  key: "retroescavadeira",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - RETROESCAVADEIRA",
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
        { id: "7", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "8", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "9", text: "Verificar painel de intrumentos / manometros", type: "yesno" },
        { id: "10", text: "Verificar lanternas", type: "yesno" },
        { id: "11", text: "Verificar farol de re e Giroflex", type: "yesno" },
        { id: "12", text: "Farol de re (Noturno)", type: "yesno" },
        { id: "13", text: "Testar Alarme de re", type: "yesno" },
        { id: "14", text: "Verificar Iluminacao interna", type: "yesno" },
        { id: "15", text: "Testar Radio de comunicacao", type: "yesno" },
        { id: "16", text: "Verificar Ar Condicionado/Interclima", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "17", text: "Verificar Batentes e Suspensao", type: "yesno" },
        { id: "18", text: "Verificar suportes/amortecedores/jumelos/coxins/barra estabilizadora", type: "yesno" },
        { id: "20", text: "Verificar Grampos/Fixadores", type: "yesno" },
        { id: "21", text: "Verificar Eixo Dianteiro/Traseiro", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA FREIOS",
      items: [
        { id: "22", text: "Verificar Freio estacionario", type: "yesno" },
        { id: "23", text: "Verificar Acionamento e funcionamento do freio de servico", type: "yesno" },
        { id: "24", text: "Verificar ruidos anormais na frenagem", type: "yesno" },
        { id: "25", text: "Verificar nivel do fluido de freios", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "26", text: "Verificar Fechadura de Portas", type: "yesno" },
        { id: "27", text: "Verificar Parachoque, paralamas, para-brisa quanto a trincas", type: "yesno" },
        { id: "28", text: "Verificar Retrovisores", type: "yesno" },
        { id: "29", text: "Verificar Escadas e corrimao de acesso a cabine da maquina", type: "yesno" },
        { id: "30", text: "Verificar niveis de agua no reservatorio de agua para limpeza do para-brisa", type: "yesno" },
        { id: "31", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" },
        { id: "32", text: "Verificar patolas quanto a trincas e ou desgastes nas soldas", type: "yesno" },
        { id: "33", text: "Verificar desgaste dos dentes e cacambas", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "34", text: "Verificar vazamentos em mangueiras", type: "yesno" },
        { id: "35", text: "Verificar acionamento da Embreagem", type: "yesno" },
        { id: "36", text: "Avaliar ruidos anormais em carda/cruzetas", type: "yesno" },
        { id: "37", text: "Avaliar possivel folga existente na barra de direcao", type: "yesno" },
        { id: "38", text: "Avaliar funcionamento do volante", type: "yesno" },
        { id: "39", text: "Avaliar nivel de oleo da transmissao", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "40", text: "Verificar cilindros de elevacao do braco dianteiro e traseiro", type: "yesno" },
        { id: "41", text: "Verificar cilindros da concha dianteira e traseira", type: "yesno" },
        { id: "42", text: "Verificar condicoes de pinos e buchas dos bracos dinateiros e traseiros", type: "yesno" },
        { id: "43", text: "Verificar nivel do oleo hidraulico", type: "yesno" },
        { id: "44", text: "Verificar a presenca de vazamentos pelo sistema hidraulico geral da maquina", type: "yesno" }
      ]
    },
    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "45", text: "Verificar condicoes dos pneus quanto (Calibragem, Cortes, Banda de Rodagem)", type: "yesno" },
        { id: "46", text: "Verificar visualmente prisioneiros de rodas frouxos ou faltantes", type: "yesno" }
      ]
    },
    {
      title: "900 - ITENS DE SEGURANCA",
      items: [
        { id: "47", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "48", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "49", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "50", text: "Verificar condicao da macaneta para caso de saida de emergencia", type: "yesno" },
        { id: "51", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pela maquina", type: "yesno" }
      ]
    }
  ]
};
