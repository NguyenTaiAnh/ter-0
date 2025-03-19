import { dbStore } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export const postsApi = {
  // async getAllPost(){

  // },
  // async getPost(id:string){

  // },
  async create(request: any) {
    try {
      const docRef = await addDoc(collection(dbStore, "posts"), request);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },
  // update(request,id){},
  // delete(id:string){}
};
