import styles from "./Welcome.module.css"
import Logo from "../../assets/Images/Logo.svg"
import EncryptionLogo from "../../assets/Images/Encryption-Logo.svg"

const Welcome = () => {
    return (
        <div className={styles.WelcomeMain}>
            <div className={styles.welcomeWrapper}>
                <div className={styles.LogoDiv}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                </div>

                <div className={styles.welcomeInfo}>
                    <h1 className={styles.title}>Pocket Notes</h1>
                    <div className={styles.about}>
                        <p>Send and receive messages without keeping your phone online.</p>
                        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                    </div>
                </div>

                <div className={styles.encryption}>
                    <div className={styles.encryptionLock}>
                        <img src={EncryptionLogo} alt="Encrypted" />
                    </div>
                    <span>end-to-end encrypted</span>
                </div>
            </div>
        </div>
    )
}

export default Welcome
