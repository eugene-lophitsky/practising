import SignUpMain from './SignUpMain/SignUpMain';
import styles from './SignUp.module.css';


function SignUp () {
  return (
    <div className={styles.signUp}>
      <SignUpMain/>
    </div>
  )
}

export default SignUp;