export default {
  key: "caminhao-pipa",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - CAMINHÃO PIPA",
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
        { id: "12", text: "Verificar farol de ré e giroflex", type: "yesno" },
        { id: "13", text: "Verificar farol de ré e alarme de ré", type: "yesno" },
        { id: "14", text: "Verificar iluminação interna", type: "yesno" },
        { id: "15", text: "Verificar funcionamento da buzina", type: "yesno" },
        { id: "16", text: "Avaliar funcionamento do tacógrafo", type: "yesno" },
        { id: "17", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "18", text: "Verificar faróis, setas, piscas alertas e lanternas do tanque", type: "yesno" },
        { id: "19", text: "Fazer teste de funcionamento do painel de informações do caminhão", type: "yesno" },
        { id: "20", text: "Verificar faróis frontais (noturno)", type: "yesno" },
        { id: "21", text: "Verificar ar-condicionado", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA SUSPENSÃO E EIXOS",
      items: [
        { id: "22", text: "Avaliar feixe de mola, amortecedor e batentes", type: "yesno" },
        { id: "23", text: "Avaliar cubo das rodas (bocais de enchimento e parafusos)", type: "yesno" },
        { id: "24", text: "Avaliar cardan, cruzetas e luva do estriado", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA DE FREIOS",
      items: [
        { id: "25", text: "Verificar cuíca de freio (desgaste e vazamentos nas mangueiras, conexões e parafusos)", type: "yesno" },
        { id: "26", text: "Avaliar em operação funcionamento do acionamento do freio motor", type: "yesno" },
        { id: "27", text: "Testar funcionamento do freio estacionário", type: "yesno" },
        { id: "28", text: "Avaliar nível de fluido de freio", type: "yesno" },
        { id: "29", text: "Testar o funcionamento dos freios", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "30", text: "Verificar escada de acesso ao compartimento do motorista", type: "yesno" },
        { id: "31", text: "Verificar laterais da cabine (funilaria e pintura)", type: "yesno" },
        { id: "32", text: "Avaliar se existe desgaste nos coxins do chassi", type: "yesno" },
        { id: "33", text: "Avaliar parte inferior do equipamento se existe algum dano, amassado ou vazamento", type: "yesno" },
        { id: "34", text: "Avaliar fixação das grades laterais inferiores de proteção e para-choques", type: "yesno" },
        { id: "35", text: "Avaliar retrovisores", type: "yesno" },
        { id: "36", text: "Verificar maçanetas externas e internas do caminhão", type: "yesno" },
        { id: "37", text: "Limpeza da cabine do caminhão", type: "yesno" },
        { id: "38", text: "Verificar nível de água e funcionamento dos limpadores do para-brisa", type: "yesno" },
        { id: "39", text: "Verificar chuveiro, para-choque e escada de acesso ao tanque", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "40", text: "Avaliar barra de direção (verificação de terminais)", type: "yesno" },
        { id: "41", text: "Verificar nível do óleo do câmbio", type: "yesno" },
        { id: "42", text: "Verificar diferencial (carcaça, fixação)", type: "yesno" },
        { id: "43", text: "Testar controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "700 - SISTEMA HIDRÁULICO / BOMBEAMENTO",
      items: [
        { id: "44", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "45", text: "Verificar presença de vazamentos no sistema hidráulico geral", type: "yesno" },
        { id: "46", text: "Avaliar vazamentos no sistema de bombeamento de água", type: "yesno" },
        { id: "47", text: "Avaliar mangotes e conexões do pipa", type: "yesno" },
        { id: "48", text: "Avaliar desgaste do tanque de água quanto a vazamentos e trincas", type: "yesno" }
      ]
    },

    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "49", text: "Verificar condições dos parafusos e porcas das rodas", type: "yesno" },
        { id: "50", text: "Verificar banda de rodagem dos pneus ou cortes", type: "yesno" }
      ]
    },

    {
      title: "900 - ITENS DE SEGURANÇA",
      items: [
        { id: "51", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "52", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "53", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "54", text: "Verificar posicionamento da maçaneta para saída de emergência", type: "yesno" },
        { id: "55", text: "Realizar 5S da cabine do caminhão", type: "yesno" }
      ]
    }

  ]
};