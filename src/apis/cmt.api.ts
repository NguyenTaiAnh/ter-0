import { dbStore } from "@/lib/firebase";
import { IRequestComment } from "@/types/post.type";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

export const cmtApi = {
  async createCmt(postId: string, request: IRequestComment) {
    try {
      const docRef = collection(dbStore, "posts", postId, "comments");
      await addDoc(docRef, request);
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
  async deleteCmt(postId: string, cmtId: string) {
    try {
      const commentRef = doc(dbStore, "posts", postId, "comments", cmtId);
      await deleteDoc(commentRef);
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
  async updateCmt(postId: string, cmtId: string, request: IRequestComment) {
    try {
      const commentRef = doc(dbStore, "posts", postId, "comments", cmtId);
      await updateDoc(commentRef, { request });
      console.log("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment: ", error);
    }
  },
  async getCmtPost(postId: string) {
    try {
      const commentsRef = collection(dbStore, "posts", postId, "comments");
      const q = query(commentsRef, orderBy("createdAt")); // Order comments by creation time
      const querySnapshot = await getDocs(q);
      const comments: any[] = [];
      querySnapshot.forEach((doc) => {
        comments.push({ id: doc.id, ...doc.data() });
      });
      return comments;
    } catch (error) {
      console.error("Error getting comments: ", error);
      return [];
    }
  },
  async getCmt(postId: string, cmtId: string) {
    try {
      const commentRef = doc(dbStore, "posts", postId, "comments", cmtId);
      const docSnap = await getDoc(commentRef);
      return docSnap.exists() ? (docSnap.data() as any) : null;
    } catch (error) {
      console.error("Error getCmt document: ", error);
      throw error;
    }
  },
};
