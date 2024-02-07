import { formatRelative, subDays } from 'date-fns'

import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"
import { useState, useRef } from 'react'

function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Very good bro, congrats !! 👏👏'])
    const commentValueRef = useRef(null)

    const publishedAtFormatted = formatRelative(subDays(new Date(publishedAt), 3), new Date())


    const handleCreateNewComment = (e) => {
        e.preventDefault()

        setComments([...comments, commentValueRef?.current.value])
        commentValueRef.current.value = ''
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    dateTime="2024-16-01 08:13:02"
                    title={publishedAt.toISOString()}
                >
                    {publishedAtFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((line, i) =>
                        line.type === "paragraph"
                            ? <p key={i}>
                                {line.content}
                            </p>
                            : <p key={i}>
                                <a href='https://github.com/gh-johnny'>
                                    {line.content}
                                </a>
                            </p>
                    )
                }

                <p>
                    <i className={styles.emoji}>👉</i> <a
                        href="https://github.com/gh-johnny"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github/johnny.romero
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

            <form
                onSubmit={e => handleCreateNewComment(e)}
                className={styles.commentForm}
            >
                <strong>Leave your feedback</strong>

                <textarea
                    ref={commentValueRef}
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
                {
                    comments.map((comment, i) =>
                        <Comment content={comment} key={i} />
                    )
                }
            </div>
        </article>
    )
}

export default Post
