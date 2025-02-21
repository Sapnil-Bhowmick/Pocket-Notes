
import { groupInitials } from "../../../utils/groupInitials"
import styles from "./Group.module.css"


const Group = ({data}) => {

  const {
    groupInfo
  } = data || {}

  return (
    <div className={styles.singleGroupMain}>
      <div className={styles.singleGroupWrapper}>
            <span className={styles.initials} style={{backgroundColor: groupInfo.color}}>{groupInitials(groupInfo?.name)}</span>
            <span className={styles.name}>{groupInfo?.name?.length > 13 ? groupInfo?.name?.substring(0 , 13) + "..." : groupInfo?.name}</span>
      </div>
    </div>
  )
}

export default Group
