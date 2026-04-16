export interface ServerQuestionOption {
  id: string;
  label: string;
}

export interface ServerQuestion {
  id: string;
  text: string;
  type: 'choice' | 'text' | 'number';
  options?: ServerQuestionOption[];
}

export interface QuestionsResponse {
  total: number;
  questions: ServerQuestion[];
}

export interface OnboardRequest {
  user_id?: string | null;
  personality?: string | null;
  background?: string | null;
  motive?: string | null;
  age?: number | null;
  industry?: string | null;
  time_per_week?: string | null;
  free_text?: string | null;
}

export interface RecommendationItem {
  career_id: string;
  career_name?: string | null;
  fitness_pct: number;
  reasons: string[];
  next_steps: string[];
}

export interface OnboardResponse {
  recommendation_id: string;
  recommendations: RecommendationItem[];
  generated_at: string;
}

export interface ReportResponse {
  report_id: string;
  report_url: string | null;
  status: string;
}
