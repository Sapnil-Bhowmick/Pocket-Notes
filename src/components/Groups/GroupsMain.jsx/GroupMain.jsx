import Group from "../Group/Group"
import styles from "./GroupMain.module.css"

import Add from "../../../assets/Images/add.svg"
import { useSelector } from "react-redux"

const GroupMain = ({ setIsOpenModal }) => {

  const groups = useSelector((store) => store.GROUP.groups)
  console.log("GROUPS", groups)

  return (
    <section className={styles.GroupsMain}>
      <div className={styles.GroupsWrapper}>
        <div className={styles.groupsBody}>
          <h2 className={styles.title}>Pocket Notes</h2>
          <div className={styles.groupsContainer}>
            {
              groups?.length !== 0 ?
                groups.map((groupData) => <Group key={groupData.id} data={groupData} />)
                :
                null
            }
          </div>
        </div>
      </div>

      <button className={styles.addGroupBtn} onClick={() => setIsOpenModal((prev) => !prev)}>
        <img src={Add} alt="Add" />
      </button>
    </section>
  )
}

export default GroupMain
