import { HiChartBar } from 'react-icons/hi';
import { MdOutlineRecommend } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BodyText, HeroText, MediumText, SubheadingText } from '../Text';
import styles from './HowItWorks.module.scss';
import cn from 'classnames';
import { PageContainer } from '../PageContainer';

const ICON_SIZE = 32;

export const HowItWorks = () => {
  const howItWorks = [
    {
      icon: <HiChartBar size={ICON_SIZE} />,
      step: '01',
      label: 'Take a test',
      description: 'Answer a few questions about your basic skills and interests',
    },
    {
      icon: <MdOutlineRecommend size={ICON_SIZE} />,
      step: '02',
      label: 'Get your recommendation',
      description: 'Top 3 recommended career paths with a personalized fit score',
    },
    {
      icon: <AiOutlineGlobal size={ICON_SIZE} />,
      step: '03',
      label: 'Start learning',
      description: 'Begin your journey with carefully structured courses and resources',
    },
  ];

  return (
    <div>
      <div className="text-center py-13">
        <HeroText variant="black" weight="bold">
          How It Works
        </HeroText>
        <MediumText weight="medium">
          CareerLine AI, built specifically for your tech transition journey
        </MediumText>
      </div>
      <PageContainer className={cn(styles.howItWorkContainer, 'd-flex gap-6 py-12 secondary-bg')}>
        {howItWorks.map(({ icon, step, label, description }) => (
          <div key={step} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>{icon}</div>
              <span className={styles.stepBadge}>{step}</span>
            </div>
            <SubheadingText as="h3" weight="semibold" className={styles.cardLabel}>
              {label}
            </SubheadingText>
            <BodyText className={styles.cardDesc} weight="light">
              {description}
            </BodyText>
          </div>
        ))}
      </PageContainer>
    </div>
  );
};
