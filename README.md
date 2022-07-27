# Quiz

=Fonctionnalités 
=

==Validations du champ nom du formulaire

Etant sur la page d'accueil du Quiz,
Quand je clique sur le bouton commencer sans avoir renseigné mon nom,
Alors je reçois un message me demandant de renseigner mon nom.

Etant sur la page d'accueil du Quiz,
Quand je clique sur le bouton commencer alors que j’ai renseigné un nom qui contient moins de deux caractères,
Alors je reçois un message me demandant de renseigner un nom d’au moins deux caractères.


==Validations du champ Email du formulaire

Etant sur la page d'accueil du Quiz,
Quand je clique sur le bouton Commencer sans avoir renseigné mon adresse email,
Alors je reçois un message me demandant de renseigner mon adresse email.

Etant sur la page d'accueil du Quiz,
Quand je clique sur le bouton commencer alors que j’ai renseigné une adresse email *invalide,
Alors je reçois un message me demandant de renseigner une adresse email valide.

*Adresse email valide = XXX@XXX.XXX


==Commencer le Quiz

Etant sur la page d'accueil du Quiz,
Quand je clique sur le bouton commencer et que j’ai renseigné un nom et une adresse email valide,
Alors je suis redirigé vers la première question du QUIZ.


==Time Over
Étant sur la page d’une question,
Quand le temps est écoulé,
Alors je suis redirigé vers la prochaine et ma réponse actuelle est prise en compte.

==Choisir une réponse

Étant sur la page d’une question,
Quand je choisis une réponse,
Alors ma réponse est mise en surbrillance.

==Bouton suivant

Étant sur la page d’une question,
Quand je clique sur le bouton Suivant,
Alors je suis redirigé vers la prochaine et ma réponse actuelle est prise en compte.

==Bouton Quitter

Étant sur la page d’une question,
Quand je clique sur le bouton Quitter,
Alors je suis redirigé vers les résultats du Quiz et toutes les questions restant du quiz sont considérées comme non répondues.

==Bouton suivant (fin du Quiz)

Étant sur la page de la dernière question du Quiz,
Quand je clique sur le bouton « Terminer »,
Alors je suis redirigé vers les résultats du Quiz.

==Bouton Accueil

Étant sur la page des résultats du Quiz,
Quand je clique sur le bouton « accueil »,
Alors je suis redirigé vers la page d'accueil du Quiz et les champs du formulaire sont réinitialisés.

