# CNRD

## Bref

Un blog de la communauté CNRD.

Le blog est un outil de partage de connaissances et de ressources.

## Sous parties

Il se divise categories en trois :

- **Le front** : developper avec angular
- **Le back** : developper avec nodejs
- **La base de données** : Une base de données MongoDB

## Quelques Outils :

- **Depot** : github
- **un serveur dedié** : pour heberger le tout (front, back & db)
- **un serveur de mail** : pour envoyer des mails (peut être)
- **un serveur de chat** : pour discuter (NON)
- **un serveur de téléchargement** : pour télécharger des fichiers (NON)
- **un nom de domaine** : pour accéder au blog (oui)

## Models

### Users

- +id:UUID
- -nom: string
- -prenom: string
- -mail: string
- -role: string in ['SA', 'Admin', 'Editor', 'User', 'Guest']

### categories:

- +id: UUID
- -libelles: string
- -description: text
- -dateAjout: Date
- -dateModification: Date
- #idUser

### artCat:

- +id: UUID
- -idCategory
- -idArticle
- #idUser

articles

- +id: UUID
- -title: string
- -content: text
- -shortContent: text
- -libelles: string
- -auteur: string
- -datePublication: Date 
- -dateModification: Date
- -icon: string
- #idArtCat
- #idUser

Commentaires

- +id: UUID
- -content: string
- -description: text
- -datePublication: Date
- -dateModification: Date
- #idArticles
- #idUser

Reactions

- +id: UUID
- -date: Date
- #idUser
