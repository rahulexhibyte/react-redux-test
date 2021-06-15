import { Auth } from "../firebase";

export const signUp = ({ email, password }) => {
  new Promise((resolve, reject) => {
    Auth.createUserWithEmailAndPassword(email, password)
      .then((authentication) => resolve(authentication.user))
      .catch((error) => reject(error));
  });
};

export const signIn = ({ email, password }) => {
  new Promise((resolve, reject) => {
    Auth.signInWithEmailAndPassword(email, password)
      .then((authentication) => resolve(authentication.user))
      .catch((error) => reject(error));
  });
};
