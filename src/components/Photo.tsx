import { styled } from "@mui/material/styles";
import { IconButton, Paper } from "@mui/material";
import Cancel from "@mui/icons-material/Cancel";
import { Dispatch, MouseEvent } from "react";

const Image = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

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
    <div className="relative">
      <IconButton
        className="absolute right-[-1.3rem] top-[-1.2rem]"
        aria-label="delete"
        onClick={deleteHandler}
      >
        <Cancel color="disabled" />
      </IconButton>
      <Image elevation={2} className="w-fit h-fit">
        <img src={photo.src} alt={photo.id} width="300" />
      </Image>
    </div>
  );
};