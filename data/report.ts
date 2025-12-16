import type { SurveyQuestion, KPI, HierarchyBreakdown } from '../types';

export const TOTAL_RESPONSES = 178;

export const HIERARCHY_TOTALS = {
  'Coordenador': 7,
  'Gerente Jr': 2,
  'Gerente Sênior': 2,
  'Analista Operação': 1,
  'Supervisor': 166,
} as const;

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

type OverallSpecItem = { name: string; from: string[]; color?: string };

const sumFromBreakdown = (breakdown: HierarchyBreakdown[], names: string[]) => {
  const set = new Set(names);
  return breakdown.reduce((acc, h) => {
    const local = h.distribution.reduce((a, d) => a + (set.has(d.name) ? d.value : 0), 0);
    return acc + local;
  }, 0);
};

const buildOverallData = (breakdown: HierarchyBreakdown[], spec: OverallSpecItem[]) => {
  return spec.map(s => ({
    name: s.name,
    value: sumFromBreakdown(breakdown, s.from),
    color: s.color,
  }));
};

const OVERALL_SPECS: Record<string, OverallSpecItem[]> = {
  Q1: [
    { name: 'Satisfeito / Muito satisfeito', from: ['Muito satisfeito', 'Satisfeito'], color: '#06b6d4' },
    { name: 'Neutro', from: ['Neutro'], color: '#94a3b8' },
    { name: 'Insatisfeito / Muito insatisfeito', from: ['Insatisfeito', 'Muito insatisfeito'], color: '#ef4444' },
  ],
  Q2: [
    { name: 'Satisfeito / Muito satisfeito', from: ['Muito satisfeito', 'Satisfeito'], color: '#06b6d4' },
    { name: 'Neutro', from: ['Neutro'], color: '#94a3b8' },
    { name: 'Insatisfeito / Muito insatisfeito', from: ['Insatisfeito', 'Muito insatisfeito'], color: '#ef4444' },
  ],
  Q3: [
    { name: 'Contribui bastante / essencial', from: ['Contribui bastante / essencial'], color: '#06b6d4' },
    { name: 'Contribui moderadamente', from: ['Contribui moderadamente'], color: '#94a3b8' },
    { name: 'Pouco / Não contribui', from: ['Pouco / Não contribui'], color: '#ef4444' },
  ],
  Q4: [
    { name: 'Satisfeito / Muito satisfeito', from: ['Satisfeito / Muito satisfeito'], color: '#06b6d4' },
    { name: 'Neutro', from: ['Neutro'], color: '#94a3b8' },
    { name: 'Insatisfeito / Muito insatisfeito', from: ['Insatisfeito / Muito insatisfeito'], color: '#ef4444' },
  ],
  Q5: [
    { name: 'Claro / Muito claro', from: ['Claro / Muito claro'], color: '#06b6d4' },
    { name: 'Neutro', from: ['Neutro'], color: '#94a3b8' },
    { name: 'Pouco claro / Confuso', from: ['Pouco claro / Confuso'], color: '#ef4444' },
  ],
  Q6: [
    { name: 'Recomendo', from: ['Recomendo'], color: '#06b6d4' },
    { name: 'Talvez', from: ['Talvez'], color: '#94a3b8' },
    { name: 'Não recomendaria', from: ['Não recomendaria'], color: '#ef4444' },
  ],
};

const QUESTIONS_SOURCE: SurveyQuestion[] = [
  {
    id: 'Q1',
    title: 'Q1 — Satisfação com o projeto de Governança Locker',
    chartType: 'bar',
    positiveOptions: ['Muito satisfeito', 'Satisfeito'],
    data: [], // será derivado do breakdown
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
    insight: 'Embora a maioria (51,7%) esteja satisfeita, há um bloco neutro significativo (32,6%) que representa uma oportunidade de conversão através de melhorias visíveis.',
  },

  {
    id: 'Q2',
    title: 'Q2 — Estabilidade / funcionamento do Locker',
    chartType: 'bar',
    positiveOptions: ['Muito satisfeito', 'Satisfeito'],
    data: [],
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
    insight: 'A estabilidade é bem avaliada pela maioria, mas 14,6% de insatisfação somada aos neutros indica riscos operacionais que precisam ser mitigados tecnicamente.',
  },

  {
    id: 'Q3',
    title: 'Q3 — Contribuição para controle de jornada / HE',
    chartType: 'bar',
    positiveOptions: ['Contribui bastante / essencial'],
    data: [],
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
    insight: 'Este é o ponto mais forte da ferramenta: 60% dos usuários percebem alto valor no controle de jornada, validando o propósito central do projeto.',
  },

  {
    id: 'Q4',
    title: 'Q4 — Comunicação, suporte e acompanhamento',
    chartType: 'bar',
    positiveOptions: ['Satisfeito / Muito satisfeito'],
    data: [],
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
    insight: 'A alta taxa de neutros (40,5%) sugere que o suporte funciona, mas falta proatividade ou agilidade percebida (SLAs). Comunicação precisa ser mais assertiva.',
  },

  {
    id: 'Q5',
    title: 'Q5 — Clareza das regras e combinados',
    chartType: 'bar',
    positiveOptions: ['Claro / Muito claro'],
    data: [],
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
    insight: 'As regras são claras para a maioria, mas novamente o grupo neutro (40,5%) indica que dúvidas sobre "buffer" e regras de pausa ainda persistem.',
  },

  {
    id: 'Q6',
    title: 'Q6 — Recomendaria manter/expandir o modelo?',
    chartType: 'pie',
    positiveOptions: ['Recomendo'],
    data: [],
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
    insight: 'Resultado excelente de NPS potencial: 74,2% de promotores. A ferramenta tem alta aceitação final, apesar das fricções técnicas apontadas.',
  },
];

// Export final: "data" sempre coerente com o breakdown
export const QUESTIONS: SurveyQuestion[] = QUESTIONS_SOURCE.map((q) => {
  const spec = q.hierarchyBreakdown ? OVERALL_SPECS[q.id] : undefined;
  if (!q.hierarchyBreakdown || !spec) return q;
  return { ...q, data: buildOverallData(q.hierarchyBreakdown, spec) };
});

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
