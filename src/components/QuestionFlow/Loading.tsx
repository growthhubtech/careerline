import { PageTitleText } from '../Text';
import './Loading.scss';
import { Button } from '../Button';

export const Loading = () => (
  <div className="d-flex items-center justify-center loading">
    <div className="d-flex flex-column items-center gap-12 loading__container">
      <PageTitleText className="text-center text-primary">
        Please wait while AI analyzes your responses and generates your Results
      </PageTitleText>
      <div className="d-flex justify-center items-center">
        <div className="loading__spinner" />
      </div>
      <div className="w-33">
        <Button disabled>View Results →</Button>
      </div>
    </div>
  </div>
);
