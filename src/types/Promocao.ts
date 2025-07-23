import { itensCardapio } from "./ItemCardapio";

export interface Promocao {
    id: string ,
    nome: string , 
    descricao: string | null,
    imagem_url: string | null,
    image_url_small: string | null,
    created_at: string ,
    expiration_date:string | null,
    active : boolean | null,
    preco_original: string | null ,
    preco_promo: string | null,
    pessoas: string | null,
    itensCardapio : itensCardapio[];
  }

  export interface Promotion{
    id: string,
    title: string ,
    description: string | null,
    image: string | null,
    originalPrice: string | null,
    discountedPrice: string | null,
    

  }

  export interface RelacaoCategoriaPromo{
    promo_id : string,
    categoria_id : string,
  }

  export interface CategoriaPromocoes{
    id: string,
    nome:string,
    descricao: string;
    rank: number;
    promocoes: Promocao[]
  }

  export interface PromocaoDetail{
    id: string ,
    nome: string | null, 
    descricao: string | null,
    imagem_url_small: string | null,
    expiration_date:string | null,
    preco_original: string | null ,
    preco_promo: string | null,
    pessoas: string | null,
    dias_semana: string[]
    isDisponivelHoje: boolean
  }