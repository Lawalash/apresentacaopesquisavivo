import { SurveyQuestion, KPI } from '../types';

export const TOTAL_RESPONSES = 178;

export const HIERARCHY_TOTALS = {
  'Coordenador': 7,
  'Gerente Jr': 2,
  'Gerente Sênior': 2,
  'Analista Operação': 1,
  'Supervisor': 166,
};

export const PRINCIPLES = [
  "1. ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
  "2. FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
  "3. SÓ ACREDITAMOS NO SIMPLES.",
  "4. SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
  "5. TEMOS FOCO.",
  "6. ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
  "7. NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
  "8. SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
  "9. SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
  "10. SOMOS FELIZES COM O QUE FAZEMOS."
];

export const KPIS: KPI[] = [
  { label: "Satisfação Geral (Q1)", value: "51.7%", subtext: "Satisfeitos ou Muito Satisfeitos", trend: "positive" },
  { label: "Estabilidade (Q2)", value: "53.9%", subtext: "Avaliação positiva do cenário atual", trend: "positive" },
  { label: "Impacto Operacional (Q3)", value: "60.1%", subtext: "Contribui bastante/essencialmente", trend: "positive" },
  { label: "Recomendação (Q6)", value: "74.2%", subtext: "Recomendariam o modelo", trend: "positive" },
];

