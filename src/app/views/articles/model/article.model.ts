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