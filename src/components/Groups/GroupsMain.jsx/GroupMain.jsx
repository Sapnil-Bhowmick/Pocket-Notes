import Group from "../Group/Group"
import styles from "./GroupMain.module.css"

import Add from "../../../assets/Images/add.svg"

const GroupMain = () => {
  return (
    <section className={styles.GroupsMain}>
      <div className={styles.GroupsWrapper}>
        <div className={styles.groupsBody}>
          <h2 className={styles.title}>Pocket Notes</h2>
          <div className={styles.groupsContainer}>
            {
              new Array(20).fill(1).map((item) => <Group />)
            }
          </div>
        </div>
      </div>

      <button className={styles.addGroupBtn}>
          <img src={Add} alt="Add" />
      </button>
    </section>
  )
}

export default GroupMain
