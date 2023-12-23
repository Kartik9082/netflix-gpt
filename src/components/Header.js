import React from "react";
import userIcon from "../images/userIcon.png";
import logout from "../images/logout.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {

    //toggle gpt Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="w-screen absolute py-2 px-20 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-64 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-4 justify-center">
          {showGptSearch && <select className="p-2 m-2 bg-slate-700 text-white rounded-lg" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key ={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button
            className="bg-white rounded-lg mx-4 px-4 py-2 my-2 items-center text-xl font-bold"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-11 h-12 rounded-lg items-center"
            src={userIcon}
            alt="usericon"
          />

          <button
            onClick={handleSignOut}
            className="w-12 h-12 p-4 mx-4 px-4 py-2 my-2 bg-white rounded-lg "
          >
            <img alt="logout" src={logout} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
