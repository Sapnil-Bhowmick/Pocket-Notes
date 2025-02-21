
import { useState } from "react"
import GroupMain from "../../components/Groups/GroupsMain.jsx/GroupMain"
import Modal from "../../components/Modal/Modal"
import MyNotes from "../../components/MyNotes/MyNotes"
import Welcome from "../../components/Welcome/Welcome"


import styles from "./HomePage.module.css"

const HomePage = () => {

    const [isOpenModal , setIsOpenModal] = useState(false)

  return (
    <div className={styles.HomeMain}>
      <div className={styles.HomeWrapper}>
        <GroupMain setIsOpenModal={setIsOpenModal} />
        <Welcome/>
        {/* <MyNotes /> */}

        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      </div>
    </div>
  )
}

export default HomePage
