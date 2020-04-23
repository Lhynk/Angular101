export interface Pokemon{
    id: number;
    name: string;
    sprite: string;
    description: string;
    art_url?: string;
    types: string[];
    weakness?: string[];
}