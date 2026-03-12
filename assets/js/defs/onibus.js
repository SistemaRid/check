export default {
  key: "onibus",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - ONIBUS",
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
        { id: "8", text: "Verificar reservatorio do aditivo Arla 32", type: "yesno" },
        { id: "9", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "10", text: "Verificar painel de intrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "12", text: "Verificar farol de re", type: "yesno" },
        { id: "13", text: "Alarme de re", type: "yesno" },
        { id: "14", text: "Verificar iluminacao interna", type: "yesno" },
        { id: "15", text: "Avaliar funcionamento do tacografo", type: "yesno" },
        { id: "16", text: "Testar radio de comunicacao e funcionamento do relogio de horimetro", type: "yesno" },
        { id: "17", text: "Verificar Farois, setas e piscas alertas", type: "yesno" },
        { id: "18", text: "Fazer teste de funcionamento do painel de informacoes", type: "yesno" },
        { id: "19", text: "Verificar Farois frontais (Noturno)", type: "yesno" },
        { id: "20", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "23", text: "Verificar Feixe de mola e amortecedores e batentes", type: "yesno" },
        { id: "24", text: "Cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "25", text: "Avaliar cardam, cruzetas e luva do estriado", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "26", text: "Avaliar Cuica de freio (desgaste e vazamentos nas mangueiras, conexoes e parafusos)", type: "yesno" },
        { id: "27", text: "Avaliar em operacao funcionamento o acionamento do freio motor", type: "yesno" },
        { id: "28", text: "Testar funcionamento do freio estacionario", type: "yesno" },
        { id: "29", text: "Avaliar nivel de fluido de freio", type: "yesno" },
        { id: "30", text: "Testar funcionamento dos freios", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "31", text: "Verifcar Escada de acesso ao onibus", type: "yesno" },
        { id: "32", text: "Verificar Laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "33", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "34", text: "Avaliar acentos do passageiros quanto a rasgos ou objetos esquecidos", type: "yesno" },
        { id: "35", text: "Avaliar retrovisores", type: "yesno" },
        { id: "36", text: "Avaliar poltronas quanto a funcionamento da regulagem de altura e fixacao", type: "yesno" },
        { id: "37", text: "Realizar limpeza interna das poltronas e piso do onibus", type: "yesno" },
        { id: "38", text: "Verificar Nivel de agua e funcionamento dos limpadores parabrisa", type: "yesno" },
        { id: "39", text: "Verificar condicoes da carroceria quanto a folgas e partes danificadas", type: "yesno" },
        { id: "40", text: "Avaliar saidas do ar condicionado para os passageiros", type: "yesno" },
        { id: "41", text: "Avaliar janelas e fechaduras das janelas quanto a abertura e fechamento", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "42", text: "Avaliar barra de direcao (verif. Terminais)", type: "yesno" },
        { id: "43", text: "Verificar Diferencial (carcaca, fixacao)", type: "yesno" },
        { id: "44", text: "Verificar Nivel do oleo do cambio", type: "yesno" },
        { id: "45", text: "Testar Controles, alavancas e pedais", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "46", text: "Verificar nivel de oleo hidraulico", type: "yesno" },
        { id: "47", text: "Verificar a presenca de vazamentos pelo sistema hidraulico", type: "yesno" }
      ]
    },
    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "48", text: "Verificar condicoes dos parafusos e porcas das rodas", type: "yesno" },
        { id: "49", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },
    {
      title: "900 - ITENS DE SEGURANCA",
      items: [
        { id: "50", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "51", text: "Verificar estados e condicoes dos cintos de seguranca de todos os passageiros", type: "yesno" },
        { id: "52", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "53", text: "Verificar posicionamento da macaneta e janelas para caso de saida de emergencia", type: "yesno" },
        { id: "54", text: "Nao permitir em HIPOTESE alguma passageiros de pe durante a movimentacao", type: "yesno" }
      ]
    }
  ]
};
