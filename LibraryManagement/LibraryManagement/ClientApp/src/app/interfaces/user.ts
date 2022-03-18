import { BookCollection } from "./bookCollection";

export interface User {
  id: string;
  name: string;
  email: string;
  bookCollection: BookCollection;
  accountType: string;
}
