"use server";

import { postsApi } from "@/apis/posts.api";
import { EditorImageType } from "@/types/editor-image.type";
import { imagekit } from "@/ultils/imagekit";

export const uploadPost = async (
  formData: FormData,
  settings: { type: EditorImageType; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  const desc = formData.get('desc') as string;
  console.log({desc})
  console.log({ file });
  const bytes = await file.arrayBuffer();
  console.log({ bytes });
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;
  console.log({file})
  console.log("file:", file.name,buffer,transformation,settings,settings.sensitive)
//   imagekit.upload(
//     {
//       file: buffer,
//       fileName: file.name,
//       folder: "/posts",
//       ...(file.type.includes("image") && {
//         transformation: {
//           pre: transformation,
//         },
//       }),
//     //   customMetadata: {
//     //     sensitive: settings.sensitive,
//     //   },
//     },
//     function (error, result) {
//         console.log("test: ", error)
//       if (error) console.log({error});
//       else console.log({result});
//     }
//   );

// const param = {

// }
    const res = postsApi.create({
        uid: Date.now(),
        content: desc,
        media: ''
    })
    console.log({res})
};
