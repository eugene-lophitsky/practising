import styles from './SignUp.module.css';
import sigUpBanner from '/sign-up-banner.webp';

function SignUp () {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpBanner}><img src={sigUpBanner} alt=""/></div>
      <div className={styles.signUpForm}>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUpTitle}>Create an account</div>
          <div className={styles.signUpSubtitle}>Enter your details below</div>
          <form className={styles.signUpForm}>
            <input type="text" name="name" className={styles.signUpFormName} placeholder="Name" />
            <input type="text" className={styles.signUpFormPhoneNumber} placeholder="Email or Phone Number" />
            <input type="password" className={styles.signUpFormPassword} placeholder="Password" />
            <a href="#" className={styles.signUpFormButton}>Create Account</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;