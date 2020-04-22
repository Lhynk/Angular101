export interface IPokemon {
  id: number;
  name: string;
  sprite: string;
  description: string;
  art_url?: string;
  types: string[];
  weak_to?:string[];
  art_urlA?: string;
}
//si intentan agregar una propiedad que no estra dentro de al interfaz, marcara error donde se intenta implementar
//tambien maracara error si no tiene todas las propiedades agregadas
//propiedad?: hace que sea opcional esa propiedad