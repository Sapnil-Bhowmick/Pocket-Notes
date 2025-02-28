
import { useDispatch, useSelector } from "react-redux"
import { addActiveGroup } from "../../../redux/Slices/GroupSlice"
import { groupInitials } from "../../../utils/groupInitials"
import styles from "./Group.module.css"


const Group = ({ data, grpId, setShowMyNotes }) => {

  const dispatch = useDispatch()
  const activeGroup = useSelector((store) => store.GROUP.activeGroup)

  const isGroupActive = activeGroup?.id === grpId

  const {
    groupInfo
  } = data || {}

  const handleOpenGroup = () => {
    const activeGroupdata = {
      activeGroupId: grpId,
      groupName: groupInfo?.name,
      colorPreference: groupInfo?.color
    }

    dispatch(addActiveGroup({
      data: activeGroupdata
    }))

    if (window.innerWidth < 600) {
      console.log("< 600px")
      setShowMyNotes(true)
    }
  }

  return (
    <div
      className={styles.singleGroupMain}
      style={{
        backgroundColor: isGroupActive && "var(--hover-1)"
      }}
      onClick={handleOpenGroup}
    >
      <div className={styles.singleGroupWrapper}>
        <span className={styles.initials} style={{ backgroundColor: groupInfo.color }}>{groupInitials(groupInfo?.name)}</span>
        <span className={styles.name}>{groupInfo?.name?.length > 13 ? groupInfo?.name?.substring(0, 13) + "..." : groupInfo?.name}</span>
      </div>
    </div>
  )
}

export default Group
