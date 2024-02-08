import styles from "./Avatar.module.css"

function Avatar({ src, hasBorder = true }) {

    return (
        <img
            alt="Image that represents user"
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}

export default Avatar
