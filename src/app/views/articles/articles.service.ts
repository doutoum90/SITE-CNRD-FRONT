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

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  BASE_URL = "http://localhost:3001";
  constructor(private readonly http: HttpClient) {}
  /* addAdherant */
  addAdherant(adherant: Adherant) {
    return this.http.post<Adherant>(`${this.BASE_URL}/adherant`, adherant);
  }

  getAllAdherants() {
    return this.http.get<Adherant[]>(`${this.BASE_URL}/adherant`);
  }

  getAllAdherantById(_id: string) {
    return this.http.get<Adherant>(`${this.BASE_URL}/adherant/${_id}`);
  }

  deleteAdherant(_id: string) {
    return this.http.delete<Adherant>(`${this.BASE_URL}/adherant/${_id}`);
  }

  updateAdherant(adherant: Adherant) {
    return this.http.patch<Adherant>(
      `${this.BASE_URL}/adherant/${adherant._id}`,
      {
        ...adherant,
      }
    );
  }

  //   articles
  getArchivedArticle() {
    return this.http.get<Article[]>(`${this.BASE_URL}/posts?isArchived=true`);
  }

  getArticles() {
    return this.http.get<Article[]>(`${this.BASE_URL}/posts?isArchived=false`);
  }

  getAllArticles() {
    return this.http.get<Article[]>(`${this.BASE_URL}/posts`);
  }

  getArticleAlaUne() {
    return this.http
      .get<Article[]>(`${this.BASE_URL}/posts?isAlaUne=true`)
      .pipe(map((arts) => arts[0]));
  }

  mettreAlaUneArticle(_id: string, isAlaUne: boolean) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${_id}`, {
      isAlaUne,
      dateAlaUne: new Date(),
    });
  }

  archiverArticle(_id: string, isArchived: boolean) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${_id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }
  getArticlesByCat(catId: string) {
    return this.http.get<Article[]>(`${this.BASE_URL}/posts/`).pipe(
      map((posts) => {
        return posts.filter((post) => post?.cats?.includes(catId));
      })
    );
  }
  getArticle(_id: string) {
    return this.http.get<Article>(`${this.BASE_URL}/posts/${_id}`);
  }

  addArticle(article: Article) {
    return this.http.post<Article>(`${this.BASE_URL}/posts`, article);
  }

  editArticle(article: Article) {
    return this.http.patch<Article>(
      `${this.BASE_URL}/posts/${article._id}`,
      article
    );
  }

  deleteArticle(_id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/posts/${_id}`);
  }

  addComment(
    article: Article,
    comment: Commentaire,
    currentUserId: string,
    articleId: string
  ) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${articleId}`, {
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
    });
  }

  /** Categories */
  getCategory(_id: string) {
    return this.http.get<Categories>(`${this.BASE_URL}/categories/${_id}`);
  }

  archiverCategory(_id: string, isArchived: boolean) {
    return this.http.patch<Categories>(`${this.BASE_URL}/categories/${_id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  addCategory(category: Categories) {
    return this.http.post<Categories>(`${this.BASE_URL}/categories`, category);
  }

  editCategory(category: Categories) {
    return this.http.patch<Categories>(
      `${this.BASE_URL}/categories/${category._id}`,
      category
    );
  }

  getAllCategories() {
    return this.http.get<Categories[]>(`${this.BASE_URL}/categories`);
  }

  deleteCategories(_id: string) {
    return this.http.delete<Categories>(`${this.BASE_URL}/categories/${_id}`);
  }

  /** Users */
  archiverUsers(_id: string, isArchived: boolean) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${_id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  getUser(_id: string) {
    return this.http.get<Users>(`${this.BASE_URL}/users/${_id}`);
  }

  addUser(user: Users) {
    return this.http.post<Users>(`${this.BASE_URL}/users`, user);
  }

  editUser(user: Users) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${user._id}`, user);
  }

  getAllUsers() {
    return this.http.get<Users[]>(`${this.BASE_URL}/users`);
  }

  activerDesactiverUser(_id: string, isActive: boolean) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${_id}`, {
      isActive,
      dateArchivage: new Date(),
    });
  }

  deleteUser(_id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/users/${_id}`);
  }

  /** Membres */
  getAllMembers() {
    return this.http.get<Membre[]>(`${this.BASE_URL}/members`);
  }

  addMembre(membre: Membre) {
    return this.http.post<Membre>(`${this.BASE_URL}/members`, membre);
  }

  getMembreById(_id: string) {
    return this.http.get<Membre>(`${this.BASE_URL}/members/${_id}`);
  }

  editMember(member: Membre) {
    return this.http.patch<Membre>(
      `${this.BASE_URL}/members/${member._id}`,
      member
    );
  }

  deleteMember(_id: string) {
    return this.http.delete<Membre>(`${this.BASE_URL}/members/${_id}`);
  }
}
