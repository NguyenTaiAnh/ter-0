import { doc, setDoc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore";
import { IUser } from "@/types/user";
import { dbStore } from "@/lib/firebase";

export const FirestoreService = {
  async createUser(userId: string, userData: Partial<IUser>): Promise<void> {
    await setDoc(doc(dbStore, "users", userId), userData);
  },

  async getUser(userId: string): Promise<IUser | null> {
    const docRef = doc(dbStore, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as IUser) : null;
  },

  async updateUser(userId: string, updates: Partial<IUser>): Promise<void> {
    await updateDoc(doc(dbStore, "users", userId), updates);
  },

  async getAllUsers(): Promise<any | []>{
    const users = await getDocs(collection(dbStore, "users"));
    
    return users .docs[0].data() ?? []
  }
};
