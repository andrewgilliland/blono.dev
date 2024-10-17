import { FC } from 'react';
import ButtonLink from './ButtonLink';
import { HEADER_HEIGHT } from './Layout';
import { ContactSectionType } from '../../content';
import Image from 'next/image';

type ContactSectionProps = {
  contact: ContactSectionType;
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
          <p className="font-semibold text-base text-violet-600 text-shadow-sm">
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
        <div className="flex justify-center items-center bg-purple-600 p-16 md:w-1/2">
          <div className="relative">
            <div className="absolute border border-pink-300 w-full h-full translate-x-1 translate-y-1" />
            <Image
              className="relative object-cover max-w-40 md:max-w-96"
              src="/revenge-of-the-nerds-1.avif"
              width={350}
              height={350}
              alt="Nerds"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
