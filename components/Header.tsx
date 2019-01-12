import { Logo } from '../components/Logo';

import '../styles/Header.css';

export const Header = () => {
  return <div className="masthead gradient photo">
    <div className="wrapper">
      <div className="meta">
          <Logo/>
      </div>
    </div>
  </div>
}
