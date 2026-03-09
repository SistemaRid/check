export default {
  key: "onibus",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - ÔNIBUS",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar condições de emissão de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar se existe desgaste ou folga nas correias e tensores", type: "yesno" },
        { id: "4", text: "Verificar tubulações/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Avaliar nível de óleo do motor", type: "yesno" },
        { id: "6", text: "Avaliar nível do líquido arrefecedor", type: "yesno" },
        { id: "7", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "8", text: "Verificar reservatório do aditivo Arla 32", type: "yesno" },
        { id: "9", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "10", text: "Verificar painel de instrumentos e interruptores", type: "yesno" },
        { id: "11", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "12", text: "Verificar farol de ré", type: "yesno" },
        { id: "13", text: "Alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Avaliar funcionamento do tacógrafo", type: "yesno" },
        { id: "16", text: "Testar rádio de comunicação e funcionamento do relógio de horímetro", type: "yesno" },
        { id: "17", text: "Verificar faróis, setas e piscas alertas", type: "yesno" },
        { id: "18", text: "Fazer teste de funcionamento do painel de informações", type: "yesno" },
        { id: "19", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "20", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "21", text: "Verificar feixe de mola, amortecedores e batentes", type: "yesno" },
        { id: "22", text: "Cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "23", text: "Avaliar cardã, cruzetas e luva do estriado", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "24", text: "Avaliar cuíca de freio (desgaste e vazamentos nas mangueiras, conexões e parafusos)", type: "yesno" },
        { id: "25", text: "Avaliar em operação funcionamento e acionamento do freio motor", type: "yesno" },
        { id: "26", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "27", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "28", text: "Testar funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "29", text: "Verificar escada de acesso ao ônibus", type: "yesno" },
        { id: "30", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "31", text: "Avaliar parte inferior do equipamento quanto a danos, amassados ou vazamentos", type: "yesno" },
        { id: "32", text: "Avaliar assentos dos passageiros quanto a rasgos ou objetos esquecidos", type: "yesno" },
        { id: "33", text: "Avaliar retrovisores", type: "yesno" },
        { id: "34", text: "Avaliar poltronas quanto a funcionamento da regulagem de altura e fixação", type: "yesno" },
        { id: "35", text: "Realizar limpeza interna das poltronas e piso do ônibus", type: "yesno" },
        { id: "36", text: "Verificar nível de água e funcionamento dos limpadores para-brisa", type: "yesno" },
        { id: "37", text: "Verificar condições da carroceria quanto a folgas e partes danificadas", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "38", text: "Avaliar barra de direção (verificação de terminais)", type: "yesno" },
        { id: "39", text: "Verificar nível de óleo do câmbio", type: "yesno" },
        { id: "40", text: "Testar controles, alavancas e pedais", type: "yesno" },
        { id: "41", text: "Verificar diferencial (carcaça, fixação)", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO",
      items: [
        { id: "42", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "43", text: "Verificar presença de vazamentos no sistema hidráulico", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "44", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "45", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "46", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "47", text: "Verificar estados e condições dos cintos de segurança dos passageiros", type: "yesno" },
        { id: "48", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "49", text: "Verificar posicionamento da maçaneta e janelas para saída de emergência", type: "yesno" },
        { id: "50", text: "Avaliar saídas do ar condicionado para os passageiros", type: "yesno" },
        { id: "51", text: "Avaliar janelas e fechaduras das janelas quanto a abertura e fechamento", type: "yesno" }
      ]
    }

  ]
};