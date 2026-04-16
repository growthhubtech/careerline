import { HeroText, MediumText, SubheadingText } from '../Text';
import girl from '../../assests/smiling-girl.png';
import styles from './AboutUs.module.scss';
import { PageContainer } from '../PageContainer';

export const AboutUs = () => (
  <PageContainer>
    <div className="text-center py-13">
      <HeroText variant="black" weight="bold">
        About US
      </HeroText>
      <MediumText weight="medium">Discover your tech or business path in 3 simple ways</MediumText>
    </div>
    <div className="py-12">
      <div className={styles.content}>
        <div className="d-flex flex-column gap-6">
          <SubheadingText weight="medium">Who Are We?</SubheadingText>

          <MediumText>
            CareerLine AI is specifically tailored and designed to empower you to find your perfect
            place in the Tech industry.
          </MediumText>
          <MediumText>
            We provide personalized recommendation to guide you towards a fulfilling career both in
            Tech and Business.
          </MediumText>
          <MediumText>
            Our goal is to provide a simple, intelligent recommendation system that guides
            individuals toward the top 3 tech or business career paths that best align with their
            personality, educational background, motive, age, and occupation.
          </MediumText>
        </div>
        <img src={girl} alt="smiling girl" className={styles.image} />
      </div>
    </div>
  </PageContainer>
);
