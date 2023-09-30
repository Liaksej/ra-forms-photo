import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Dispatch, ChangeEvent, useRef } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
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
  payload: { id: string; src: string };
}

interface UploadButtonProps {
  dispatch: Dispatch<Action>;
}

export const UploadButton = ({ dispatch }: UploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        dispatch({
          type: "addPhoto",
          payload: { id: Date.now().toString(), src: reader.result as string },
        });
      };
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handlerChange} />
      </Button>
    </div>
  );
};
