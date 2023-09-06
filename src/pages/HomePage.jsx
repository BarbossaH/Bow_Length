import BackToTop from '../components/BackToTop';
import Banner from '../components/Banner/Banner';
import Layout from '../components/layout/Layout';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import WebCarousel from '../components/WebCarousel/WebCarousel';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  console.log(offset);
  return (
    <Layout title={'HomePage'}>
      <Banner />
      <main className="container">
        <ProductInfo />
        <WebCarousel />
        {offset > 50 && <BackToTop />}
      </main>
    </Layout>
  );
};
export default HomePage;
