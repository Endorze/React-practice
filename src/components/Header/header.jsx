import styles from "./header.module.css"


const Header = () => {

    const title = "Welcome to my React Site!"
    const subtitle = "The future is here! Hello world!"


    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>{title}</h1>
                <h2 className={styles.subTitle}>{subtitle}</h2>
            </header>
        </>
    )
}

export default Header;