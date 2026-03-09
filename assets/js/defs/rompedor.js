export default {
  key: "rompedor",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - ROMPEDOR",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "1", text: "Avaliar mangueiras e conexões do rompedor", type: "yesno" },
        { id: "2", text: "Avaliar ponteira quanto ao seu desgaste", type: "yesno" },
        { id: "3", text: "Avaliar fixação do rompedor na lança da escavadeira ou base fixa", type: "yesno" },
        { id: "4", text: "Avaliar se existem vazamentos de gás ou óleo pelo sistema do rompedor e braço", type: "yesno" },
        { id: "5", text: "Avaliar com o rompedor em trabalho a eficiência dos movimentos de rompimento", type: "yesno" }
      ]
    },

    {
      title: "200 - ITENS DE SEGURANÇA",
      items: [
        { id: "6", text: "Avaliar se existem extintores próximos ou na máquina de operação", type: "yesno" }
      ]
    }

  ]
};