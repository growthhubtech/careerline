import { useState } from 'react';
import { QuestionFlow, Loading, Recommendation } from '../components';

type QuestionPageState = 'question' | 'loading' | 'recommendation';

export const Question = () => {
  const [state, setState] = useState<QuestionPageState>('question');

  const handleQuestionComplete = () => {
    setState('loading');
    setTimeout(() => {
      setState('recommendation');
    }, 4000);
  };

  return (
    <>
      {state === 'question' && <QuestionFlow onComplete={handleQuestionComplete} />}
      {state === 'loading' && <Loading />}
      {state === 'recommendation' && <Recommendation />}
    </>
  );
};
