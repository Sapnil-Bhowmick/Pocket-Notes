import styles from "./MyNotes.module.css"

import InactiveSend from "../../assets/Images/InactiveSend.svg"
import ActiveSend from "../../assets/Images/ActiveSend.svg"
import Back from "../../assets/Images/Back.svg"

import Note from "../Note/Note"
import { useDispatch, useSelector } from "react-redux"
import { groupInitials } from "../../utils/groupInitials"
import { useState } from "react"
import { addMessage } from "../../redux/Slices/GroupSlice"


const MyNotes = ({ showMyNotes , setShowMyNotes}) => {

  const dispatch = useDispatch()

  const { id: activeGroupId, name, color } = useSelector((store) => store.GROUP.activeGroup)
  const groups = useSelector((store) => store.GROUP.groups)
  const activeGroupMessages = groups.filter((group) => group.id === activeGroupId)[0].groupMessages

  const [message, setMessage] = useState("")


  const handleSendMessage = () => {
    const newMessage = {
      groupID: activeGroupId,
      messageData: message,
      messageCreationTime: Date.now()
    }

    dispatch(addMessage({
      data: newMessage
    }))
  }


  const handleKeyDown = (e) => {
    if(message.trim().length > 0 && e.key === "Enter"){
      e.preventDefault(); // Prevent new line in textarea

      const newMessage = {
        groupID: activeGroupId,
        messageData: message,
        messageCreationTime: Date.now()
      }

      dispatch(addMessage({
        data: newMessage
      }))
    }
  }



  return (
    <section
      className={styles.MyNotesMain}
      style={{
       display: window.innerWidth < 600 && (showMyNotes ? "block" : "none")
      }}
    >
      <div className={styles.MyNotesWrapper}>

        <div className={styles.MyNotesHeader}>
          <div className={styles.MyNotesHeader_Body}>
            <img src={Back} alt="Back" className={styles.back} onClick={() => setShowMyNotes(false)} />
            <div className={styles.grpInitials} style={{ backgroundColor: color && color }}>{name && groupInitials(name)}</div>
            <span className={styles.grpName}>{name.length > 30 ? name.substring(0, 30) + "..." : name}</span>
          </div>
        </div>

        <div className={styles.MyNotesArea}>
          <div className={styles.MyNotesAreaBody}>
            {
              activeGroupMessages.length !== 0 ?
                activeGroupMessages.map((message) => <Note key={message.id} data={message} />)
                :
                null
            }
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className={styles.MyNotesHeader_Footer}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your text here..........." />
            {
              message?.trim().length !== 0 ?
                (
                  <img
                    src={ActiveSend}
                    alt="Send"
                    className={styles.sendIcon}
                    onClick={handleSendMessage}
                  />
                ) :
                (
                  <img
                    src={InactiveSend}
                    alt="Send"
                    className={styles.sendIcon}
                  />
                )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyNotes
