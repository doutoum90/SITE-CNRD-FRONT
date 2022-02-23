import { Injectable } from "@angular/core";
import {
  Adherant,
  Article,
  Categories,
  Commentaire,
  Membre,
  Users,
} from "./model/article.model";
import { v4 as uuidv4 } from "uuid";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}
  /* addAdherant */
  addAdherant(adherant: Adherant) {
    return this.http.post<Adherant>(`${environment.apiURL}/adherant`, adherant);
  }

  getAllAdherants() {
    return this.http.get<Adherant[]>(`${environment.apiURL}/adherant`);
  }

  getAllAdherantById(_id: string) {
    return this.http.get<Adherant>(`${environment.apiURL}/adherant/${_id}`);
  }

  deleteAdherant(_id: string) {
    return this.http.delete<Adherant>(`${environment.apiURL}/adherant/${_id}`);
  }

  updateAdherant(adherant: Adherant) {
    return this.http.patch<Adherant>(
      `${environment.apiURL}/adherant/${adherant._id}`,
      {
        ...adherant,
      }
    );
  }

  //   articles
  getArchivedArticle() {
    return this.http.get<Article[]>(
      `${environment.apiURL}/posts?crit=archived`
    );
  }

  getArticles() {
    return this.http.get<Article[]>(
      `${environment.apiURL}/posts?crit=nonArchived`
    );
  }

  getAllArticles() {
    return this.http.get<Article[]>(`${environment.apiURL}/posts`);
  }

  getArticleAlaUne() {
    return this.http
      .get<Article[]>(`${environment.apiURL}/posts?crit=une`)
      .pipe(map((arts) => arts[0]));
  }

  mettreAlaUneArticle(_id: string, isAlaUne: boolean) {
    return this.http.patch<Article>(`${environment.apiURL}/posts/${_id}`, {
      isAlaUne,
      dateAlaUne: new Date(),
    });
  }

  archiverArticle(_id: string, isArchived: boolean) {
    return this.http.patch<Article>(`${environment.apiURL}/posts/${_id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }
  getArticlesByCat(catId: string) {
    return this.http.get<Article[]>(`${environment.apiURL}/posts/`).pipe(
      map((posts) => {
        return posts.filter((post) => post?.cats?.includes(catId));
      })
    );
  }
  getArticle(_id: string) {
    return this.http.get<Article>(`${environment.apiURL}/posts/${_id}`);
  }

  addEditArticle(article: Article, edit = true) {
    if (edit)
      return this.http.patch<Article>(
        `${environment.apiURL}/posts/${article._id}`,
        article
      );
    return this.http.post<Article>(`${environment.apiURL}/posts`, article);
  }

  deleteArticle(_id: string) {
    return this.http.delete<Users>(`${environment.apiURL}/posts/${_id}`);
  }

  addComment(
    article: Article,
    comment: Commentaire,
    currentUserId: string,
    articleId: string
  ) {
    return this.http.patch<Article>(
      `${environment.apiURL}/posts/${articleId}`,
      {
        commentaires: [
          ...article.commentaires,
          {
            ...comment,
            _id: uuidv4(),
            user: {
              _id: currentUserId,
              userName: "@Username",
              image: "https://bootdey.com/img/Content/user_3.jpg",
            },
          },
        ],
      }
    );
  }

  /** Categories */
  getCategory(_id: string) {
    return this.http.get<Categories>(`${environment.apiURL}/categories/${_id}`);
  }

  archiverCategory(_id: string, isArchived: boolean) {
    return this.http.patch<Categories>(
      `${environment.apiURL}/categories/${_id}`,
      {
        isArchived,
        dateArchivage: new Date(),
      }
    );
  }

  addCategory(category: Categories) {
    return this.http.post<Categories>(
      `${environment.apiURL}/categories`,
      category
    );
  }

  editCategory(category: Categories) {
    return this.http.patch<Categories>(
      `${environment.apiURL}/categories/${category._id}`,
      category
    );
  }

  getAllCategories() {
    return this.http.get<Categories[]>(`${environment.apiURL}/categories`);
  }

  getAllNonArchivedCategory() {
    return this.http.get<Categories[]>(
      `${environment.apiURL}/categories?crit=nonArchived`
    );
  }

  getAllArchivedCategory() {
    return this.http.get<Categories[]>(
      `${environment.apiURL}/categories?crit=archived`
    );
  }

  deleteCategories(_id: string) {
    return this.http.delete<Categories>(
      `${environment.apiURL}/categories/${_id}`
    );
  }

  /** Users */
  archiverUsers(_id: string, isArchived: boolean) {
    return this.http.patch<Users>(`${environment.apiURL}/users/${_id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  getUser(_id: string) {
    return this.http.get<Users>(`${environment.apiURL}/users/${_id}`);
  }

  addUser(user: Users) {
    return this.http.post<Users>(`${environment.apiURL}/users`, user);
  }

  editUser(user: Users) {
    return this.http.patch<Users>(
      `${environment.apiURL}/users/${user._id}`,
      user
    );
  }

  getAllUsers() {
    return this.http.get<Users[]>(`${environment.apiURL}/users`);
  }

  activerDesactiverUser(_id: string, isActive: boolean) {
    return this.http.patch<Users>(`${environment.apiURL}/users/${_id}`, {
      isActive,
      dateArchivage: new Date(),
    });
  }

  deleteUser(_id: string) {
    return this.http.delete<Users>(`${environment.apiURL}/users/${_id}`);
  }

  /** Membres */
  getAllMembers() {
    return this.http.get<Membre[]>(`${environment.apiURL}/members`);
  }

  addMembre(membre: Membre) {
    return this.http.post<Membre>(`${environment.apiURL}/members`, membre);
  }

  getMembreById(_id: string) {
    return this.http.get<Membre>(`${environment.apiURL}/members/${_id}`);
  }

  editMember(member: Membre) {
    return this.http.patch<Membre>(
      `${environment.apiURL}/members/${member._id}`,
      member
    );
  }

  deleteMember(_id: string) {
    return this.http.delete<Membre>(`${environment.apiURL}/members/${_id}`);
  }
}
