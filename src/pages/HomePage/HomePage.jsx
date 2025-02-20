
import GroupMain from "../../components/Groups/GroupsMain.jsx/GroupMain"
import MyNotes from "../../components/MyNotes/MyNotes"
import Welcome from "../../components/Welcome/Welcome"


import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={styles.HomeMain}>
      <div className={styles.HomeWrapper}>
        <GroupMain/>
        {/* <Welcome/> */}
        <MyNotes />
      </div>
    </div>
  )
}

export default HomePage
