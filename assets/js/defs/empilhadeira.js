export default {
  key: "empilhadeira",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - EMPILHADEIRA",
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
        { id: "7", text: "Avaliar Nivel do Liquido Arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "9", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "10", text: "Verificar painel de intrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "12", text: "Verificar farol de re e Giroflex", type: "yesno" },
        { id: "13", text: "Testar alarme de re", type: "yesno" },
        { id: "14", text: "Verificar iluminacao interna", type: "yesno" },
        { id: "15", text: "Testar radio de comunicacao", type: "yesno" },
        { id: "16", text: "Verificar ar-condicionado", type: "yesno" },
        { id: "17", text: "Verificar Farois frontais", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "18", text: "Avaliar Cubo das rodas", type: "yesno" },
        { id: "19", text: "Avaliar suspensao rigida", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "20", text: "Avaliar funcionamento do freio estacionario", type: "yesno" },
        { id: "21", text: "Avaliar nivel de fluido de freio", type: "yesno" },
        { id: "22", text: "Verifique o funcionamento dos freios de servico", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "23", text: "Verificar Escada de acesso ao compartimento do operador", type: "yesno" },
        { id: "24", text: "Verificar Laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "25", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "26", text: "Avaliar fixacao das grades laterais inferiores de protecao e para-choques", type: "yesno" },
        { id: "27", text: "Avaliar retrovisores", type: "yesno" },
        { id: "28", text: "Limpeza da cabine do equipamento", type: "yesno" },
        { id: "29", text: "Avaliar correntes de elevacao, colunas e deslocadores quanto a lubrificacao", type: "yesno" },
        { id: "30", text: "Avaliar garfos quanto a desgaste e trincas", type: "yesno" },
        { id: "31", text: "Avaliar correntes de elevacao quanto a folga e seus elos", type: "yesno" },
        { id: "32", text: "Avaliar contrapeso quanto a danos na sua estrutura", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "33", text: "Avaliar barra de direcao (verificar Buchas)", type: "yesno" },
        { id: "34", text: "Avaliar funcionamento da direcao, girando em totalidades", type: "yesno" },
        { id: "35", text: "Verificar Nivel do oleo do cambio", type: "yesno" },
        { id: "36", text: "Testar Controles, alavancas e pedais", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "37", text: "Verificar nivel de oleo hidraulico", type: "yesno" },
        { id: "38", text: "Verificar a presenca de vazamentos no sistema hidraulico", type: "yesno" }
      ]
    },
    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "39", text: "Verificar condicoes dos parafusos e porcas das rodas", type: "yesno" },
        { id: "40", text: "Verificar borracha rigida de rodagem dos pneus ou cortes", type: "yesno" },
        { id: "41", text: "Verificar se ja existe marca de fogo - caso nao exista, alertar posicao.", type: "yesno" }
      ]
    },
    {
      title: "900 - ITENS DE SEGURANCA",
      items: [
        { id: "42", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "43", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "44", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "45", text: "Realizar 5s da cabine", type: "yesno" }
      ]
    }
  ]
};
