import { Injectable } from "@angular/core";
import { Article, Categories, Commentaire } from "./model/article.model";
import { v4 as uuidv4 } from "uuid";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  BASE_URL = "http://localhost:3000";
  constructor(private readonly http: HttpClient) {}

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

  archiver(id: string, isArchived: boolean) {
    return this.http.patch<Article>(`${this.BASE_URL}/posts/${id}`, {
      isArchived,
      dateArchivage: new Date(),
    });
  }

  addCategory(category: Categories) {
    return this.http.post(`${this.BASE_URL}/categories`, category);
  }

  editCategory(category: Categories) {
    return this.http.patch(`${this.BASE_URL}/posts/${category.id}`, category);
  }

  getAllCategories() {
    return this.http.get<Categories[]>(`${this.BASE_URL}/categories`);
  }

  getArticle(id: string) {
    return this.http.get<Article>(`${this.BASE_URL}/posts/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post(`${this.BASE_URL}/posts`, article);
  }

  editArticle(article: Article) {
    return this.http.patch(`${this.BASE_URL}/posts/${article.id}`, article);
  }

  addComment(comment: Commentaire, currentUserId: string, articleId: string) {
    console.log({
      ...comment,
      id: uuidv4(),
      user: {
        id: currentUserId,
        userName: "@Username",
        image: "https://bootdey.com/img/Content/user_3.jpg",
      },
    });
    console.log(`${this.BASE_URL}/posts/${articleId}`);
    return this.http.put(`${this.BASE_URL}/posts/${articleId}`, {
      icon: "test Modification",
    });
  }
}
