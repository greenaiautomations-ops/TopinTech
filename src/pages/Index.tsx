import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsSection } from "@/components/home/StatsSection";
import { ToolsSlider } from "@/components/home/ToolsSlider";
import { AuditSection } from "@/components/home/AuditSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Green AI - AI Automation Agency | Marburg, Germany</title>
        <meta
          name="description"
          content="AI assistants, voice agents, and intelligent automation that save time, cut costs, and scale your business. Based in Marburg, Germany."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <ToolsSlider />
        <AuditSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
