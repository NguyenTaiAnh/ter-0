import { dbStore } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export async function GET(request: Request) {
  console.log({ request });
  try {
    const postsCollection = collection(dbStore, "posts");
    const postsSnapshot = await getDocs(postsCollection);

    return Response.json(
      postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  } catch (error: any) {
    console.log({ error });
    return new Response(JSON.stringify({ error: "Lỗi khi lấy dữ liệu" }), {
      status: 500,
    });
  }
}
export async function POST(request: Request) {
  const body = await request.json();

  try {
    // validatePost(body);

    const postRef = doc(collection(dbStore, "posts"));
    await setDoc(postRef, {
      ...body,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return new Response(JSON.stringify({ error: "Tạo bài viết thất bại" }), {
      status: 500,
    });
    // return withErrorHandling(error, {
    //   status: 400,
    //   message: 'Tạo bài viết thất bại',
    // });
  }
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const body = await request.json();

  try {
    // validatePost(body);

    const postRef = doc(dbStore, "posts", id);
    await updateDoc(postRef, {
      ...body,
      updatedAt: serverTimestamp(),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log({ error });
    return new Response(
      JSON.stringify({ error: "Cập nhật bài viết thất bại" }),
      {
        status: 500,
      }
    );
    // return withErrorHandling(error, {
    //   status: 400,
    //   message: 'Cập nhật bài viết thất bại',
    // });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const postRef = doc(dbStore, "posts", id);
    await deleteDoc(postRef);

    return new Response(null, { status: 204 });
  } catch (error) {
    console.log({ error });
    return new Response(JSON.stringify({ error: "Xóa bài viết thất bại" }), {
      status: 500,
    });
    // return withErrorHandling(error, {
    //   status: 400,
    //   message: 'Xóa bài viết thất bại',
    // });
  }
}
