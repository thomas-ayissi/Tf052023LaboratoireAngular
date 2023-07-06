import { Injectable } from '@angular/core';
import { DataService} from "../interfaces/shared/data-service";

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements DataService{

  import { DataService } from './data.service';

export class UserDataService implements DataService {
  getAll(): any[] {
    // Implémentation pour récupérer tous les utilisateurs
    // Retourne un tableau d'objets représentant les utilisateurs
    // ...
  }

  getById(id: number): any {
    // Implémentation pour récupérer un utilisateur par son identifiant
    // Retourne un objet représentant l'utilisateur avec l'identifiant spécifié
    // ...
  }

  create(data: any): void {
    // Implémentation pour créer un nouvel utilisateur
    // Utilise les données spécifiées pour créer un nouvel utilisateur
    // ...
  }

  update(id: number, data: any): void {
    // Implémentation pour mettre à jour un utilisateur existant
    // Utilise l'identifiant et les données spécifiées pour mettre à jour l'utilisateur
    // ...
  }

  delete(id: number): void {
    // Implémentation pour supprimer un utilisateur
    // Supprime l'utilisateur avec l'identifiant spécifié
    // ...
  }
}


constructor() { }
}
