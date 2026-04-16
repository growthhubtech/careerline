import { PageTitleText, BodyText, HeadingText, SmallText, Button } from '../index';
import './Recommendation.scss';

interface RecommendationCourse {
  title: string;
  description: string;
  matchPercentage: number;
}

const RECOMMENDED_COURSES: RecommendationCourse[] = [
  {
    title: 'Data Analysis',
    description:
      "Your analytical mindset and attention to detail make you an excellent fit for data analysis. You'll enjoy transforming raw data into actionable insights.",
    matchPercentage: 90,
  },
  {
    title: 'Data Analysis',
    description:
      "Your analytical mindset and attention to detail make you an excellent fit for data analysis. You'll enjoy transforming raw data into actionable insights.",
    matchPercentage: 82,
  },
  {
    title: 'Data Analysis',
    description:
      "Your analytical mindset and attention to detail make you an excellent fit for data analysis. You'll enjoy transforming raw data into actionable insights.",
    matchPercentage: 64,
  },
];

export const Recommendation = () => (
  <div className="recommendationWrapper">
    <div className="recommendationHeader">
      <div className="recommendationBadge">
        <svg className="badgeIcon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.2" />
          <circle cx="50" cy="50" r="35" fill="currentColor" />
          <path
            d="M35 50L45 60L65 40"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <PageTitleText weight="bold" className="titleText">
        You have successfully completed your Test
      </PageTitleText>

      <BodyText className="subtitleText">
        Here are your top 3 recommendations based on your profile
      </BodyText>
    </div>

    <div className="coursesList">
      {RECOMMENDED_COURSES.map((course, index) => (
        <div key={index} className="courseCard">
          <div className="courseHeader">
            <HeadingText weight="semibold" className="courseTitle">
              {course.title}
            </HeadingText>
            <SmallText weight="semibold" className="coursePercentage">
              {course.matchPercentage}%
            </SmallText>
          </div>

          <BodyText className="courseDescription">{course.description}</BodyText>

          <div className="progressBar">
            <div className="progressFill" style={{ width: `${course.matchPercentage}%` }} />
          </div>
        </div>
      ))}
    </div>

    <div className="actionBar">
      <Button variant="secondary" className="pdfButton">
        Download PDF Report
      </Button>
      <Button variant="primary" className="learnButton">
        Start Learning
      </Button>
    </div>
  </div>
);
