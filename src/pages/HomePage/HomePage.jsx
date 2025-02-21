
import { useState } from "react"
import GroupMain from "../../components/Groups/GroupsMain.jsx/GroupMain"
import Modal from "../../components/Modal/Modal"
import MyNotes from "../../components/MyNotes/MyNotes"
import Welcome from "../../components/Welcome/Welcome"


import styles from "./HomePage.module.css"
import { useSelector } from "react-redux"

const HomePage = () => {

  const activeGroup = useSelector((store) => store.GROUP.activeGroup)
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className={styles.HomeMain}>
      <div className={styles.HomeWrapper}>
        <GroupMain setIsOpenModal={setIsOpenModal} />
        {
          activeGroup ? <MyNotes /> : <Welcome />
        }

        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      </div>
    </div>
  )
}

export default HomePage
