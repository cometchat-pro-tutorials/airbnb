import { useRef, useContext } from "react";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

import { Context } from "../../context/AppContext";

import * as cometChatService from "../../services/cometchat";
import * as firebaseService from "../../services/firebase";
import * as uiService from "../../services/ui";

import * as FIREBASE_KEYS from "../../constants/firebase-keys";

const SignUp = (props) => {
  const { toggleModal } = props;

  const aboutRef = useRef(null);
  const addressRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const fullnameRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);
  const workRef = useRef(null);

  const { cometChat } = useContext(Context);

  const signup = async () => {
    try {
      const { fullname, email, work, address, about, role, password, confirmPassword } = getInputs();
      if (isSignupValid({ fullname, email, work, address, about, role, password, confirmPassword })) {
        const id = uuidv4();
        const avatar = generateAvatar();
        const createdAccount = { id, fullname, email, avatar, work, address, about, role };
        uiService.showLoading();
        await firebaseService.createAccount(email, password);
        await firebaseService.insert({ key: FIREBASE_KEYS.USERS, id, payload: createdAccount });
        await cometChatService.createAccount({ cometChat, id, fullname, avatar });
        uiService.hideLoading();
        uiService.alert(`${email} was created successfully! Please sign in with your created account`);
        toggleModal(false);
      } else {
        uiService.hideLoading();
      }
    } catch (error) {
      uiService.hideLoading();
      uiService.alert(`Cannot create your account, your account might be existed, please try again!`);
    }
  };

  const getInputs = () => {
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const work = workRef.current.value;
    const address = addressRef.current.value;
    const about = aboutRef.current.value;
    const role = roleRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    return { fullname, email, work, address, about, role, password, confirmPassword };
  };

  const isSignupValid = ({ fullname, email, work, address, about, role, password, confirmPassword }) => {
    if (validator.isEmpty(fullname)) {
      uiService.alert("Please input your fullname");
      return false;
    }
    if (!validator.isEmail(email)) {
      uiService.alert("Please input your email");
      return false;
    }
    if (validator.isEmpty(work)) {
      uiService.alert("Please input your work");
      return false;
    }
    if (validator.isEmpty(address)) {
      uiService.alert("Please input your address");
      return false;
    }
    if (validator.isEmpty(about)) {
      uiService.alert("Please input your about");
      return false;
    }
    if (validator.isEmpty(role)) {
      uiService.alert("Please input your role");
      return false;
    }
    if (validator.isEmpty(password) || !validator.isLength(password, { min: 6 })) {
      uiService.alert("Please input your password. You password must have at least 6 characters");
      return false;
    }
    if (validator.isEmpty(confirmPassword)) {
      uiService.alert("Please input your confirm password");
      return false;
    }
    if (password !== confirmPassword) {
      uiService.alert("Confirm password and password must be the same");
      return false;
    }
    return true;
  };

  const generateAvatar = () => {
    const avatars = [
      'https://data-us.cometchat.io/assets/images/avatars/captainamerica.png',
      'https://data-us.cometchat.io/assets/images/avatars/cyclops.png',
      'https://data-us.cometchat.io/assets/images/avatars/ironman.png',
      'https://data-us.cometchat.io/assets/images/avatars/spiderman.png',
      'https://data-us.cometchat.io/assets/images/avatars/wolverine.png'
    ];
    const avatarPosition = Math.floor(Math.random() * avatars.length);
    return avatars[avatarPosition];
  };

  return (
    <div className="signup">
      <div className="signup__content">
        <div className="signup__container">
          <div className="signup__title">Sign Up</div>
          <div className="signup__close">
            <img
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="signup__subtitle"></div>
        <div className="signup__form">
          <input type="text" placeholder="Fullname" ref={fullnameRef} />
          <input type="text" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="Work" ref={workRef} />
          <input type="text" placeholder="Address" ref={addressRef} />
          <input type="text" placeholder="About" ref={aboutRef} />
          <select ref={roleRef}>  
            <option value="1" defaultChecked>Host</option>
            <option value="0">Non-Host</option>
          </select>
          <input type="password" placeholder="Password" ref={passwordRef} />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
          <button className="signup__btn" onClick={signup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
