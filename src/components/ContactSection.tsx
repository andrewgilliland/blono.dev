import { FC } from 'react';
import ButtonLink from './ButtonLink';
import { HEADER_HEIGHT } from './Layout';

type ContactSectionProps = {
  contact: any;
};

const ContactSection: FC<ContactSectionProps> = ({ contact }) => {
  const { subHeading, heading, description } = contact;

  return (
    <section
      id="contact"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="max-w-5xl mx-auto my-24"
    >
      <div className="flex flex-col-reverse md:flex-row bg-white border">
        <div className="px-4 py-8 md:w-1/2 md:px-16 md:py-24">
          <p className="font-semibold text-base text-violet-600">
            {subHeading}
          </p>
          <h2 className="font-bold font-brand text-sky-500 text-4xl text-shadow mt-4">
            {heading}
          </h2>
          <div className="text-copy mt-8">{description}</div>
          <div className="flex gap-6 mt-8">
            <ButtonLink
              href="https://www.linkedin.com/company/bloomington-normal-developers"
              openInNewTab
            >
              Message Us
            </ButtonLink>
            <ButtonLink href="https://discord.gg/5XfdtzHrjH" openInNewTab>
              Join Discord
            </ButtonLink>
          </div>
        </div>
        <div className="flex justify-center items-center bg-purple-600 h-48 md:h-full md:w-1/2">
          <div className="h-32 w-32 bg-purple-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
