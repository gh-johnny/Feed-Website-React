import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='Ignite logo' />
        </header>
    )
}

export default Header
