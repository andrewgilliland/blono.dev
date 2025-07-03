import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import WorkshopCard from '@/components/sections/WorkshopCard';
import WorkshopsHeroSection from '@/components/sections/WorkshopsHeroSection';

const WorkshopsPage = () => {
  return (
    <>
      <WorkshopsHeroSection />
      <section id="workshops">
        <Container className="mt-24">
          <WorkshopCard />
        </Container>
      </section>
      <ContactSection />
    </>
  );
};

export default WorkshopsPage;
