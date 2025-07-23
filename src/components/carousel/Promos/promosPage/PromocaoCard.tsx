import { PromocaoDetail } from "@/types/Promocao";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IoLogoWhatsapp, IoMdPerson } from "react-icons/io";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart, X } from "lucide-react";
import Link from "next/link"
import Image from "next/image";

type props = {
  promo: PromocaoDetail;
};

const PromocaoCard: React.FC<props> = (props) => {
  const promocaoDetail = props.promo;

  const precoOriginalNumber = Number(promocaoDetail.preco_original);
  const precoPromoNumber = Number(promocaoDetail.preco_promo);
  const diferencaPreco = precoOriginalNumber - precoPromoNumber;

  const desconto = Math.round((diferencaPreco * 100) / precoOriginalNumber);

  const diasSemanaTexto = promocaoDetail.dias_semana?.join(', ');

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden p-0">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={promocaoDetail.imagem_url_small || "/placeholder.svg"}
            alt={promocaoDetail.nome || " "}
            width={300}
            height={200}
            className={`w-full object-contain group-hover:scale-105 transition-transform duration-300 ${
              !promocaoDetail.isDisponivelHoje && "grayscale"
            }`}
          />

          {promocaoDetail.isDisponivelHoje ? (
            <span className="relative bg-green-500 text-white p-2 left-4 border-b-2">
              Disponível Hoje!
            </span>
          ) : (
            <span className="relative bg-gray-500 text-white p-2 left-4 border-b-2">
              Somente {diasSemanaTexto}
            </span>
          )}

          <div className="">
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              -{desconto.toString()}%
            </Badge>

            <Button
              size="icon"
              variant="outline"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="space-y-1 min-h-[10rem] flex flex-col justify-between">
          <h3 className="font-semibold text-lg line-clamp-1 mb-2">
            {promocaoDetail.nome}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-4 min-h-[5.5rem]">
            {promocaoDetail.descricao}
          </p>

          <p
            className="text-xs text-blue-600 font-medium flex min-h-[1.25rem]"
            style={{
              visibility: promocaoDetail.pessoas ? "visible" : "hidden",
            }}
          >
            {promocaoDetail.pessoas}
            <IoMdPerson className="ml-2" />
          </p>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">
              R$ {Number(promocaoDetail.preco_promo).toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              R$ {Number(promocaoDetail.preco_original).toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {promocaoDetail.isDisponivelHoje ? (
          <Button asChild className="w-full" size="sm">
            <Link href="https://wa.me/5562985703845?text=Olá! Gostaria de fazer um pedido na Benditta Pizza."  >Fazer Pedido <IoLogoWhatsapp /></Link>
          </Button>
          
        ) : (
          <Button className="w-full bg-gray-500 text-white" size="sm" disabled>
            <X className="h-4 w-4 mr-2" />
            Indisponível
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PromocaoCard;