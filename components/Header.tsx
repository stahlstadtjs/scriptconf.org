import { FC } from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import '../styles/Header.css';


export const Header:FC<{}> = ({ children }) => {
  const content = children || <div className="button-line">
    <Button url='#innsbruck'>29.3. Innsbruck</Button>
    <Button url='#vienna'>1.4. Vienna</Button>
    <Button url='#linz'>2.4. Linz</Button>
  </div>

  return <div className="masthead gradient photo">
    <div className="wrapper">
      <div className="meta">
        <Logo/>
        { content }
      </div>
    </div>
  </div>
}
