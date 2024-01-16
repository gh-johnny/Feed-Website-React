import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src='https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Image that represents user banner'
                className={styles.cover}
            />

            <div className={styles.profile}>
                <img
                    src='https://avatars.githubusercontent.com/u/109112878?v=4'
                    alt='Image that represents user picture'
                    className={styles.avatar}
                />
                <strong>John Doe</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar
