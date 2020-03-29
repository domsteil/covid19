import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import React, { useState, useEffect, useContext } from "react";
import Router from 'next/router';
import * as routes from '../../constants/routes';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import UserContext from '../../components/UserContext';


const provider = new firebase.auth.GoogleAuthProvider();

export default function Auth() {
  const [authState, setAuthState] = useState({ status: "loading" });
  const { signIn } = useContext(UserContext);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");

          metadataRef.on("value", async () => {
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await firebase.auth().signInWithPopup(provider).then(function(result) {

      var username = firebase.auth().currentUser.displayName.toString();
      signIn(username);
    })
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      setAuthState({ status: "loading" });
      await firebase.auth().signOut();
      setAuthState({ status: "out" });
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="auth">
            <Button className="signInButton" onClick={signInWithGoogle}>Sign In with Google</Button>
            <style jsx>{`

  .error {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    margin: 10px 0;
    font-size: 18px;
    color: #FFF;
    text-align: center;
  }

  
  .signin {
    font-size: 13px;
    line-height: 1.91667;
    font-weight: 400;
    color: #3d464d;
    border: 1px solid #bdc4c9;
    padding: 3.5px 7px;
    border-radius: 4px;
    margin-top: 28px;
    margin-left: 8px;
  }

  .signInButton {
      -webkit-appearance: none;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      text-transform: uppercase;
      text-align: center;
      line-height: 0;
      white-space: nowrap;
      width: 200px;
      height: 30px;
      font-weight: 500;
      font-size: 12px;
      color: rgb(102, 102, 102);
      background-color: rgb(255, 255, 255);
      user-select: none;
      cursor: pointer;
      text-decoration: none;
      padding: 0px 25px;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(234, 234, 234);
      border-image: initial;
      transition: all 0.2s ease 0s;
      overflow: hidden;
      outline: none;
  }


  b {
    font-weight: normal;
  }

  h1 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 2em;
      font-weight: 200;
      margin-right: 30px;a
      padding-left: 5px;
      color: #000;
      text-align: center;
    }


/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: orange; }
}

      h2 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 24px;
      font-weight: normal;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    p {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 18px;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    img {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      height: 80px;
      width: 80px;
      font-size: 12px;
      text-align: center;
    }

    ul {

        display: inline-block;
        color: #999;
        position: absolute;
        margin-left: -15px;
    }

    .connected {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #50e3c2;
  margin-left: 10px;
}

.after {
  box-sizing: inherit;
}




`}</style>
        </div>;
}