export default {
  key: "cavalo-mecanico",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - CAVALO MECANICO",
  version: "rev03",

  sections: [
    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saidas", type: "yesno" },
        { id: "2", text: "Verificar funcionamento do motor quanto a ruidos anormais", type: "yesno" },
        { id: "3", text: "Verificar condicoes de emissao de poluentes (particulados)", type: "yesno" },
        { id: "4", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "5", text: "Verificar tubulacoes/mangotes/mangueiras", type: "yesno" },
        { id: "6", text: "Avaliar nivel de oleo do motor", type: "yesno" },
        { id: "7", text: "Avaliar nivel do liquido arrefecedor", type: "yesno" },
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar reservatorio do aditivo Arla 32", type: "yesno" },
        { id: "10", text: "Drenar todos reservatorio de ar", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "11", text: "Verificar painel de intrumentos e interruptores", type: "yesno" },
        { id: "12", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "13", text: "Verificar farol de re", type: "yesno" },
        { id: "14", text: "Farol de re e alarme de re", type: "yesno" },
        { id: "15", text: "Verificar iluminacao interna", type: "yesno" },
        { id: "16", text: "Verificar funcionamento da buzina", type: "yesno" },
        { id: "17", text: "Avaliar funcionamento do tacografo", type: "yesno" },
        { id: "18", text: "Testar radio de comunicacao e funcionamento do relogio de horimetro", type: "yesno" },
        { id: "19", text: "Verificar farois, setas e lanternas", type: "yesno" },
        { id: "20", text: "Fazer teste de funcionamento do painel de informacoes do caminhao", type: "yesno" },
        { id: "21", text: "Verificar farois frontais (Noturno)", type: "yesno" },
        { id: "22", text: "Verificar ar-condicionado", type: "yesno" },
        { id: "23", text: "Avaliar mensagens de erro no painel do caminhao", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA PNEUMATICO",
      items: [
        { id: "24", text: "Avaliar mangueiras e conexoes do implemento", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "25", text: "Verificar Feixe de mola, amortecedor, barra de direcao e batentes", type: "yesno" },
        { id: "26", text: "Verficar Cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "27", text: "Avaliar cardam, cruzetas e luva do estriado", type: "yesno" },
        { id: "28", text: "Avaliar fixacao/trava/lubrificacao da 5a roda", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA DE FREIOS",
      items: [
        { id: "29", text: "Avaliar cuica de freio (desgaste e vazamentos nas mangueiras, conexoes e parafusos)", type: "yesno" },
        { id: "30", text: "Avaliar em operacao funcionamento e o acionamento do freio motor", type: "yesno" },
        { id: "31", text: "Testar funcionamento do freio estacionario", type: "yesno" },
        { id: "32", text: "Avaliar nivel de fluido de freio", type: "yesno" },
        { id: "33", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "34", text: "Avaliar escada de acesso ao compartimento do motorista", type: "yesno" },
        { id: "35", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "36", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "37", text: "Verificar para-lamas, para-choques e parabrisas quanto a trincas ou quebras", type: "yesno" },
        { id: "38", text: "Avaliar retrovisores", type: "yesno" },
        { id: "39", text: "Verificar Macanetas externas e internas do caminhao", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "40", text: "Avaliar barra de direcao (verif. Terminais)", type: "yesno" },
        { id: "41", text: "Avaliar diferencial (carcaca, fixacao)", type: "yesno" },
        { id: "42", text: "Verificar nivel do oleo do cambio", type: "yesno" },
        { id: "43", text: "Testar controles, alavancas e pedais", type: "yesno" },
        { id: "44", text: "Verificar nivel de agua e funcionamento dos limpadores parabrisa", type: "yesno" }
      ]
    },
    {
      title: "800 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "45", text: "Verificar nivel de oleo hidraulico", type: "yesno" },
        { id: "46", text: "Verificar a presenca de vazamentos pelo sistema hidraulico geral do caminhao", type: "yesno" }
      ]
    },
    {
      title: "900 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "47", text: "Verificar condicoes dos parafusos e porcas das rodas", type: "yesno" },
        { id: "48", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },
    {
      title: "1000 - ITENS DE SEGURANCA",
      items: [
        { id: "49", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "50", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "51", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "52", text: "Verificar posicionamento da macaneta para caso de saida de emergencia", type: "yesno" },
        { id: "53", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pelo caminhao", type: "yesno" }
      ]
    }
  ]
};
