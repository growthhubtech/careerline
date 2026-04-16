import { BodyText, SmallText } from '../Text';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../assests/careerLine.svg';
import { PageContainer } from '../PageContainer';

const careerlineLinks = [
  {
    label: 'Overview',
    href: '#',
  },
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Careers',
    href: '#',
  },
  {
    label: 'Help',
    href: '#',
  },
  {
    label: 'Privacy',
    href: '#',
  },
];

const footerLinks = [
  {
    label: 'Terms',
    href: '#',
  },
  {
    label: 'Privacy',
    href: '#',
  },
  {
    label: 'Cookies',
    href: '#',
  },
];

export const Footer = () => (
  <PageContainer className="footer-container text-white d-flex flex-column justify-center items-center gap-4 text-center">
    <div className="footer-brand d-flex gap-2 items-center">
      <img src={logo} alt="CareerLine logo" />
      <BodyText className="text-xl font-semibold text-white">CareerLine AI</BodyText>
    </div>

    <div className="footer-links d-flex gap-4 text-sm flex-wrap justify-center">
      {careerlineLinks.map(({ label, href }) => (
        <Link to={href} key={label} className="text-decoration-none">
          <SmallText className="text-white">{label}</SmallText>
        </Link>
      ))}
    </div>

    <hr className="hr-divider" />

    <div className="footer-bottom w-full mt-4 px-6">
      <BodyText className="text-sm text-white">
        © {new Date().getFullYear()} CareerLine. All rights reserved.
      </BodyText>
      <div className="footer-legal d-flex gap-4">
        {footerLinks.map(({ label, href }) => (
          <Link to={href} key={label} className="text-decoration-none">
            <SmallText className="text-white">{label}</SmallText>
          </Link>
        ))}
      </div>
    </div>
  </PageContainer>
);

export default Footer;
