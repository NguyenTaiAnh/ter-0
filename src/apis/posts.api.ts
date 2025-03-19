import { dbStore } from "@/lib/firebase";
import { IRequestPost } from "@/types/post.type";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const postsApi = {
  async getAllPost() {
    const post = await getDocs(collection(dbStore, "posts"));
    return post.docs.map(doc => ({...doc.data(),postId:doc.id})) ?? [];
  },
  async getPost(id: string) {
    try {
      const docRef = doc(collection(dbStore, "posts", id));
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? (docSnap.data() as any) : null;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },
  async create(request: IRequestPost) {
    try {
      const docRef = await addDoc(collection(dbStore, "posts"), request);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },
  async update(request: IRequestPost, id: string) {
    try {
      await updateDoc(doc(dbStore, "posts", id), { request });
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },
  async delete(id: string) {
    try {
      await deleteDoc(doc(dbStore, "posts", id));
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },
};
