import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  square_title!: string;
  square_author!: string;
  square_publicationDate!: Date;
  square_reads!: number;
  square_imageURL!: string;
  square_summary!: string;
  square_full_text!: string;

  ngOnInit(): void {
    this.square_title = 'Wim Robberecht (SGRS): «Des hackings visent des infrastructures critiques européennes»';
    this.square_author = 'Louis Colart';
    this.square_publicationDate = new Date();
    this.square_reads = 10;
    this.square_imageURL = '/../assets/pictures/sgrs.jpg'
    this.square_summary = 'Le vice-amiral Wim Robberecht a pris la tête du SGRS en août 2021 suite à la crise « Jürgen Conings ». Son service publie aujourd’hui le tout premier rapport annuel de son histoire.';
    this.square_full_text = 'Le vice-amiral Wim Robberecht, patron du SGRS, est le premier à publier un rapport annuel déclassifié pour son service. Signe d’un besoin d’ouverture et d’affirmation de son service de renseignement dans un monde polarisé. ' +
      'Il vise le doublement de ses effectifs d’ici cinq ans.\n' +
      '\n' +
      'Vous dites que le niveau de la menace de l’espionnage et de l’ingérence étrangère atteint un niveau jamais vu depuis la guerre froide. Comment ça se matérialise concrètement ?\n' +
      '\n' +
      'Depuis la guerre froide, la technologie a considérablement changé. Tous les vecteurs d’une nouvelle «   guerre froide   » qui s’annonce ont changé de nature. ' +
      'Le monde cyber a tellement évolué que l’ingérence via les moyens techniques est bien plus diverse qu’auparavant. Et les acteurs en font usage. ' +
      'Tout ce qu’on décrit sous le vocabulaire erroné de « désinformation » ou de « fake news », pour nous c’est de l’ingérence étrangère par la manipulation de l’information. ' +
      'On utilise pour cela les réseaux sociaux, qui n’existaient tout simplement pas lors de la guerre froide. Les moyens cyber rendent possible de prendre le contrôle des outils d’une firme : sabotages, espionnage et hackings. ' +
      'Il y a des hackings tous les jours. De temps en temps, on pense avoir à faire à des ransomware, mais cela peut dissimuler une tentative d’accès à des infrastructures critiques.'

  }

  /*export class CardComponent {
  constructor(private router: Router) {}

  onClick(articleId: number) {
    // Logique pour ouvrir la page de l'article complet
    this.router.navigate(['/article', articleId]);
  };*/

  onClickReads() {
    this.square_reads++;
  }

  onClick() {
    this.onClick(/*article.id£*/);
  }

}

