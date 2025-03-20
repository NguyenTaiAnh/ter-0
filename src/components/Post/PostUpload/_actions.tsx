"use server";

import { EditorImageType } from "@/types/editor-image.type";
import { imagekit } from "@/ultils/imagekit";

export const uploadImage = async (
  formData: FormData,
  settings: { type: EditorImageType; sensitive: boolean },
) => {
  return new Promise(async(resolve, reject) => {
    const file = formData.get("file") as File;
    console.log("1")
    if(file.name === 'undefined') {
      resolve('')
      return;
    }
      console.log("2")
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transformation = `w-600, ${
      settings.type === "square"
        ? "ar-1-1"
        : settings.type === "wide"
        ? "ar-16-9"
        : ""
    }`;
    console.log({ file });
    console.log(
      "file:",
      file.name,
      buffer,
      transformation,
      settings,
      settings.sensitive
    );
    imagekit.upload(
      {
        file: buffer,
        fileName: file.name,
        folder: "/posts",
        ...(file.type.includes("image") && {
          transformation: {
            pre: transformation,
          },
        }),
        //   customMetadata: {
        //     sensitive: settings.sensitive,
        //   },
      },
      async function (error: any, result: any) {
        console.log("test: ", error);
        if (error) {
            console.log({ error })
            reject(error)
        }
        else {
          console.log({ result });
          resolve( result.filePath)
        }
      }
    );
  });
};
