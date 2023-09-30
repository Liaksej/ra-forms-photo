import { styled } from "@mui/material/styles";
import { IconButton, Paper } from "@mui/material";
import Cancel from "@mui/icons-material/Cancel";
import { Dispatch, MouseEvent } from "react";

interface Action {
  type: "addPhoto" | "deletePhoto";
  payload: { id: string; src?: string };
}

interface PhotoProps {
  photo: {
    id: string;
    src?: string;
  };

  dispatch: Dispatch<Action>;
}

export const Photo = ({ photo, dispatch }: PhotoProps) => {
  const deleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: "deletePhoto", payload: { id: photo.id } });
  };

  return (
    <div className="relative w-[300px] inline-block">
      <IconButton
        className="absolute"
        aria-label="delete"
        onClick={deleteHandler}
      >
        <Cancel color="disabled" />
      </IconButton>
      <img
        src={photo.src}
        alt={photo.id}
        width="300"
        className="w-[300px] h-auto"
      />
    </div>
  );
};
