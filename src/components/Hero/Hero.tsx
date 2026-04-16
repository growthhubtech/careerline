import { Button } from '../Button';
import { DisplayText, MediumText } from '../Text';
import heroImg from '../../assests/hero-img.svg';
import group1 from '../../assests/Group1.svg';
import './Hero.scss';
import '../../styles/utilities.scss';
import { PageContainer } from '../PageContainer';
import { useNavigate } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero w-full">
      <PageContainer className="hero-main">
        <div className="text-box h-full">
          <DisplayText weight="bold" variant="secondary">
            Find Your Perfect Career Path in
            <span className="red-span-text ml-3">Tech and Business</span>
          </DisplayText>

          <MediumText weight="medium">
            Take our simple and quick test to discover the best tech or business course just for you
          </MediumText>
          <div className="btn-box mt-15 gap-6 w-full">
            <Button variant="primary" onClick={() => navigate('/question')}>
              Take Free Test
            </Button>
            <Button variant="transparent" border="dotted">
              <FaSquareWhatsapp size={24} color="#2def66" /> Take test on WhatsApp
            </Button>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="group staff picture" className=".h-full w-full" />
        </div>
        <img src={group1} alt="group background image" className="line-decor" />
      </PageContainer>
    </div>
  );
};
