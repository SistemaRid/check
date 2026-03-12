export default {
  key: "prancha",
  title: "CHECKLIST DE PRE-USO DE ISNPECAO MOVEL - PRANCHA",
  version: "rev03",

  sections: [
    {
      title: "100 - SISTEMA ELETRICO",
      items: [
        { id: "1", text: "Verificar chicotes do implemento", type: "yesno" },
        { id: "2", text: "Verificar lanternas traseiras e laterais, e setas de alertas", type: "yesno" },
        { id: "4", text: "Verificar tomadas de forca do equipamento", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA PNEUMATICO",
      items: [
        { id: "5", text: "Avaliar mangueiras de ar", type: "yesno" },
        { id: "6", text: "Avaliar conexoes de mangueiras", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "7", text: "Avaliar feixos de molas dos eixos", type: "yesno" },
        { id: "8", text: "Avaliar eixos quanto a sua fixacao", type: "yesno" },
        { id: "9", text: "Avaliar fixacao dos molejos", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "10", text: "Testar freios estacionarios", type: "yesno" },
        { id: "11", text: "Avaliar tambor de freios e cuicas", type: "yesno" },
        { id: "12", text: "Testar freios de servico", type: "yesno" }
      ]
    },
    {
      title: "500 - ESTRUTURA",
      items: [
        { id: "13", text: "Avaliar estrutura quanto a desgastes e trincas", type: "yesno" },
        { id: "14", text: "Avaliar chassi quanto a empenamento", type: "yesno" },
        { id: "15", text: "Avaliar as dobradicas da rampa de acesso da prancha", type: "yesno" },
        { id: "16", text: "Avaliar fixacao e travamento da rampa de acesso", type: "yesno" },
        { id: "17", text: "Avaliar pino de engate na 5a roda", type: "yesno" },
        { id: "18", text: "Avaliar laterais quanto a amassados e danos", type: "yesno" },
        { id: "19", text: "Verificar ganchos de travamento das maquinas e cargas", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "20", text: "Avaliar o estado dos pneus", type: "yesno" },
        { id: "21", text: "Avaliar o alinhamento entre rodas", type: "yesno" }
      ]
    },
    {
      title: "700 - ITENS DE SEGURANCA",
      items: [
        { id: "23", text: "Avaliar extintores ( Lacres, validades, fixacao )", type: "yesno" },
        { id: "24", text: "Avaliar as fixacoes das faixas refletivas para seguranca em operacao", type: "yesno" },
        { id: "25", text: "Avaliar fixacao da placa informativa de comprimento, largura e velocidade permitida", type: "yesno" }
      ]
    }
  ]
};
