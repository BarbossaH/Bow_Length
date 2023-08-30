import Banner from '../components/Banner/Banner';
import Layout from '../components/layout/Layout';
import WebCarousel from '../components/WebCarousel/WebCarousel';

const HomePage = () => {
  return (
    <Layout title={'HomePage'}>
      <Banner />
      <WebCarousel />
    </Layout>
  );
};
export default HomePage;
