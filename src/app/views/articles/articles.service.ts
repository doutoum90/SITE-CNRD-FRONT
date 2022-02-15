import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Article, Commentaire } from "./model/article.model";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  articles: Article[] = [
    {
      id: "ABSDDSDSD",
      title: "Data structure test",
      isArchived: true,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      datePublication: new Date("23 December 2019"),
      icon: "view_week",
      commentaires: [
        {
          id: "gheghergreh",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_1.jpg",
            userName: "@MartinoMon",
          },
        },
        {
          id: "gheghergreh",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_2.jpg",
            userName: "@LaurenceCorreil",
          },
        },
        {
          id: "gheghergreh",
          content: ` Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_3.jpg",
            userName: "@JohnNida",
          },
        },
      ],
    },
    {
      id: "ABSDDSDSDdfddf",
      title: "Design pattern",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      isArchived: true,
      datePublication: new Date("24 December 2019"),
      icon: "library_books",
    },
    {
      id: "xyxyxyxyxyxyxyxy",
      title: "Algorithm test",
      isArchived: true,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      datePublication: new Date("24 December 2019"),
      icon: "games",
    },
    {
      id: "xyxyzwyzxyzwyzxyz",
      title: "Code organizing",
      isArchived: true,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      datePublication: new Date("27 December 2019"),
      icon: "library_books",
    },
    {
      id: "jrejherhrej",
      title: "Data structure test",
      isArchived: false,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      datePublication: new Date("23 December 2019"),
      icon: "view_week",
      commentaires: [
        {
          id: "gheghergreh",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_1.jpg",
            userName: "@MartinoMon",
          },
        },
        {
          id: "gheghergreh",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_2.jpg",
            userName: "@LaurenceCorreil",
          },
        },
        {
          id: "gheghergreh",
          content: ` Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.`,
          datePublication: new Date("23 December 2019"),
          auteur: "John Doe",
          user: {
            id: "gheghergreh",
            image: "https://bootdey.com/img/Content/user_3.jpg",
            userName: "@JohnNida",
          },
        },
      ],
    },
    {
      id: "jrejherhrejefjhreher",
      title: "Design pattern test",
      isArchived: false,
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p><br></p>",
      shortContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, recusandae! Modi fuga fugit quo aut optio odit harum cum, enim ipsa illo reprehenderit nulla itaque omnis odio magni deserunt ipsum!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi consequuntur totam provident molestias laboriosam quia illum? Dolorum illo, nobis suscipit placeat vero voluptatem tenetur totam pariatur quaerat deleniti molestiae?</p>",
      datePublication: new Date("24 December 2019"),
      icon: "library_books",
    },
  ];
  constructor() {}

  getArchivedArticle() {
    return of(this.articles.filter((article) => article.isArchived === true));
  }

  getArticles() {
    return of(this.articles.filter((article) => article.isArchived === false));
  }

  getArticle(id: string) {
    return of(this.articles.find((article) => article.id === id));
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
    this.articles.forEach((article) => {
      if (article.id === articleId) {
        article.commentaires.push({
          ...comment,
          id: uuidv4(),
          user: {
            id: currentUserId,
            userName: "@Username",
            image: "https://bootdey.com/img/Content/user_3.jpg",
          },
        });
      }
    });
  }
}
