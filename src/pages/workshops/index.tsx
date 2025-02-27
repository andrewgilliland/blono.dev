import Layout from "@/components/Layout";
import { content } from "../../../content";
import ContactSection from "@/components/ContactSection";

const WorkShopsPage = () => {
  return (
    <Layout content={content}>
      <section>
        <h1 className="text-green-400 font-semibold">Workshops</h1>
        <p>Get some hands on programming knowledge</p>
      </section>
      <ContactSection />
    </Layout>
  );
};

export default WorkShopsPage;
