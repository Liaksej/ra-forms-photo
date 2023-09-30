import { Photo } from "@/components/Photo";
import { Dispatch } from "react";

interface Action {
  type: "addPhoto" | "deletePhoto";
  payload: { id: string; src: string };
}

interface AlbumAreaProps {
  dispatch: Dispatch<Action>;
  photos:
    | {
        id: string;
        src: string;
      }[]
    | [];
}

export const AlbumArea = ({ photos, dispatch }: AlbumAreaProps) => {
  return (
    <div>
      {Boolean(photos) &&
        photos.length > 0 &&
        photos.map((photo) => {
          return <Photo key={photo.id} {...photo} />;
        })}
    </div>
  );
};
