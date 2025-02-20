import styles from "./MyNotes.module.css"
import Send from "../../assets/Images/Send.svg"
import Note from "../Note/Note"

const MyNotes = () => {
  return (
    <section className={styles.MyNotesMain}>
      <div className={styles.MyNotesWrapper}>

        <div className={styles.MyNotesHeader}>
          <div className={styles.MyNotesHeader_Body}>
            <div className={styles.grpInitials}>MN</div>
            <span className={styles.grpName}>My Own Group</span>
          </div>
        </div>

        <div className={styles.MyNotesArea}>
          <div className={styles.MyNotesAreaBody}>
             {
              new Array(10).fill(1).map((item) => <Note />)
             }
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className={styles.MyNotesHeader_Footer}>
            <textarea placeholder="Enter your text here..........." />
            <img src={Send} alt="Send" className={styles.sendIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyNotes
