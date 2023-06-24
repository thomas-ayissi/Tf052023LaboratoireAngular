export interface DataService {
  getAll(): any[]; // Méthode pour récupérer tous les éléments de données
  getById(id: number): any; // Méthode pour récupérer un élément de données par son identifiant
  create(data: any): void; // Méthode pour créer un nouvel élément de données
  update(id: number, data: any): void; // Méthode pour mettre à jour un élément de données existant
  delete(id: number): void; // Méthode pour supprimer un élément de données
}
