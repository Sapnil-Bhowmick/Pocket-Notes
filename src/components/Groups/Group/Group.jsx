
import styles from "./Group.module.css"

const Group = () => {
  return (
    <div className={styles.singleGroupMain}>
      <div className={styles.singleGroupWrapper}>
            <span className={styles.initials}>MN</span>
            <span className={styles.name}>My Own Group</span>
      </div>
    </div>
  )
}

export default Group
