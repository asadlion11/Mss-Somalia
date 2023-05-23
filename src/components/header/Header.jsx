import { Link } from 'react-router-dom'
import style from './header.module.scss'
const Header = () => {
  return (
   <header className={style.header} >
    <div className={style.menu}>
      <div className={style.logo}>
        <Link to='/'>MSS Somalia</Link> 
      </div>
     <div className={style.links}>
      <Link to='/allcompetitors'>All Competitors</Link>
     </div>
    </div>
   </header>
  )
}
export default Header