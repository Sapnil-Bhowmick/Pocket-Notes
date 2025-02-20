import { colors } from "../../utils/constants"
import styles from "./Modal.module.css"


const Modal = ({setIsOpenModal}) => {
    return (
        <div className={styles.modalMain}>
            <div className={styles.NewGroupDiv}>
                <div className={styles.NewGroupDivWrapper}>
                    <h3 className={styles.modalTitle}>Create New group</h3>

                    <div className={styles.modalInputDiv}>
                        <span>Group Name</span>
                        <input type="text" placeholder="Enter group name" />
                    </div>

                    <div className={styles.modalColorDiv}>
                        <span>Choose color</span>
                        <div className={styles.colorContainer}>
                            {
                                colors.map((item) =>
                                    <div
                                        className={styles.color}
                                        style={{ backgroundColor: item.color }}
                                        key={item.id}></div>
                                )
                            }
                        </div>

                    </div>
                </div>

                <button className={styles.createBtn} onClick={() => setIsOpenModal(false)}>Create</button>
            </div>
        </div>
    )
}

export default Modal
