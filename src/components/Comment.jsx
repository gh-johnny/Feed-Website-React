import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"

function Comment() {
    return (
        <section className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/FelipeHeilmann.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>John Carmack</strong>
                            <time
                                dateTime="2024-16-01 08:13:02"
                                title="January 16th at 08:13h"
                            >
                                Around 1h ago
                            </time>

                        </div>
                        <button
                            title="Delete comment"
                        >
                            <Trash size={22} />
                        </button>
                    </header>

                    <p>Very good bro, congrats !! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Comment
