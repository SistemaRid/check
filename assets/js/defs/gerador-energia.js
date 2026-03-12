export default {
  key: "gerador-energia",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - CGERADOR DE ENERGIA",
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
        { id: "7", text: "Avaliar nivel do liquido Arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar vazamentos e trincas na tubulacao de combustivel", type: "yesno" },
        { id: "10", text: "Drenar agua ou sedimentos do tanque e filtros de combustivel", type: "yesno" },
        { id: "13", text: "Verificar o indicador de restricao ( se houver )", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "16", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "17", text: "Verificar interruptores e fixacao das conexoes", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "18", text: "Avaliar abertura e fechamento das portas dos compartimentos laterais", type: "yesno" },
        { id: "20", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "21", text: "Avaliar limpeza superior e laterais do grupo gerador", type: "yesno" }
      ]
    },
    {
      title: "400 - ITENS DE SEGURANCA",
      items: [
        { id: "22", text: "Verificar funcionamento do botao de parada de emergencia", type: "yesno" },
        { id: "23", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" }
      ]
    }
  ]
};
