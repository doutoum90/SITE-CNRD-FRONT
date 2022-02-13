import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  archivedArticle = [
    {
      title: "Data structure test",
      date: "23 December 2019",
      icon: "view_week",
    },
    {
      title: "Design pattern test",
      date: "24 December 2019",
      icon: "library_books",
    },
    {
      title: "Algorithm test",
      date: "24 December 2019",
      icon: "games",
    },
    {
      title: "Code organizing test",
      date: "27 December 2019",
      icon: "library_books",
    },
  ];

  articles = [
    {
      id: "jrejherhrej",
      title: "Data structure test",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.`,
      shortContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam",
      date: "23 December 2019",
      icon: "view_week",
    },
    {
      id: "jrejherhrejefjhreher",
      title: "Design pattern test",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam
          dolor, sint, labore ipsam eveniet dolorum mollitia accusamus eum earum
          laboriosam recusandae nemo nulla reiciendis pariatur obcaecati? Vero,
          dicta saepe.`,
      shortContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam",
      date: "24 December 2019",
      icon: "library_books",
    },
  ];
  constructor() {}

  getArchivedArticle() {
    return of(this.archivedArticle);
  }

  getArticles() {
    return of(this.articles);
  }

  getArticle(id: string) {
    return of(this.articles.find((article) => article.id === id));
  }
}
