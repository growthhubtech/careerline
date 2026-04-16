import { HeroText, MediumText } from '../Text';
import happyGirl from '../../assests/happy-girl.png';
import styles from './Target.module.scss';
import { PageContainer } from '../PageContainer';

const items = [
  'Students and Graduates exploring career options',
  'Civil servants seeking side income or late career - pivots.',
  'Mid - career professionals transitioning into tech.',
  'Business owners exploring digital skills to grow ventures',
  'Job seekers looking for skills in demand locally and globally.',
];

export const Target = () => (
  <PageContainer>
    <div className="text-center py-13">
      <HeroText variant="black" weight="bold">
        Targets
      </HeroText>
      <MediumText weight="medium">
        Built for individuals seeking clear, data-driven guidance into tech or business careers.
      </MediumText>
    </div>
    <div className={styles.grid}>
      {items.map((item) => (
        <div className={styles.target} key={item}>
          <img src={happyGirl} alt="Happy girl" className={styles.image} />
          <MediumText className="text-center" variant="secondary">
            {item}
          </MediumText>
        </div>
      ))}
    </div>
  </PageContainer>
);
