export default {
  key: "compressor",
  title: "CHECKLIST DE PRÉ-USO DE INSPEÇÃO MÓVEL - COMPRESSOR",
  version: "rev03",

  sections: [

    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saídas", type: "yesno" },
        { id: "2", text: "Verificar condições de emissão de poluentes (Particulados)", type: "yesno" },
        { id: "3", text: "Verificar compartimento do filtro de ar do motor (descarga, respiro)", type: "yesno" },
        { id: "4", text: "Verificar tubulações / mangotes / mangueiras", type: "yesno" },
        { id: "5", text: "Verificar nível de óleo do motor", type: "yesno" },
        { id: "6", text: "Verificar nível de óleo do compressor", type: "yesno" },
        { id: "7", text: "Verificar compartimento do filtro de ar do compressor (descarga, respiro)", type: "yesno" },
        { id: "8", text: "Verificar funcionamento do motor quanto a ruídos anormais de operação", type: "yesno" },
        { id: "9", text: "Verificar funcionamento da solenoide de corte de combustível", type: "yesno" }
      ]
    },

    {
      title: "200 - SISTEMA ELÉTRICO",
      items: [
        { id: "10", text: "Verificar baterias / cabos / bornes", type: "yesno" },
        { id: "11", text: "Verificar painel de instrumentos / manômetros", type: "yesno" },
        { id: "12", text: "Verificar fiação e chicotes externos", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA PNEUMÁTICO",
      items: [
        { id: "13", text: "Verificar condição do cabo ou corrente de fixação da mangueira de saída de ar do compressor", type: "yesno" },
        { id: "14", text: "Verificar vazamento de ar nas mangueiras e conexões", type: "yesno" },
        { id: "15", text: "Verificar condição da válvula de ajuste de pressão", type: "yesno" },
        { id: "16", text: "Verificar acionamento e funcionamento do compressor", type: "yesno" }
      ]
    },

    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "17", text: "Verificar funilaria em geral buscando arranhões ou avarias", type: "yesno" },
        { id: "18", text: "Verificar cabeçário do reboque", type: "yesno" },
        { id: "19", text: "Verificar base de apoio do compressor para estacionar", type: "yesno" },
        { id: "20", text: "Avaliar chassi quanto a trincas ou avarias", type: "yesno" }
      ]
    },

    {
      title: "400 - SISTEMA TRANSMISSÃO / DIREÇÃO",
      items: [
        { id: "21", text: "Verificar rótulo e pino do cabeçário", type: "yesno" }
      ]
    },

    {
      title: "500 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "22", text: "Avaliar desgaste dos pneus", type: "yesno" },
        { id: "23", text: "Avaliar parafusos prisioneiros das rodas", type: "yesno" },
        { id: "24", text: "Avaliar pressões dos pneus", type: "yesno" }
      ]
    },

    {
      title: "600 - ITENS DE SEGURANÇA",
      items: [
        { id: "25", text: "Verificar extintor de incêndio (suporte, pressão, lacre e validade)", type: "yesno" },
        { id: "26", text: "Verificar botão de parada de emergência", type: "yesno" }
      ]
    }

  ]
};