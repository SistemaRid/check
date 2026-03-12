export default {
  key: "mini-carregadeira",
  title: "CHECKLIST DE PRE-USO DE INSPECAO MOVEL - MINI CARREGADEIRA",
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
        { id: "7", text: "Verificar funcionamento do motor quanto a ruidos anormais de operacao", type: "yesno" }
      ]
    },
    {
      title: "200 - SISTEMA ELETRICO",
      items: [
        { id: "9", text: "Verificar painel de intrumentos / manometros", type: "yesno" },
        { id: "10", text: "Verificar lanternas", type: "yesno" },
        { id: "11", text: "Verificar farol de re e Giroflex", type: "yesno" },
        { id: "12", text: "Verificar Farol de re (Noturno)", type: "yesno" },
        { id: "13", text: "Testar Alarme de re", type: "yesno" },
        { id: "14", text: "Verificar Iluminacao interna", type: "yesno" },
        { id: "15", text: "Testar Radio de comunicacao", type: "yesno" },
        { id: "16", text: "Verificar Ar Condicionado/Interclima", type: "yesno" }
      ]
    },
    {
      title: "300 - SISTEMA SUSPENSAO E EIXOS",
      items: [
        { id: "17", text: "Verificar balanca em tandem LD e LE", type: "yesno" }
      ]
    },
    {
      title: "400 - SISTEMA FREIOS",
      items: [
        { id: "27", text: "Verificar Freio estacionario", type: "yesno" },
        { id: "28", text: "Verificar Acionamento e funcionamento do freio de servico", type: "yesno" },
        { id: "29", text: "Verificar ruidos anormais na frenagem", type: "yesno" },
        { id: "30", text: "Verificar acumulador de freios", type: "yesno" }
      ]
    },
    {
      title: "500 - SISTEMA CABINE E ESTRUTURA",
      items: [
        { id: "32", text: "Verificar Fechadura de Portas", type: "yesno" },
        { id: "33", text: "Verificar Parachoque, paralamas, para-brisa quanto a trincas", type: "yesno" },
        { id: "34", text: "Verificar Retrovisores", type: "yesno" },
        { id: "35", text: "Verificar Corrimao de acesso a cabine da maquina", type: "yesno" },
        { id: "36", text: "Verificar niveis de agua no reservatorio de agua para limpeza do para-brisa", type: "yesno" },
        { id: "37", text: "Verificar funilaria em geral, buscando achar arranhoes ou avarias", type: "yesno" }
      ]
    },
    {
      title: "600 - SISTEMA TRANSMISSAO / DIRECAO",
      items: [
        { id: "38", text: "Verificar Vazamentos em mangueiras", type: "yesno" },
        { id: "39", text: "Testar direcao para a esquerda e testar a direcao para a direita", type: "yesno" },
        { id: "40", text: "Avaliar possivel folga existente na alavanca de direcao (Joystick)", type: "yesno" }
      ]
    },
    {
      title: "700 - SISTEMA HIDRAULICO / LANCA",
      items: [
        { id: "41", text: "Verificar cilindros de elevacao do braco", type: "yesno" },
        { id: "42", text: "Verificar cilindros da concha", type: "yesno" },
        { id: "43", text: "Verificar condicoes de pinos e buchas dos bracos", type: "yesno" },
        { id: "44", text: "Verificar nivel de Nivel do oleo hidraulico", type: "yesno" },
        { id: "45", text: "Verificar a presenca de vazamentos pelo sistema hidraulico geral da maquina", type: "yesno" }
      ]
    },
    {
      title: "800 - SISTEMA MATERIAL RODANTE / PNEUS",
      items: [
        { id: "46", text: "Verificar condicoes dos pneus quanto (Calibragem, Cortes, Banda de Rodagem)", type: "yesno" },
        { id: "47", text: "Verificar prisioneiros das rodas", type: "yesno" }
      ]
    },
    {
      title: "900 - ITENS DE SEGURANCA",
      items: [
        { id: "48", text: "Verifique o banco do operador (fixacao, encosto, amortecedor, ajuste)", type: "yesno" },
        { id: "49", text: "Verificar estados e condicoes do cinto de seguranca", type: "yesno" },
        { id: "50", text: "Verificar extintor de incendio (suporte, Pressao, Lacre e Validade)", type: "yesno" },
        { id: "51", text: "Verificar posicionamento da macaneta para caso de saida de emergencia", type: "yesno" },
        { id: "52", text: "Realizar 5s da cabine do equipamento e demais pontos necessarios pela maquina", type: "yesno" }
      ]
    }
  ]
};
