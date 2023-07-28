import style from './Header.module.css';
import logo from '../../img/logotip.png';
import face from '../../img/face.png';
import {MdKeyboardArrowDown} from 'react-icons/md';

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <img className={style.logo} src={logo} alt='Logo' />
                Aoki's shop
                <button className={style.btn}>
                    <MdKeyboardArrowDown size='1.5em' />
                </button>
                <button className={style.button}>Basic</button>
            </div>
            <nav className={`${style.nav} ${style.right}`}>
                <a className={style.link} href='/'>Notice</a>
                <div className={style.line}>|</div> 
                <a className={style.link} href='/'>Help center</a>
            </nav>
            <div>
                <img className={style.face} src={face} alt='Face' />
                <button className={style.btn}>
                    <MdKeyboardArrowDown size='1.5em' />
                </button>
            </div>
        </header>
    );
}