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
  BASE_URL = "http://localhost:3000";
  constructor(private readonly http: HttpClient) {}
  /* addAdherant */
  addAdherant(adherant: Adherant) {
    return this.http.post<Adherant>(`${this.BASE_URL}/adherant`, adherant);
  }

  getAllAdherants() {
    return this.http.get<Adherant[]>(`${this.BASE_URL}/adherant`);
  }

  getAllAdherantById(id: string) {
    return this.http.get<Adherant>(`${this.BASE_URL}/adherant/${id}`);
  }

  deleteAdherant(id: string) {
    return this.http.delete<Adherant>(`${this.BASE_URL}/adherant/${id}`);
  }

  updateAdherant(adherant: Adherant) {
    console.log(adherant)
    return this.http.patch<Adherant>(
      `${this.BASE_URL}/adherant/${adherant.id}`,
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
    return this.http.get<Article[]>(
      `${this.BASE_URL}/posts?isArchived=false&?_page=1&_limit=10`
    );
  }

  getAllArticles() {
    return this.http.get<Article[]>(
      `${this.BASE_URL}/posts?_page=1&_limit=100`
    );
  }

  getArticleAlaUne() {
    return this.http.get<Article[]>(`${this.BASE_URL}/posts?isAlaUne=true`);
  }

  mettreAlaUneArticle(id: string, isAlaUne: boolean) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${id}`, {
      isAlaUne,
      dateAlaUne: new Date(),
    });
  }

  archiverArticle(id: string, isArchived: boolean) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${id}`, {
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
  getArticle(id: string) {
    return this.http.get<Article>(`${this.BASE_URL}/posts/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post<Article>(`${this.BASE_URL}/posts`, article);
  }

  editArticle(article: Article) {
    return this.http.patch<Article>(
      `${this.BASE_URL}/posts/${article.id}`,
      article
    );
  }

  deleteArticle(id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/posts/${id}`);
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
          id: uuidv4(),
          user: {
            id: currentUserId,
            userName: "@Username",
            image: "https://bootdey.com/img/Content/user_3.jpg",
          },
        },
      ],
    });
  }
  // Categories
  getCategory(id: string) {
    return this.http.get<Categories>(`${this.BASE_URL}/categories/${id}`);
  }

  archiverCategory(id: string, isArchived: boolean) {
    return this.http.patch<Categories>(`${this.BASE_URL}/categories/${id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  addCategory(category: Categories) {
    return this.http.post<Categories>(`${this.BASE_URL}/categories`, category);
  }

  editCategory(category: Categories) {
    return this.http.patch<Categories>(
      `${this.BASE_URL}/categories/${category.id}`,
      category
    );
  }

  getAllCategories() {
    return this.http.get<Categories[]>(`${this.BASE_URL}/categories`);
  }

  deleteCategories(id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/categories/${id}`);
  }

  /** Users */

  archiverUsers(id: string, isArchived: boolean) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  getUser(id: string) {
    return this.http.get<Users>(`${this.BASE_URL}/users/${id}`);
  }

  addUser(user: Users) {
    return this.http.post<Users>(`${this.BASE_URL}/users`, user);
  }

  editUser(user: Users) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${user.id}`, user);
  }

  getAllUsers() {
    return this.http.get<Users[]>(`${this.BASE_URL}/users`);
  }

  activerDesactiverUser(id: string, isActive: boolean) {
    return this.http.patch<Users>(`${this.BASE_URL}/users/${id}`, {
      isActive,
      dateArchivage: new Date(),
    });
  }

  deleteUser(id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/users/${id}`);
  }
  /** Membres */
  getAllMembers() {
    return this.http.get<Membre[]>(`${this.BASE_URL}/members`);
  }

  addMembre(membre: Membre) {
    return this.http.post<Membre>(`${this.BASE_URL}/members`, membre);
  }

  getMembreById(id: string) {
    return this.http.get<Membre>(`${this.BASE_URL}/members/${id}`);
  }

  editMember(member: Membre) {
    return this.http.patch<Membre>(
      `${this.BASE_URL}/members/${member.id}`,
      member
    );
  }

  deleteMember(id: string) {
    return this.http.delete<Users>(`${this.BASE_URL}/members/${id}`);
  }
}
