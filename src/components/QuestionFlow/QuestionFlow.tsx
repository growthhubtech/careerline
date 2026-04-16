import { useState } from 'react';
import { Button, PageTitleText, BodyText, HeadingText, MediumText } from '../index';
import './QuestionFlow.scss';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What's your Age Group?",
    options: ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 and Above'],
  },
  {
    id: 2,
    question: 'What is your current employment status?',
    options: ['Employed', 'Unemployed', 'Self-employed', 'Student', 'Retired'],
  },
  {
    id: 3,
    question: 'How many years of work experience do you have?',
    options: ['0-2 years', '2-5 years', '5-10 years', '10-15 years', '15+ years'],
  },
  {
    id: 4,
    question: 'What is your highest level of education?',
    options: ['High School', 'Bachelor', 'Master', 'PhD', 'Other'],
  },
  {
    id: 5,
    question: 'Which industry interests you the most?',
    options: ['Technology', 'Finance', 'Healthcare', 'Education', 'Other'],
  },
  {
    id: 6,
    question: 'What is your primary career goal?',
    options: [
      'Advancement',
      'Career Change',
      'Skill Development',
      'Entrepreneurship',
      'Work-Life Balance',
    ],
  },
  {
    id: 7,
    question: 'How comfortable are you with learning new technologies?',
    options: ['Very Comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very Uncomfortable'],
  },
  {
    id: 8,
    question: 'What is your preferred learning style?',
    options: [
      'Online Courses',
      'In-person Training',
      'Self-study',
      'Mentorship',
      'Hands-on Projects',
    ],
  },
  {
    id: 9,
    question: 'How much time can you dedicate to learning per week?',
    options: ['Less than 5 hours', '5-10 hours', '10-15 hours', '15-20 hours', '20+ hours'],
  },
  {
    id: 10,
    question: 'What is your current salary range?',
    options: ['Below $30k', '$30k-$50k', '$50k-$75k', '$75k-$100k', '$100k+'],
  },
  {
    id: 11,
    question: 'Are you interested in leadership roles?',
    options: ['Very Interested', 'Interested', 'Neutral', 'Not Interested', 'Undecided'],
  },
  {
    id: 12,
    question: 'What soft skills do you want to improve?',
    options: ['Communication', 'Leadership', 'Problem-solving', 'Time Management', 'Teamwork'],
  },
  {
    id: 13,
    question: 'How do you prefer to work?',
    options: ['Remote', 'In-office', 'Hybrid', 'Flexible', 'No Preference'],
  },
  {
    id: 14,
    question: 'What is your biggest career challenge?',
    options: ['Skill Gap', 'Experience Gap', 'Networking', 'Confidence', 'Work-Life Balance'],
  },
  {
    id: 15,
    question: 'Are you open to relocating for a job?',
    options: ['Yes', 'No', 'Maybe', 'Only Domestically', 'Only Internationally'],
  },
  {
    id: 16,
    question: 'What motivates you the most in your career?',
    options: ['Money', 'Impact', 'Growth', 'Stability', 'Passion'],
  },
  {
    id: 17,
    question: 'How important is company culture to you?',
    options: ['Very Important', 'Important', 'Neutral', 'Not Important', 'Undecided'],
  },
  {
    id: 18,
    question: 'What is your risk tolerance for career changes?',
    options: ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
  },
  {
    id: 19,
    question: 'How do you stay updated with industry trends?',
    options: ['Online Communities', 'Conferences', 'Podcasts', 'Books', 'Mentors'],
  },
  {
    id: 20,
    question: 'What is your long-term career vision?',
    options: ['Executive Role', 'Specialist Expert', 'Entrepreneur', 'Consultant', 'Undecided'],
  },
];

interface QuestionFlowProps {
  onComplete: (answers: Record<number, string>) => void;
}

export const QuestionFlow = ({ onComplete }: QuestionFlowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (!selectedOption) return;

    const updated = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(updated);

    if (currentIndex < totalQuestions - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(updated[QUESTIONS[nextIndex].id] || null);
    } else {
      onComplete(updated);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedOption(answers[QUESTIONS[prevIndex].id] || null);
  };

  return (
    <div className="questionWrapper">
      <div className="questionCard">
        <div className="d-flex flex-column gap-4">
          <button className="backLink" onClick={() => window.history.back()}>
            <BodyText>← Back To Homepage</BodyText>
          </button>

          <PageTitleText weight="bold" className="text-secondary">
            Take the CareerLine AI Assessment Test
          </PageTitleText>

          <MediumText>Answer a few simple questions to discover your best career path.</MediumText>
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-between items-center">
            <BodyText variant="secondary" weight="medium">
              Question {currentIndex + 1} of {totalQuestions}
            </BodyText>
            <BodyText variant="secondary" weight="medium">
              {Math.round(progressPercentage)}%
            </BodyText>
          </div>

          <div className="progressBar">
            <div className="progressFill" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>

        <div className="d-flex flex-column gap-6">
          <HeadingText weight="semibold" className="text-primary">
            {currentQuestion.question}
          </HeadingText>

          <div className="d-flex flex-column gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`optionItem ${selectedOption === option ? 'optionSelected' : ''}`}
                onClick={() => setSelectedOption(option)}
              >
                <div
                  className={`optionRadio ${selectedOption === option ? 'radioSelected' : ''}`}
                />
                <BodyText>{option}</BodyText>
              </button>
            ))}
          </div>
        </div>

        <div className="d-flex justify-between gap-4 mt-4">
          <div className="w-33">
            <Button
              variant="transparent"
              border="solid"
              onClick={handleBack}
              disabled={currentIndex === 0}
            >
              ← Back
            </Button>
          </div>

          <div className="w-33">
            <Button variant="primary" onClick={handleNext} disabled={!selectedOption}>
              {currentIndex === totalQuestions - 1 ? 'Submit' : 'Next'} →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
