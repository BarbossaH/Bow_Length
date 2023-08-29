import { HeaderContact } from './HeaderContact';
import HeaderNav from './HeaderNav';
const Header = () => {
  return (
    <div className="fixed-top">
      <HeaderContact />
      <HeaderNav />
    </div>
  );
};
export default Header;
