export default {
  key: "trator-esteira",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - TRATOR DE ESTEIRA",
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
        { id: "8", text: "Verificar aletas do radiador", type: "yesno" },
        { id: "9", text: "Verificar grade protetora do radiador", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "10", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "11", text: "Verificar painel de intrumentos, mostradores e interruptores", type: "yesno" },
        { id: "12", text: "Verificar lanternas traseiras", type: "yesno" },
        { id: "13", text: "Verificar farol de re", type: "yesno" },
        { id: "14", text: "Verificar Farol de re (Noturno)", type: "yesno" },
        { id: "15", text: "Testar Alarme de re e buzina", type: "yesno" },
        { id: "16", text: "Testar Radio de comunicacao", type: "yesno" },
        { id: "17", text: "Verificar Farois frontais", type: "yesno" },
        { id: "18", text: "Verificar Farois frontais (Noturno)", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "19", text: "Verificar parafusos de fixacao do toldo", type: "yesno" },
        { id: "20", text: "Verificar retrovisores", type: "yesno" },
        { id: "21", text: "Verificar Escadas e Corrimao de acesso a cabine da maquina", type: "yesno" },
        { id: "22", text: "Verificar grades de protecao do operador", type: "yesno" },
        { id: "23", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" },
        { id: "24", text: "Verificar Estrutura do chassi (Trincas)", type: "yesno" },
        { id: "25", text: "Verificar Compartimento do comando final (trincas, tampas, amassados)", type: "yesno" },
        { id: "26", text: "Verificar Tampa do Compartimento do Motor (fechadura, trava e amortecedor)", type: "yesno" },
        { id: "27", text: "Braco da lamina em u (verificar o mancal fixador do braco)", type: "yesno" },
        { id: "28", text: "Verificar Parte inferior (protetores, vazamento, parafusos e porcas)", type: "yesno" },
        { id: "29", text: "Verificar Pontos de lubrificacao, pinos e travas dos pinos", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "30", text: "Mat. Rodante (sapatas, parafusos, elos, roletes inf/sup, roda guia e dentada", type: "yesno" },
        { id: "31", text: "Inspecionar as correntes com possiveis trincas ou folgas em seus elos", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "32", text: "Cilindros da lamina (camisa, haste, tubulacoes e conectores)", type: "yesno" },
        { id: "33", text: "Braco de inclinacao da lamina (verifique se e necessario ajuste)", type: "yesno" },
        { id: "34", text: "Verificar nivel de oleo hidraulico", type: "yesno" },
        { id: "35", text: "Verificar a presenca de vazamentos pelo sistema hidraulico geral da maquina", type: "yesno" },
        { id: "36", text: "Comando final (segmentos e vazamentos)", type: "yesno" },
        { id: "37", text: "Compartimento da bomba hidraulica", type: "yesno" },
        { id: "38", text: "Trava do hidraulico, controles, alavancas e pedais", type: "yesno" }
      ]
    },

    {
      title: "600 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "39", text: "Verificar condicoes dos Parafusos e porcas da sapata (parte interna)", type: "yesno" },
        { id: "40", text: "Verificar Parafuso de uniao entre o chassi inferior e superior", type: "yesno" },
        { id: "41", text: "Esteira, parafusos e porcas da sapata", type: "yesno" },
        { id: "42", text: "Verificar desgaste das rodas guias", type: "yesno" }
      ]
    },

    {
      title: "700 - ITENS DE SEGURANCA",
      items: [
        { id: "43", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "44", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "45", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "46", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pela maquina", type: "yesno" }
      ]
    }

  ]
};
