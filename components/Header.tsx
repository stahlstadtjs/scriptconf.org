import { Logo } from '../components/Logo'
import { Button } from '../components/Button'

import '../styles/Header.css'

export const Header = () => {
  return <div className="masthead gradient photo">
    <div className="wrapper">
      <div className="meta">
        <Logo/>
        <div className="button-line">
          <Button url='#innsbruck'>29.3. Innsbruck</Button>
          <Button url='#wien'>1.4. Vienna</Button>
          <Button url='#linz'>2.4. Linz</Button>
        </div>
      </div>
    </div>
  </div>
}
