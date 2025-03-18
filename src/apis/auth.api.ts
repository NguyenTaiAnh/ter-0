import { auth } from "@/lib/firebase";
import { FirestoreService } from "@/stores/firebase/firestore";
import { IUser } from "@/types/user";
import { setLocalStorage } from "@/ultils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";
import { setCookie } from "nookies";

export const authApi = {
  async signUp(email: string, password: string, data: IUser): Promise<User> {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    FirestoreService.createUser(user.uid, data);
    return userCredential.user;
  },

  async signIn(email: string, password: string): Promise<User> {
    const userCredential: UserCredential|any = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = await FirestoreService.getUser(userCredential.user.uid)
    setLocalStorage('currentUser',user)
    const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
    setCookie(null, "token", JSON.stringify(userCredential.user?.accessToken), {
      expires,
    });
    // setCookie(null,'token',userCredential.user)
    return userCredential.user;
  },

  async signOut(): Promise<void> {
    await signOut(auth);
  },

  getCurrentUser(): User | null {
    return auth.currentUser;
  },
};
