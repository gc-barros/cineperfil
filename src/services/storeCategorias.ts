import { IMidia } from "types/midia";
import { ICategoria } from "types/categoria";

export function getSavedItems(key: string) {
  let myItems = localStorage.getItem(key);

  if (myItems) {
    let savedItems = JSON.parse(myItems) || [];
    return savedItems
  }

  return null
}

export async function saveItem(key: string, newItem: IMidia[] | ICategoria[]) {
  await localStorage.setItem(key, JSON.stringify(newItem));
}
