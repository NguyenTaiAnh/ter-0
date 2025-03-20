import { auth } from "@/lib/firebase";
import { FirestoreService } from "@/stores/firebase/firestore";
import { ICurrentUser, IUser } from "@/types/user";
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
    // const user =  await FirestoreService.getUser(userCredential.user.uid)
    // setLocalStorage('currentUser',{
    //   ...user,userId:userCredential.user.uid
    // })
    const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
    setCookie(null, "token", JSON.stringify(userCredential.user?.accessToken), {
      expires,
    });
    return userCredential.user;
  },

  async signOut(): Promise<void> {
    await signOut(auth);
  },

  getAuthUser(): User | null {
    return auth.currentUser;
  },
  async getCurrentUser(userCredential:any):Promise<ICurrentUser | any> {
    const user =  await FirestoreService.getUser(userCredential.uid);
    console.log({usertest:user})
    return user
  }
};
