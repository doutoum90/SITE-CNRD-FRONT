export interface Article {
  id: string;
  title: string;
  isArchived: boolean;
  isAlaUne: boolean;
  content: string;
  shortContent: string;
  datePublication: Date;
  dateModification?: Date;
  dateArchivage?: Date;
  dateAlaUne?: Date;
  icon: string;
  documents?: any[];
  cats: string[];
  commentaires?: Commentaire[];
}

export interface Commentaire {
  id: string;
  content: string;
  datePublication: Date;
  dateModification?: Date;
  auteur: string;
  user: User;
}

export interface User {
  id: string;
  image: string;
  userName: string;
}

export interface Categories {
  id: string;
  title: string;
  libelles: string;
  description: string;
  datePublication: Date;
  dateArchivage?: Date;
  isArchived: boolean;
  dateModification?: Date;
  idUser: string;
}

export interface Users {
  id: string;
  nom: string;
  prenom: string;
  age: number;
  email: string;
  motDePasse: string;
  roles: string[];
  image?: string;
  userName: string;
  phone: string;
  isActive: boolean;
  genre: string;
  dateCreation: Date;
  dateModification?: Date;
}
export interface Membre {
  id: string;
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
  id: string;
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

  cotisation: number;
}
