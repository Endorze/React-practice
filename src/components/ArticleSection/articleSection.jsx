import styles from "./articleSection.module.css"

const ArticleSection = () => {
    return (
        <div>
            <div className={styles.horizontalBoxWrapper}>
            <div className={styles.articleBox}>
                <h4>Article</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
            </div>
            <div className={styles.articleBox}>
                <h4>Article</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
            </div>
            </div>
            <div className={styles.horizontalBoxWrapper}>
            <div className={styles.articleBox}>
                <h4>Article</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
            </div>
            <div className={styles.articleBox}>
                <h4>Article</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
            </div>
            </div>
        </div>
    )
}

export default ArticleSection;