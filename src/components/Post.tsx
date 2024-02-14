import { formatRelative, subDays } from 'date-fns'
import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"
import { useState, useRef } from 'react'

type TAvatar = {
    name: string,
    role: string,
    avatarUrl: string
}

type TContent = {
    type: 'paragraph' | 'link',
    content: string,
}[]

export type TPost = {
    id: number,
    author: TAvatar,
    publishedAt: Date,
    content: TContent,
}

type TPostProps = {
    post: TPost
}

function Post({ post }: TPostProps) {
    const { publishedAt, author, content } = post

    const [comments, setComments] = useState(['Very good bro, congrats !! 👏👏'])
    const commentValueRef = useRef<HTMLTextAreaElement | null>(null)

    const publishedAtFormatted = formatRelative(subDays(new Date(publishedAt), 3), new Date())

    const handleCreateNewComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setComments([...comments, commentValueRef!.current!.value])
        commentValueRef!.current!.value = ''
    }
    const handleNewCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity('')
    }

    const deleteComment = (content: string) => {
        setComments(prev => prev.filter(item => item !== content))
    }

    const handleNewInvalidComment = (e: React.InvalidEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity('Please fill out the comment section')
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
                    name="comment"
                    ref={commentValueRef}
                    placeholder="Leave a comment ..."
                    onChange={e => handleNewCommentChange(e)}
                    onInvalid={e => handleNewInvalidComment(e as React.InvalidEvent<HTMLTextAreaElement>)}
                    required
                />
                <footer>
                    <button
                        name="submit"
                        type="submit"
                    >
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment, i) =>
                        <Comment
                            key={i}
                            deleteComment={deleteComment}
                            content={comment}
                        />
                    )
                }
            </div>
        </article>
    )
}

export default Post
