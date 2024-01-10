import { Post } from "./Post"
import Header from "./components/Header"
import './globals.css'

function App() {
    return (
        <div>
            <Header />
            <Post
                author={"João Marcelo"}
                content={"lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda odio aliquam voluptate recusandae."}
            />

            <Post
                author={"João Marcelo"}
                content={"lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda odio aliquam voluptate recusandae."}
            />
        </div>
    )
}

export default App
