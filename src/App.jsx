import { subDays, subHours, subMinutes } from 'date-fns'

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"

import styles from './App.module.css'
import './globals.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/gh-johnny.png',
            name: 'Johnny Romero',
            role: 'Software Developer',
        },
        content: [
            { type: 'paragraph', content: `What ${"'"}s up everybody 👋👋`, },
            { type: 'paragraph', content: 'This website is supposed to show case some of the most basic react concepts. Single responsability components, css modules and basic react hooks!', },
            { type: 'link', content: 'github/johnny.romero', },
        ],
        publishedAt: subMinutes(subHours(subDays(new Date(), 1), 2), 38)
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/FelipeHeilmann.png',
            name: 'Felipe Heilmann',
            role: 'Software Developer/Architect',
        },
        content: [
            { type: 'paragraph', content: `Hello my friends how are you todayy? 🚀🚀`, },
            { type: 'paragraph', content: "Yall ever heard about DDD? My boy Johnny over here built this plataform, isn't it awesome? Please go check this guy's hussle out 👇👇", },
            { type: 'link', content: 'github/johnny.romero', },
        ],
        publishedAt: new Date()
    },
]

function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {
                        posts.map(post => {
                            return (
                                <Post
                                    key={post.id}
                                    author={post.author}
                                    content={post.content}
                                    publishedAt={post.publishedAt}
                                />
                            )
                        })
                    }
                </main>
            </div>
        </div>
    )
}

export default App
