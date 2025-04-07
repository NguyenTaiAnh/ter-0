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
  query,
  orderBy,
  where,
} from "firebase/firestore";

export const postsApi = {
  async getAllPost() {
    const q = query(collection(dbStore, "posts"), orderBy("createdAt", "desc"));

    // const post = await getDocs(q);

    const post = await getDocs(q);
    return post.docs.map((doc) => ({ ...doc.data(), postId: doc.id })) ?? [];
  },
  async getPost(id: string) {
    try {
      const docRef = doc(dbStore, "posts", id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? ({...(docSnap.data() as any), postId: id}) : null;
    } catch (error) {
      console.error("Error get post document: ", error);
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
  async update(request: any, id: string) {
    try {
      await updateDoc(doc(dbStore, "posts", id), request)
      return { success: true };
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
  async getPostByUserId(userId: string) {
    try {
      const q = query(
        collection(dbStore, "posts"),
        where("user_id", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        postId: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error getall document by user: ", error);
      throw error;
    }
  },
  async getUser(userId: string) {
    const docRef = doc(dbStore, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as any) : null;
  },
};
