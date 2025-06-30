import { FC } from "react";
import Image from "next/image";
import { HEADER_HEIGHT } from "../layout/Layout";
import ButtonLink from "../ui/ButtonLink";
import Container from "../layout/Container";

type ContactSectionProps = {};

const ContactSection: FC<ContactSectionProps> = () => {
  return (
    <section id="contact" style={{ paddingTop: HEADER_HEIGHT + 24 }}>
      <Container className="my-24">
        <div className="flex flex-col-reverse md:flex-row bg-darker border border-light border-opacity-75 rounded-[10px]">
          <div className="px-4 py-8 md:w-1/2 md:px-16 md:py-24">
            <p className="font-semibold text-base text-purp-light text-shadow-sm">
              Get in touch!
            </p>
            <h2 className="font-bold text-green-500 text-4xl text-shadow mt-4">
              Contact Us
            </h2>
            <div className="text-copy mt-8">
              We&apos;d love to hear from you! Send us a message on our LinkedIn
              page or join the conversation on our Discord!
            </div>
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
          <div className="flex justify-center items-center bg-purp rounded-t-[10px] md:rounded-tl-none md:rounded-r-[10px] p-16 md:w-1/2">
            <div className="relative">
              <div className="absolute bg-purp-light rounded-[10px] w-full h-full translate-x-1 translate-y-1" />
              <Image
                className="relative object-cover rounded-[10px] max-w-40 md:max-w-96"
                src="/revenge-of-the-nerds-1.avif"
                width={350}
                height={350}
                alt="Nerds"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
