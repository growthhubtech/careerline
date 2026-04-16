import type {
  QuestionsResponse,
  OnboardRequest,
  OnboardResponse,
  ReportResponse,
} from '../types/api';
import { config } from '../config';

const BASE_URL = config.apiUrl ?? '';

export class ApiError extends Error {
  readonly status: number;
  readonly detail: string;

  constructor(status: number, detail: string) {
    super(`API ${status}: ${detail}`);
    this.name = 'ApiError';
    this.status = status;
    this.detail = detail;
  }
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    let detail = response.statusText;
    try {
      const json = JSON.parse(body) as { detail?: string };
      if (json.detail) detail = json.detail;
    } catch {
      if (body) detail = body;
    }
    throw new ApiError(response.status, detail);
  }

  return response.json() as Promise<T>;
}

export const apiService = {
  getQuestions(): Promise<QuestionsResponse> {
    return apiFetch<QuestionsResponse>('/api/v1/onboard/questions');
  },

  submitOnboarding(data: OnboardRequest): Promise<OnboardResponse> {
    return apiFetch<OnboardResponse>('/api/v1/onboard/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  generateReport(recommendationId: string): Promise<Record<string, unknown>> {
    return apiFetch<Record<string, unknown>>(`/api/v1/reports/generate/${recommendationId}`, {
      method: 'POST',
    });
  },

  getReport(reportId: string): Promise<ReportResponse> {
    return apiFetch<ReportResponse>(`/api/v1/reports/${reportId}`);
  },
};
