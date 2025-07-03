import Image from 'next/image';
import ButtonLink from '../ui/ButtonLink';
import Container from '../layout/Container';
import { SECTION_TOP_PADDING_OFFSET } from '@/lib/constants';

const ContactSection = () => {
  return (
    <section id="contact" style={{ paddingTop: SECTION_TOP_PADDING_OFFSET }}>
      <Container className="my-24">
        <div className="flex flex-col-reverse rounded-[10px] border border-light border-opacity-75 bg-darker md:flex-row">
          <div className="px-4 py-8 md:w-1/2 md:px-16 md:py-24">
            <p className="text-shadow-sm text-base font-semibold text-purp-light">
              Get in touch!
            </p>
            <h2 className="text-shadow mt-4 text-4xl font-bold text-green-500">
              Contact Us
            </h2>
            <div className="text-copy mt-8">
              We&apos;d love to hear from you! Send us a message on our LinkedIn
              page or join the conversation on our Discord!
            </div>
            <div className="mt-8 flex gap-6">
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
          <div className="flex items-center justify-center rounded-t-[10px] bg-purp p-16 md:w-1/2 md:rounded-r-[10px] md:rounded-tl-none">
            <div className="relative">
              <div className="absolute h-full w-full translate-x-1 translate-y-1 rounded-[10px] bg-purp-light" />
              <Image
                className="relative max-w-40 rounded-[10px] object-cover md:max-w-96"
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
