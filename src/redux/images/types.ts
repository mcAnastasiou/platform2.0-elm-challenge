import { ErrorPayload, DefaultStateType } from "types/app";
import { ImageType } from "types/images";
import * as actionTypes from "./actionTypes";

/************************* Images *************************/
export type GetImagesLoadingType = {
  type: typeof actionTypes.IMAGES_LOADING;
};

export type GetImagesSuccessType = {
  type: typeof actionTypes.IMAGES_SUCCESS;
  payload: {
    data: ImageType[];
  };
};

export type GetImagesFailureType = {
  type: typeof actionTypes.IMAGES_FAILURE;
  payload: ErrorPayload;
};

export type GetImagesActionType =
  | GetImagesLoadingType
  | GetImagesSuccessType
  | GetImagesFailureType;

export type ImagesDefaultState = DefaultStateType & {
  list: ImageType[];
};