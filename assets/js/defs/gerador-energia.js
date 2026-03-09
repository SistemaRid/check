export default {
  key: "gerador-energia",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - GERADOR DE ENERGIA",
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
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar vazamentos e trincas na tubulação de combustível", type: "yesno" },
        { id: "10", text: "Drenar água ou sedimentos do tanque e filtros de combustível", type: "yesno" },
        { id: "11", text: "Verificar indicador de restrição (se houver)", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "12", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "13", text: "Verificar interruptores e fixação das conexões", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "14", text: "Avaliar abertura e fechamento das portas dos compartimentos laterais", type: "yesno" },
        { id: "15", text: "Avaliar parte inferior do equipamento quanto a danos, amassados ou vazamentos", type: "yesno" },
        { id: "16", text: "Avaliar limpeza superior e laterais do grupo gerador", type: "yesno" }
      ]
    },

    {
      title: "400 - ITENS DE SEGURANÇA",
      items: [
        { id: "17", text: "Verificar funcionamento do botão de parada de emergência", type: "yesno" },
        { id: "18", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" }
      ]
    }

  ]
};