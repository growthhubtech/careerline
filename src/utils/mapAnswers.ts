import type { OnboardRequest } from '../types/api';

const AGE_MAP: Record<string, number> = {
  '18-24': 21,
  '25-34': 29,
  '35-44': 39,
  '45-54': 49,
  '55+': 60,
};

const TIME_MAP: Record<string, string> = {
  '<5': '<5',
  '5_10': '5-10',
  '10_20': '10-20',
  full_time: 'full-time',
};

const DIRECT_FIELDS = new Set(['personality', 'motive', 'industry']);
// These need transformation before mapping
const TRANSFORM_FIELDS = new Set(['age_group', 'time_per_week']);

/**
 * Maps the Record<questionId, answerId> collected from the question flow
 * into the OnboardRequestSchema expected by POST /api/v1/onboard/.
 *
 * - Direct fields (personality, motive, industry) are passed as-is.
 * - age_group is converted to a representative integer.
 * - time_per_week option IDs are normalised to the API's accepted strings.
 * - Everything else is concatenated into free_text.
 */
export function mapAnswers(answers: Record<string, string>): OnboardRequest {
  const freeTextParts: string[] = [];

  const directFreeText = answers['free_text'];
  if (directFreeText) {
    freeTextParts.push(directFreeText);
  }

  for (const [key, value] of Object.entries(answers)) {
    if (!DIRECT_FIELDS.has(key) && !TRANSFORM_FIELDS.has(key) && key !== 'free_text' && value) {
      freeTextParts.push(`${key}: ${value}`);
    }
  }

  return {
    personality: answers['personality'] ?? null,
    motive: answers['motive'] ?? null,
    industry: answers['industry'] ?? null,
    age: answers['age_group'] != null ? (AGE_MAP[answers['age_group']] ?? null) : null,
    time_per_week:
      answers['time_per_week'] != null
        ? (TIME_MAP[answers['time_per_week']] ?? answers['time_per_week'])
        : null,
    free_text: freeTextParts.length > 0 ? freeTextParts.join('; ') : null,
  };
}
