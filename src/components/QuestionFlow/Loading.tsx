import { PageTitleText } from '../Text';
import './Loading.scss';
import { Button } from '../Button';

export const Loading = () => (
  <div className="d-flex items-center justify-center loading">
    <div className="d-flex flex-column items-center gap-8 loading__container">
      <div className="loading__spinner-wrapper">
        <div className="loading__spinner" />
      </div>

      <PageTitleText as="p" className="text-center text-primary">
        Please wait while AI analyzes your responses and generates your results
      </PageTitleText>

      <div className="w-33">
        <Button disabled>View Results →</Button>
      </div>
    </div>
  </div>
);
