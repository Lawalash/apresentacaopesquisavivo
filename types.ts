export interface SurveyQuestion {
  id: string;
  title: string;
  data: { name: string; value: number; color?: string }[];
  insight: string;
  chartType: 'bar' | 'pie';
}

export interface KPI {
  label: string;
  value: string;
  subtext: string;
  trend: 'positive' | 'neutral' | 'negative';
}

export interface OpenComment {
  id: number;
  text: string;
}

export interface TopicAnalysis {
  topic: string;
  count: number;
  percentage: number;
  examples: string[];
}
