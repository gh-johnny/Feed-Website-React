import { Post } from "./Post"
import Header from "./components/Header"

import './globals.css'
import styles from './App.module.css'
import Sidebar from "./components/Sidebar"

function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author={"João Marcelo"}
                        content={"lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda odio aliquam voluptate recusandae."}
                    />

                    <Post
                        author={"João Marcelo"}
                        content={"lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda odio aliquam voluptate recusandae."}
                    />
                </main>
            </div>
        </div>
    )
}

export default App
