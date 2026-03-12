export default {
  key: "compressor",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - COMPRESSOR",
  version: "rev03",

  sections: [
    {
      title: "100 - SISTEMA MOTOR",
      items: [
        { id: "1", text: "Verificar escapamentos e saidas", type: "yesno" },
        { id: "2", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" },
        { id: "3", text: "Verificar condicoes de emissao de poluentes (Particulados)", type: "yesno" },
        { id: "4", text: "Verificar tubulacoes/mangotes/mangueiras", type: "yesno" },
        { id: "5", text: "Verificar nivel de oleo do motor", type: "yesno" },
        { id: "6", text: "Verificar Nivel do Oleo do Compressor", type: "yesno" },
        { id: "7", text: "Verificar Compartimento do Filtro de Ar do Compressor (Descarga, Respiro)", type: "yesno" },
        { id: "8", text: "Verificar Compartimento do Filtro de Ar do Motor (Descarga, Repiro)", type: "yesno" },
        { id: "9", text: "Verificar funcionamento da solenoide de corte de combustivel", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "10", text: "Verificar baterias/cabos/bornes", type: "yesno" },
        { id: "11", text: "Verificar painel de intrumentos / manometros", type: "yesno" },
        { id: "12", text: "Verificar fiacao e chicotes externos", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA PNEUMATICO",
      items: [
        { id: "13", text: "Verificar condicao do cabo/corrente de fixacao da mangueira de saida de ar do compressor", type: "yesno" },
        { id: "14", text: "Verificar vazamento de ar nas mangueiras e conexoes.", type: "yesno" },
        { id: "15", text: "Verificar Condicao da valvula de ajuste de pressao", type: "yesno" },
        { id: "16", text: "Verificar acionamento e funcionamento do compressor", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "17", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" },
        { id: "18", text: "Verificar cabecario do reboque", type: "yesno" },
        { id: "19", text: "Verificar base de apoio do compressor para estacionar", type: "yesno" },
        { id: "20", text: "Avaliar chassi quando a trincas ou avarias", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "21", text: "Verificar rotulo e pino do cabecario", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "22", text: "Avaliar desgaste dos pneus", type: "yesno" },
        { id: "23", text: "Avaliar parafusos prisioneiros das rodas", type: "yesno" },
        { id: "24", text: "Avaliar pressoes dos pneus", type: "yesno" }
      ]
    },
    {
      title: "600 - ITENS DE SEGURANCA",
      items: [
        { id: "25", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "26", text: "Verificar botao de parada de emergencia", type: "yesno" }
      ]
    }
  ]
};
