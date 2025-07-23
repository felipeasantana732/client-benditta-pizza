import { PromocaoDetail } from "@/types/Promocao";
import { PromocaoSchema } from "@/types/Zod/ItemSchema";
import PromosCarousel from "./PromosCarousel";

function mapApiPromos(apiPromo: PromocaoSchema): PromocaoDetail {
  return {
    id: apiPromo.id,
    nome: apiPromo.nome,
    descricao: apiPromo.descricao ?? null,
    imagem_url_small: apiPromo.image_url_small ?? null,
    preco_original: apiPromo.preco_original ?? null,
    preco_promo: apiPromo.preco_promo ?? null,
    expiration_date: apiPromo.expiration_date ?? null,
    pessoas: apiPromo.pessoas ?? null,
    dias_semana: apiPromo.dias_semana ?? [],
    isDisponivelHoje: apiPromo.isDisponivelHoje ?? false,
  };
}

type props = {
    titulo: string | null,
    descricao: string | null,
    promocoes: PromocaoSchema[] | null;
}


const SecaoPromocoes: React.FC<props> = (props) => {
    const promocoes = props.promocoes;

    const promocoesFormatadas: PromocaoDetail[] = promocoes?.map(mapApiPromos) ?? [] ;

    return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">{props.titulo}</h2>
        {props.descricao && <p className="text-muted-foreground max-w-2xl mx-auto">{props.descricao}</p>}
      </div>
     <div className="relative overflow-visible">
        <PromosCarousel promocoes={promocoesFormatadas} />
      </div>
    </section>
  )
}   

export default SecaoPromocoes;