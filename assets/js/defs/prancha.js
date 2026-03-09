export default {
  key: "prancha",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - PRANCHA",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA ELÉTRICO",
      items: [
        { id: "1", text: "Verificar chicotes do implemento", type: "yesno" },
        { id: "2", text: "Verificar lanternas traseiras e laterais, e setas de alertas", type: "yesno" },
        { id: "3", text: "Verificar tomadas de força do equipamento", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA PNEUMÁTICO",
      items: [
        { id: "4", text: "Avaliar mangueiras de ar", type: "yesno" },
        { id: "5", text: "Avaliar conexões de mangueiras", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "6", text: "Avaliar feixos de molas dos eixos", type: "yesno" },
        { id: "7", text: "Avaliar eixos quanto à sua fixação", type: "yesno" },
        { id: "8", text: "Avaliar fixação dos molejos", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "9", text: "Testar freios estacionários", type: "yesno" },
        { id: "10", text: "Avaliar tambor de freios e cuícas", type: "yesno" },
        { id: "11", text: "Testar freios de serviço", type: "yesno" }
      ]
    },

    {
      title: "500 - ESTRUTURA",
      items: [
        { id: "12", text: "Avaliar estrutura quanto a desgastes e trincas", type: "yesno" },
        { id: "13", text: "Avaliar chassi quanto a empenamento", type: "yesno" },
        { id: "14", text: "Avaliar dobradiças da rampa de acesso da prancha", type: "yesno" },
        { id: "15", text: "Avaliar fixação e travamento da rampa de acesso", type: "yesno" },
        { id: "16", text: "Avaliar pino de engate na 5ª roda", type: "yesno" },
        { id: "17", text: "Avaliar laterais quanto a amassados e danos", type: "yesno" },
        { id: "18", text: "Verificar ganchos de travamento das máquinas e cargas", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "19", text: "Avaliar o estado dos pneus", type: "yesno" },
        { id: "20", text: "Avaliar o alinhamento entre rodas", type: "yesno" }
      ]
    },

    {
      title: "700 - ITENS DE SEGURANÇA",
      items: [
        { id: "21", text: "Avaliar extintores (lacres, validade e fixação)", type: "yesno" },
        { id: "22", text: "Avaliar fixações das faixas refletivas para segurança em operação", type: "yesno" },
        { id: "23", text: "Avaliar fixação da placa informativa de comprimento, largura e velocidade permitida", type: "yesno" }
      ]
    }

  ]
};
