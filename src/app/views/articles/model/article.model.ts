export interface Article {
  id: string;
  title: string;
  isArchived: boolean;
  content: string;
  shortContent: string;
  datePublication: Date;
  dateModification?: Date;
  dateArchivage?: Date;
  icon: string;
  documents?: any[];
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
