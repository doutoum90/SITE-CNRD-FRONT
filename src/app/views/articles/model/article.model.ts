export interface Article {
  id: string;
  title: string;
  isArchived: boolean;
  content: string;
  shortContent: string;
  datePublication: string;
  dateModification?: string;
  dateArchivage?: string;
  icon: string;
}
