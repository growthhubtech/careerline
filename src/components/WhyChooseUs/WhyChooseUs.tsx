import { BodyText, HeroText, MediumText, SubheadingText } from '../Text';
import { PageContainer } from '../PageContainer';
import styles from './WhyChooseUs.module.scss';
import { GrSteps } from 'react-icons/gr';
import { MdOutlineRecommend, MdOutlineExplore } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';

const ICON_SIZE = 28;

export const WhyChooseUs = () => {
  const items = [
    {
      icon: <GrSteps size={ICON_SIZE} />,
      label: 'Clear Career Steps',
      description:
        'We provide a step by step guide for your career with our carefully selected courses.',
    },
    {
      icon: <MdOutlineRecommend size={ICON_SIZE} />,
      label: 'Personalized Recommendation',
      description: 'Get recommendations tailored specifically for your skills and interest',
    },
    {
      icon: <MdOutlineExplore size={ICON_SIZE} />,
      label: 'Explore Your Path',
      description:
        'Start your learning journey with any of our recommended tech courses complete with learning resources and career insights.',
    },
    {
      icon: <AiOutlineGlobal size={ICON_SIZE} />,
      label: 'Global Opportunity',
      description: 'We focus on skills with strong demands both locally and internationally.',
    },
  ];

  return (
    <PageContainer className="py-24">
      <div className="text-center pb-16">
        <HeroText variant="black" weight="bold">
          Why Choose Us
        </HeroText>
        <MediumText weight="medium">
          Discover the reasons why CareerLine AI is preferred by people around the globe
        </MediumText>
      </div>
      <div className={styles.grid}>
        {items.map(({ icon, label, description }) => (
          <div key={label} className={styles.card}>
            <div className={styles.iconWrapper}>{icon}</div>
            <SubheadingText weight="medium" variant="secondary" className={styles.cardTitle}>
              {label}
            </SubheadingText>
            <BodyText className={styles.cardBody}>{description}</BodyText>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