export const QUESTIONS: SurveyQuestion[] = [
  {
    id: 'Q1',
    title: 'Q1 — Satisfação com o projeto de Governança Locker',
    chartType: 'bar',
    positiveOptions: ['Muito satisfeito', 'Satisfeito', 'Satisfeito / Muito satisfeito'],
    data: [
      { name: 'Satisfeito / Muito satisfeito', value: 92, color: '#06b6d4' }, // Cyan 500
      { name: 'Neutro', value: 58, color: '#94a3b8' }, // Slate 400
      { name: 'Insatisfeito / Muito insatisfeito', value: 28, color: '#ef4444' }, // Red 500
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Muito satisfeito', value: 1, color: '#22d3ee' },
          { name: 'Satisfeito', value: 2, color: '#0ea5e9' },
          { name: 'Neutro', value: 3, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 1, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Muito satisfeito', value: 0, color: '#22d3ee' },
          { name: 'Satisfeito', value: 1, color: '#0ea5e9' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Muito satisfeito', value: 0, color: '#22d3ee' },
          { name: 'Satisfeito', value: 2, color: '#0ea5e9' },
          { name: 'Neutro', value: 0, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Muito satisfeito', value: 0, color: '#22d3ee' },
          { name: 'Satisfeito', value: 0, color: '#0ea5e9' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Muito satisfeito', value: 7, color: '#22d3ee' },
          { name: 'Satisfeito', value: 79, color: '#0ea5e9' },
          { name: 'Neutro', value: 53, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 12, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 15, color: '#ef4444' },
        ],
      },
    ],
    insight: 'Embora a maioria (51,7%) esteja satisfeita, há um bloco neutro significativo (32,6%) que representa uma oportunidade de conversão através de melhorias visíveis.'
  },
  {
    id: 'Q2',
    title: 'Q2 — Estabilidade / funcionamento do Locker',
    chartType: 'bar',
    positiveOptions: ['Muito satisfeito', 'Satisfeito', 'Satisfeito / Muito satisfeito'],
    data: [
      { name: 'Satisfeito / Muito satisfeito', value: 96, color: '#06b6d4' },
      { name: 'Neutro', value: 56, color: '#94a3b8' },
      { name: 'Insatisfeito / Muito insatisfeito', value: 26, color: '#ef4444' },
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Muito satisfeito', value: 1, color: '#22d3ee' },
          { name: 'Satisfeito', value: 2, color: '#0ea5e9' },
          { name: 'Neutro', value: 3, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 1, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Muito satisfeito', value: 0, color: '#22d3ee' },
          { name: 'Satisfeito', value: 1, color: '#0ea5e9' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Muito satisfeito', value: 1, color: '#22d3ee' },
          { name: 'Satisfeito', value: 1, color: '#0ea5e9' },
          { name: 'Neutro', value: 0, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Muito satisfeito', value: 0, color: '#22d3ee' },
          { name: 'Satisfeito', value: 0, color: '#0ea5e9' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 0, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Muito satisfeito', value: 36, color: '#22d3ee' },
          { name: 'Satisfeito', value: 56, color: '#0ea5e9' },
          { name: 'Neutro', value: 49, color: '#94a3b8' },
          { name: 'Insatisfeito', value: 15, color: '#f87171' },
          { name: 'Muito insatisfeito', value: 10, color: '#ef4444' },
        ],
      },
    ],
    insight: 'A estabilidade é bem avaliada pela maioria, mas 14,6% de insatisfação somada aos neutros indica riscos operacionais que precisam ser mitigados tecnicamente.'
  },
  {
    id: 'Q3',
    title: 'Q3 — Contribuição para controle de jornada / HE',
    chartType: 'bar',
    positiveOptions: ['Contribui bastante / essencial'],
    data: [
      { name: 'Contribui bastante / essencial', value: 107, color: '#06b6d4' },
      { name: 'Contribui moderadamente', value: 46, color: '#94a3b8' },
      { name: 'Pouco / Não contribui', value: 25, color: '#ef4444' },
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Contribui bastante / essencial', value: 4, color: '#06b6d4' },
          { name: 'Contribui moderadamente', value: 2, color: '#94a3b8' },
          { name: 'Pouco / Não contribui', value: 1, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Contribui bastante / essencial', value: 1, color: '#06b6d4' },
          { name: 'Contribui moderadamente', value: 1, color: '#94a3b8' },
          { name: 'Pouco / Não contribui', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Contribui bastante / essencial', value: 1, color: '#06b6d4' },
          { name: 'Contribui moderadamente', value: 1, color: '#94a3b8' },
          { name: 'Pouco / Não contribui', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Contribui bastante / essencial', value: 1, color: '#06b6d4' },
          { name: 'Contribui moderadamente', value: 0, color: '#94a3b8' },
          { name: 'Pouco / Não contribui', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Contribui bastante / essencial', value: 100, color: '#06b6d4' },
          { name: 'Contribui moderadamente', value: 43, color: '#94a3b8' },
          { name: 'Pouco / Não contribui', value: 23, color: '#ef4444' },
        ],
      },
    ],
    insight: 'Este é o ponto mais forte da ferramenta: 60% dos usuários percebem alto valor no controle de jornada, validando o propósito central do projeto.'
  },
  {
    id: 'Q4',
    title: 'Q4 — Comunicação, suporte e acompanhamento',
    chartType: 'bar',
    positiveOptions: ['Satisfeito / Muito satisfeito'],
    data: [
      { name: 'Satisfeito / Muito satisfeito', value: 90, color: '#06b6d4' },
      { name: 'Neutro', value: 72, color: '#94a3b8' },
      { name: 'Insatisfeito / Muito insatisfeito', value: 16, color: '#ef4444' },
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Satisfeito / Muito satisfeito', value: 4, color: '#06b6d4' },
          { name: 'Neutro', value: 3, color: '#94a3b8' },
          { name: 'Insatisfeito / Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Satisfeito / Muito satisfeito', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito / Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Satisfeito / Muito satisfeito', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Insatisfeito / Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Satisfeito / Muito satisfeito', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 0, color: '#94a3b8' },
          { name: 'Insatisfeito / Muito insatisfeito', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Satisfeito / Muito satisfeito', value: 84, color: '#06b6d4' },
          { name: 'Neutro', value: 67, color: '#94a3b8' },
          { name: 'Insatisfeito / Muito insatisfeito', value: 15, color: '#ef4444' },
        ],
      },
    ],
    insight: 'A alta taxa de neutros (40,5%) sugere que o suporte funciona, mas falta proatividade ou agilidade percebida (SLAs). Comunicação precisa ser mais assertiva.'
  },
  {
    id: 'Q5',
    title: 'Q5 — Clareza das regras e combinados',
    chartType: 'bar',
    positiveOptions: ['Claro / Muito claro'],
    data: [
      { name: 'Claro / Muito claro', value: 101, color: '#06b6d4' },
      { name: 'Neutro', value: 72, color: '#94a3b8' },
      { name: 'Pouco claro / Confuso', value: 18, color: '#ef4444' },
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Claro / Muito claro', value: 4, color: '#06b6d4' },
          { name: 'Neutro', value: 3, color: '#94a3b8' },
          { name: 'Pouco claro / Confuso', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Claro / Muito claro', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Pouco claro / Confuso', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Claro / Muito claro', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 1, color: '#94a3b8' },
          { name: 'Pouco claro / Confuso', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Claro / Muito claro', value: 1, color: '#06b6d4' },
          { name: 'Neutro', value: 0, color: '#94a3b8' },
          { name: 'Pouco claro / Confuso', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Claro / Muito claro', value: 88, color: '#06b6d4' },
          { name: 'Neutro', value: 63, color: '#94a3b8' },
          { name: 'Pouco claro / Confuso', value: 15, color: '#ef4444' },
        ],
      },
    ],
    insight: 'As regras são claras para a maioria, mas novamente o grupo neutro (40,5%) indica que dúvidas sobre "buffer" e regras de pausa ainda persistem.'
  },
  {
    id: 'Q6',
    title: 'Q6 — Recomendaria manter/expandir o modelo?',
    chartType: 'pie',
    positiveOptions: ['Recomendo'],
    data: [
      { name: 'Recomendo', value: 132, color: '#06b6d4' },
      { name: 'Talvez', value: 37, color: '#94a3b8' },
      { name: 'Não recomendaria', value: 9, color: '#ef4444' },
    ],
    hierarchyBreakdown: [
      {
        hierarchy: 'Coordenador',
        totalResponses: HIERARCHY_TOTALS['Coordenador'],
        distribution: [
          { name: 'Recomendo', value: 5, color: '#06b6d4' },
          { name: 'Talvez', value: 1, color: '#94a3b8' },
          { name: 'Não recomendaria', value: 1, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Jr',
        totalResponses: HIERARCHY_TOTALS['Gerente Jr'],
        distribution: [
          { name: 'Recomendo', value: 1, color: '#06b6d4' },
          { name: 'Talvez', value: 0, color: '#94a3b8' },
          { name: 'Não recomendaria', value: 1, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Gerente Sênior',
        totalResponses: HIERARCHY_TOTALS['Gerente Sênior'],
        distribution: [
          { name: 'Recomendo', value: 1, color: '#06b6d4' },
          { name: 'Talvez', value: 0, color: '#94a3b8' },
          { name: 'Não recomendaria', value: 1, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Analista Operação',
        totalResponses: HIERARCHY_TOTALS['Analista Operação'],
        distribution: [
          { name: 'Recomendo', value: 1, color: '#06b6d4' },
          { name: 'Talvez', value: 0, color: '#94a3b8' },
          { name: 'Não recomendaria', value: 0, color: '#ef4444' },
        ],
      },
      {
        hierarchy: 'Supervisor',
        totalResponses: HIERARCHY_TOTALS['Supervisor'],
        distribution: [
          { name: 'Recomendo', value: 123, color: '#06b6d4' },
          { name: 'Talvez', value: 35, color: '#94a3b8' },
          { name: 'Não recomendaria', value: 8, color: '#ef4444' },
        ],
      },
    ],
    insight: 'Resultado excelente de NPS potencial: 74,2% de promotores. A ferramenta tem alta aceitação final, apesar das fricções técnicas apontadas.'
  }
];

export const MOCK_COMMENTS = [
  "O sistema é muito bom para controlar as horas extras.",
  "Às vezes o locker desloga durante o atendimento, isso atrapalha muito.",
  "Gosto da facilidade de bater o ponto.",
  "Precisa melhorar a integração com o Genesys, as vezes não sincroniza.",
  "Não abre automaticamente em algumas PAs.",
  "Suporte demora muito para responder quando trava.",
  "As regras de pausa não ficaram claras no treinamento.",
  "Reduziu muito a quantidade de chamados indevidos.",
  "O sistema fecha sozinho.",
  "Erro na importação dos dados.",
  "Muito bom, recomendo.",
  "Travou duas vezes hoje.",
  "Deveria ter um contato local de TI mais ágil.",
  "Ajuda a ver quanto tempo falta para acabar a jornada.",
  "Problemas constantes de deslogue.",
  "A integração com WDE falha bastante.",
  "Ok.",
  "N/A.",
  ".",
  "Bom sistema.",
  "O buffer de entrada as vezes não contabiliza.",
];