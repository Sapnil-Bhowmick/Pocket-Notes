import styles from "./Note.module.css"
import Bullet from "../../assets/Images/Bullet.svg"

const Note = () => {
    return (
        <div className={styles.NoteMain}>
            <div className={styles.NoteWrapper}>
                <p>
                    Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.
                </p>

                <div className={styles.NoteTime}>
                    <span>9 March 2023</span>
                    <img src={Bullet} alt="Bullet" className={styles.Bullet}/>
                    <span>10:10 AM</span>
                </div>
            </div>
        </div>
    )
}

export default Note
