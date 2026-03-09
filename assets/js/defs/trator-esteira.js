export default {
  key: "trator-esteira",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - TRATOR DE ESTEIRA",
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
        { id: "9", text: "Verificar grade protetora do radiador", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "10", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "11", text: "Verificar painel de instrumentos, mostradores e interruptores", type: "yesno" },
        { id: "12", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "13", text: "Verificar farol de ré", type: "yesno" },
        { id: "14", text: "Verificar farol de ré (noturno)", type: "yesno" },
        { id: "15", text: "Testar alarme de ré e buzina", type: "yesno" },
        { id: "16", text: "Testar rádio de comunicação", type: "yesno" },
        { id: "17", text: "Verificar faróis frontais", type: "yesno" },
        { id: "18", text: "Verificar faróis frontais (noturno)", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "19", text: "Verificar parafusos de fixação do toldo", type: "yesno" },
        { id: "20", text: "Verificar retrovisores", type: "yesno" },
        { id: "21", text: "Verificar escadas e corrimão de acesso à cabine da máquina", type: "yesno" },
        { id: "22", text: "Verificar grades de proteção do operador", type: "yesno" },
        { id: "23", text: "Verificar funilaria em geral buscando arranhões ou avarias", type: "yesno" },
        { id: "24", text: "Verificar estrutura do chassi (trincas)", type: "yesno" },
        { id: "25", text: "Verificar compartimento do comando final (trincas, tampas, amassados)", type: "yesno" },
        { id: "26", text: "Verificar tampa do compartimento do motor (fechadura, trava e amortecedor)", type: "yesno" },
        { id: "27", text: "Braço da lâmina em U (verificar o mancal fixador do braço)", type: "yesno" },
        { id: "28", text: "Verificar parte inferior (protetores, vazamento, parafusos e porcas)", type: "yesno" },
        { id: "29", text: "Verificar pontos de lubrificação, pinos e travas dos pinos", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "30", text: "Material rodante (sapatas, parafusos, elos, roletes inf/sup, roda guia e dentada)", type: "yesno" },
        { id: "31", text: "Inspecionar correntes quanto a trincas ou folgas nos elos", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA HIDRÁULICO / LANÇA",
      items: [
        { id: "32", text: "Cilindros da lâmina (camisa, haste, tubulações e conectores)", type: "yesno" },
        { id: "33", text: "Braço de inclinação da lâmina (verificar se é necessário ajuste)", type: "yesno" },
        { id: "34", text: "Verificar nível de óleo hidráulico", type: "yesno" },
        { id: "35", text: "Verificar presença de vazamentos no sistema hidráulico geral da máquina", type: "yesno" },
        { id: "36", text: "Comando final (segmentos e vazamentos)", type: "yesno" },
        { id: "37", text: "Compartimento da bomba hidráulica", type: "yesno" },
        { id: "38", text: "Trava do hidráulico, controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "39", text: "Verificar condições dos parafusos e porcas da sapata (parte interna)", type: "yesno" },
        { id: "40", text: "Verificar parafuso de união entre o chassi inferior e superior", type: "yesno" },
        { id: "41", text: "Esteira, parafusos e porcas da sapata", type: "yesno" },
        { id: "42", text: "Verificar desgaste das rodas guias", type: "yesno" }
      ]
    },

    {
      title: "700 - ITENS DE SEGURANÇA",
      items: [
        { id: "43", text: "Verificar estados e condições do cinto de segurança", type: "yesno" },
        { id: "44", text: "Verificar banco do operador (fixação, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "45", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "46", text: "Realizar 5S da cabine do equipamento e demais pontos necessários pela máquina", type: "yesno" }
      ]
    }

  ]
};