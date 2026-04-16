import ContactForm from '../ContactForm/ContactForm';
import { PageContainer } from '../PageContainer';
import { BodyText, SubheadingText, SmallText, MediumText } from '../Text';
import { MdOutlineEmail } from 'react-icons/md';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';
import { config } from '../../config';
import './ContactMain.scss';

export const ContactMain = () => {
  const cardItems = [
    {
      icon: <MdOutlineEmail size={20} />,
      label: 'Email',
      description: 'Our friendly team is here to help.',
      buttonText: config.contact.email,
    },
    {
      icon: <IoChatbubbleOutline size={20} />,
      label: 'Live chat',
      description: 'Our friendly team is here to help.',
      buttonText: 'Start new chat',
    },
    {
      icon: <HiOutlineLocationMarker size={20} />,
      label: 'Office',
      description: 'Visit us at our office(s) for further inquiries.',
      buttonText: config.contact.address,
    },
    {
      icon: <LuPhone size={20} />,
      label: 'Phone',
      description: 'Mon-Fri from 8am to 5pm.',
      buttonText: config.contact.phone,
    },
  ];

  return (
    <PageContainer className="contactMain-container pt-30">
      <div className="head-text-box pb-16">
        <SubheadingText as="h1" weight="semibold" className="main-text font-semibold mb-4">
          Contact us
        </SubheadingText>
        <BodyText variant="white" weight="light">
          We’d love to hear from you. Please fill out this form or send us an email.
        </BodyText>
      </div>
      <div className="contact-main d-flex w-full h-full gap-3">
        <div className="card-box d-flex flex-wrap items-start justify-start gap-9">
          {cardItems.map((card) => (
            <div className="contact-card" key={card.label}>
              <div className="card-icon mb-3">{card.icon}</div>
              <div className="text-box">
                <MediumText variant="white" weight="medium">
                  {card.label}
                </MediumText>
                <SmallText className="card-desc mb-4" weight="normal">
                  {card.description}
                </SmallText>
                <button className="text-left cursor-pointer">{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="form-main ">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
};
