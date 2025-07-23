import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Promotion } from "@/types/Promocao";
import { IoLogoWhatsapp } from "react-icons/io";
import  Link  from "next/link"

type CarouselCardProps = {
  promo: Promotion;
};

const capitalizeTitle = (text: string) =>
  text.replace(
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );

export function CarouselCard({ promo }: CarouselCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="relative px-2 flex flex-col h-full z-10">
        {/* Imagem */}
        <div
          className="relative w-full mb-2 overflow-hidden rounded-md"
          style={{ paddingBottom: "177.78%" }}
        >
          <Image
            src={promo.image || "/placeholder.svg"}
            alt={promo?.title ?? "Sem descrição"}
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-primary mb-1 tracking-wide">
          {capitalizeTitle(promo.title)}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-muted-foreground flex-grow mb-3 leading-snug">
          {promo.description}
        </p>

        {/* Preço e botão */}
        <div className="flex items-end justify-between mt-auto">
          {/* Preço */}
          <div className="flex flex-col">
            {/* Preço original riscado */}
            <span className="text-xs text-gray-400 line-through">
              R$ {promo.originalPrice},00
            </span>
            {/* Preço com desconto */}
            <span className="text-4xl font-extrabold text-red-600">
              R$ {promo.discountedPrice},00
            </span>
          </div>

          {/* Botão */}
          <Button  asChild className="ml-4 py-3 px-20 min-w-auto md:min-w-32 lg:min-w-40 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md">
            <Link href="https://wa.me/5562985703845?text=Olá! Gostaria de fazer um pedido na Benditta Pizza." >
              Fazer Pedido <IoLogoWhatsapp /> 
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
