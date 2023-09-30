import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Dispatch, ChangeEvent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const VisuallyHiddenInput = styled("input")({
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Action {
  type: "addPhoto" | "deletePhoto";
  payload: { id: string; src?: string };
}

interface UploadButtonProps {
  dispatch: Dispatch<Action>;
}

const fileToDataUrl = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", (evt: ProgressEvent<FileReader>) => {
      resolve((evt.currentTarget as FileReader).result);
    });

    fileReader.addEventListener("error", (evt) => {
      reject(new Error((evt.currentTarget as FileReader).error?.message));
    });

    fileReader.readAsDataURL(file);
  });
};

export const UploadButton = ({ dispatch }: UploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      await Promise.all(files.map((o) => fileToDataUrl(o))).then((files) => {
        files.forEach((file) => {
          dispatch({
            type: "addPhoto",
            payload: { id: uuidv4(), src: file as string },
          });
        });
      });

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="flex justify-center p-10 pb-5">
      <Button
        className="text-center"
        component="label"
        variant="contained"
        size="large"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          onChange={handlerChange}
          multiple={true}
        />
      </Button>
    </div>
  );
};
