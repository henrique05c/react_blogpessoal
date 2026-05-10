import type Postagem from "./postagem";

export default interface tema{
    id: number;
    descricao: string;
    postagem?: Postagem[] | null;
}