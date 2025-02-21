import { useState } from "react"
import { colors } from "../../utils/constants"
import styles from "./Modal.module.css"
import { useDispatch } from "react-redux"
import { addGroup } from "../../redux/Slices/GroupSlice"


const Modal = ({ setIsOpenModal }) => {

    const [groupInfo, setGroupInfo] = useState({
        groupName: null,
        preferredColor: null
    })

    const dispatch = useDispatch()

    const validateGroupInfo = () => {
        let isValid = true

        if (!groupInfo.groupName || groupInfo?.groupName?.trim().length === 0) {
            isValid = false
        }

        if (groupInfo.preferredColor === null) {
            isValid = false
        }

        return isValid
    }


    const handleCreateNewGroup = (e) => {
        e.preventDefault()

        let isValid = validateGroupInfo()

        if (isValid) {
            // send data
            dispatch(addGroup({
                data: groupInfo
            }))
            setIsOpenModal(false)
        }
    }




    return (
        <form className={styles.modalMain} >
            <div className={styles.NewGroupDiv}>
                <div className={styles.NewGroupDivWrapper}>
                    <h3 className={styles.modalTitle}>Create New group</h3>

                    <div className={styles.modalInputDiv}>
                        <span>Group Name</span>
                        <input
                            onChange={(e) => setGroupInfo((prev) => {
                                return {
                                    ...prev,
                                    groupName: e.target.value
                                }
                            })}
                            type="text"
                            placeholder="Enter group name"
                        />
                    </div>

                    <div className={styles.modalColorDiv}>
                        <span>Choose color</span>
                        <div className={styles.colorContainer}>
                            {
                                colors.map((item) =>
                                    <div
                                        className={styles.color}
                                        style={{ backgroundColor: item.color }}
                                        key={item.id}
                                        onClick={
                                            () => setGroupInfo((prev) => {
                                                return {
                                                    ...prev,
                                                    preferredColor: item.color
                                                }
                                            })
                                        }
                                    >
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>

                <button
                    disabled={validateGroupInfo() ? false : true}
                    style={{
                        backgroundColor: !validateGroupInfo() && "rgb(194, 193, 193)",
                        pointerEvents: !validateGroupInfo() ? "none" : "auto"
                    }}
                    className={styles.createBtn}
                    onClick={handleCreateNewGroup}
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export default Modal
