import React from 'react'
import styles from './NotFoundBlock.module.scss'
function NotFoundBlock() {
    return (
        <div>

            <h1 className={styles.root}>
                🙃
                <br />
                Ничего не найдено </h1>

                <p className={styles.description}>К сожалению данная страница отсутсвует</p>
        </div>
    )
}

export default NotFoundBlock