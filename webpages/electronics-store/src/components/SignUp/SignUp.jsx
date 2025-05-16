import SignUpMain from './SignUpMain/SignUpMain';
import SignUpFooter from '../SignUp/SignUpFooter/SignUpFooter.jsx';
import styles from './SignUp.module.css';


function SignUp () {
  return (
    <div className={styles.signUp}>
      <SignUpMain/>
      <SignUpFooter/>
    </div>
  )
}

export default SignUp;