import Footer from './Footer';
import Header from './Header/Header';
import { Helmet } from 'react-helmet';
const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div className="container-fluid headerTop">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
