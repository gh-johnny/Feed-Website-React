import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"
import { useState } from "react"

type TContent = string

type TCommentProps = {
    content: TContent,
    deleteComment: (content: TContent) => void,
}

function Comment({ content, deleteComment }: TCommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        deleteComment(content)
    }

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
                            <Trash
                                onClick={handleDeleteComment}
                                size={22}
                            />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button
                        type="button"
                        onClick={() => setLikeCount(prev => prev + 1)}
                    >
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Comment
