export interface Article {
  _id: string;
  title: string;
  isArchived: boolean;
  isAlaUne: boolean;
  content: string;
  shortContent: string;
  datePublication: Date;
  dateModification?: Date;
  dateArchivage?: Date;
  auteur: string;
  dateAlaUne?: Date;
  icon: string;
  documents?: any[];
  categories: string[];
  commentaires?: Commentaire[];
}

export interface Auteur {
  nom: string;
  prenom: string;
  photo: string;
}

export interface Commentaire {
  _id: string;
  content: string;
  datePublication: Date;
  dateModification?: Date;
  nom: string;
  mail: string;
}

export interface User {
  _id: string;
  image: string;
  userName: string;
}

export interface Categories {
  _id: string;
  title: string;
  libelles: string;
  description: string;
  datePublication: Date;
  dateArchivage?: Date;
  isArchived: boolean;
  dateModification?: Date;
  idUser: string;
  author: Auteur;
}

export interface Users {
  _id: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  email: string;
  motDePasse: string;
  roles: string;
  userName: string;
  phone: string;
  isActive: boolean;
  genre: string;
  dateCreation: Date;
  photo: string;
  dateModification?: Date;
}

export interface Membre {
  _id: string;
  nom: string;
  prenom: string;
  fonction: string;
  metier: string;
  photo?: string;
  isPresident: boolean;
}

export interface Folder {
  name: string;
  files?: File[];
}
export interface File {
  name: string;
  lien: string;
}

export interface Adherant {
  _id: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  LieuNaissance: string;
  nationalite: string;

  profession: string;
  adresse: string;
  phone: string;
  mail: string;
  photo: string;

  cotisation: Cotisation;
}

export interface Cotisation {
  libelle: string;
  montant: number;
  devise: string;
}
export interface Pagination {
  count: number;
  pageSize: number;
  limit: number;
  offset: number;
}

export interface ArticlePagine {
  total: number;
  offset: number;
  last_page: number;
  data: Article[];
}
