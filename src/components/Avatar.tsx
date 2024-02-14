import { ImgHTMLAttributes } from 'react'
import styles from "./Avatar.module.css"

type TAvatar = {
    hasBorder?: boolean
}

type TAvatarProps = TAvatar & ImgHTMLAttributes<HTMLImageElement>

function Avatar({ hasBorder = true, ...props }: TAvatarProps) {

    return (
        <img
            alt="Image that represents the user"
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}

export default Avatar
