import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ROIComparison from '@/components/sections/ROIComparison';
import CompanyVision from '@/components/sections/CompanyVision';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <ROIComparison />
      <CompanyVision />
      <Footer />
    </main>
  );
};

export default Index;
