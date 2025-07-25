import Container from "@/components/layout/Container";
import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/sections/ContactSection";
import WorkshopCard from "@/components/sections/WorkshopCard";
import WorkshopsHeroSection from "@/components/sections/WorkshopsHeroSection";

const WorkshopsPage = () => {
  return (
    <Layout>
      <WorkshopsHeroSection />
      <section id="workshops">
        <Container className="mt-16">
          <WorkshopCard />
        </Container>
      </section>
      <ContactSection />
    </Layout>
  );
};

export default WorkshopsPage;
