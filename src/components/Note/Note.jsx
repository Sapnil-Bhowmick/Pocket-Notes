import styles from "./Note.module.css"
import Bullet from "../../assets/Images/Bullet.svg"
import { formatDate } from "../../utils/groupInitials"


const Note = ({data}) => {

    const {
        message , 
        dateTime
    } = data || {}

    return (
        <div className={styles.NoteMain}>
            <div className={styles.NoteWrapper}>
                <p>
                    {message}
                </p>

                <div className={styles.NoteTime}>
                    <span>{formatDate(dateTime).formattedDate}</span>
                    <img src={Bullet} alt="Bullet" className={styles.Bullet}/>
                    <span>{formatDate(dateTime).formattedTime}</span>
                </div>
            </div>
        </div>
    )
}

export default Note
