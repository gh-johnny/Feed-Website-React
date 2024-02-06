import Comment from "./Comment"
import styles from "./Post.module.css"

function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        src="https://github.com/gh-johnny.png"
                        alt="User chosen picture"
                        className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>Johnny Romero</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    dateTime="2024-16-01 08:13:02"
                    title="January 16th at 08:13h"
                >
                    Published 1h ago
                </time>
            </header>

            <div className={styles.content}>
                <p>What{"'"}s up everybody 👋👋</p>
                <p>This website is supposed to show case some of the most basic react concepts. Single responsability components, css modules and basic react hooks!</p>
                <p>
                    <i className={styles.emoji}>👉</i> <a
                        href="https://github.com/gh-johnny"
                        target="_blank"
                        rel="noreferrer"
                    >
                        johnny.romero/github
                    </a>
                </p>
                <p>
                    <i className={styles.emoji}>👉</i><a
                        href="https://www.linkedin.com/in/jo%C3%A3o-romero-20916b257/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        johnny.romero/linked-in
                    </a>
                </p>
                <p className={styles.hashtags}>
                    <a>#webdev</a>
                    <a>#react</a>
                    <a>#typescript</a>
                    <a>#ambitious</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder="Leave a comment ..."
                />
                <footer>
                    <button
                        type="submit"
                    >
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

export default Post
