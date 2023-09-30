"use client";

import { UploadButton } from "@/components/UploadButton";
import { AlbumArea } from "@/components/AlbumArea";
import { useReducer } from "react";

interface State {
  photos:
    | {
        id: string;
        src: string;
      }[]
    | [];
}

interface Action {
  type: "addPhoto" | "deletePhoto";
  payload: { id: string; src: string };
}

const actions = {
  addPhoto: "addPhoto",
  deletePhoto: "deletePhoto",
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case actions.addPhoto:
      return { ...state, photos: [...state.photos, action.payload] };
    case actions.deletePhoto:
      return { ...state };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { photos: [] });

  return (
    <div>
      <UploadButton dispatch={dispatch} />
      <AlbumArea photos={state.photos} dispatch={dispatch} />
    </div>
  );
}
