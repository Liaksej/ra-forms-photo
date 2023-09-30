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
    <div>
      <Image elevation={2} className="rel">
        <IconButton className="abs" aria-label="delete" onClick={deleteHandler}>
          <Cancel color="disabled" />
        </IconButton>
        <img src={photo.src} alt={photo.id} width="300" />
      </Image>
    </div>
  );
};
