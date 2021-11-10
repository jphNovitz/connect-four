This Project is a fork from the [Ania Kubow 's connect four project](https://github.com/kubowania/connect-four)  

#Changes

##Check the winner process

The original process was an array containing all the winning possibilities.  Verifying if the current player is a winner is simple.  
I just have to compare the taken divs for each player with all the winning array's combinations.  
  
My solution is to check for each taken div his siblings.  If three siblings to the right belongs to the same player/color  ... we have a winner  
I used the same methodology in all direction: vertical, diagonal up and diagonal down
  
##Playing  
I changed the base playing system - i ckeck on a div, if there are empty divs under a popup tells me that i can't play this - to 
a simulation of sliding down coins.  
 
##The look
I made a retro 80's look like the packaging remebering my young years.  

____________________________________________________________________________________________________  
  
#Les changements
  
##Vérifier s'il y a un vainqueur  
  
Le système de base était très simple, je stocke toute les combinaisons gagnantes dans un tableau.  Après chaque coup
 on verifie les combinaisons de divs déjà joué avec les combinaisons gagnantes.  Si personne n'a gagné on continue à jouer.
  
Ma solution est de vérifier (pour chaque div si les voisins à droite appartiennent au même joueur. Si les trois suivant sont de la même 'couleur' ... on a un vainqueur.  
Je fais la même chose pour les voisins en verticales, diagonales vers le haut et diagonales vers le bas.  
  
##Le jeu  
Le j'ai remplacé le système de base - je clique sur une div et elle prends la couleur du joueur, si les divs situées en dessous ne sont pas prises alors un popup affiche que cette div ne peux pas être jouées - 
par une simulation de jeton qui tombe.  
  
##Le look  
J'ai fais un look qui ressemble aux boites de jeu de mon enfance.  Pas forcément de bon goût.

