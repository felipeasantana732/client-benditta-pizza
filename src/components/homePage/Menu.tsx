//import { Promotion } from "@/app/types/Promotion"
import styled from "styled-components";
import PDFViewer from "./PDFViewer";
import Link from "next/link";
import Carousel from "@/components/carousel/Promos/promosHome/Carousel";
import styles from "./styleBenditta.module.css";
import {  Promotion } from "@/types/Promocao";
import { useEffect, useState } from "react";
import mockData from "../promosPage/mocksPromo.json";
import { ReloadIcon } from "@radix-ui/react-icons";
import Insta from "./Insta";
import PizzaMenuCard from "./borda-card";
import CatPromoSchema, { PromocaoSchema } from "@/types/Zod/ItemSchema";
import z from "zod";

const diasSemanaMap: { [key: string]: number } = {
  Domingo: 0,
  Segunda: 1,
  Terca: 2,
  Quarta: 3,
  Quinta: 4,
  Sexta: 5,
  Sabado: 6,
};

const getDiaSemanaAtual = () => new Date().getDay();

function mapApiPromo(apiPromo: PromocaoSchema): Promotion {
  return {
    id: apiPromo.id,
    title: apiPromo.nome,
    description: apiPromo.descricao ?? null,
    image: apiPromo.imagem_url ?? null,
    originalPrice: apiPromo.preco_original ?? null,
    discountedPrice: apiPromo.preco_promo ?? null,
  };
}

const MenuContainer = styled.section`
  background-color: var(--color-gray-benditta);
  padding: 100px 0 20px 0;
`;

const ViewAllPromosLink = styled(Link)`
  display: block;
  margin-top: 20px;
  text-align: center;
  font-size: 1rem;
  color: var(--color-dark-gray-benditta-light);
  text-decoration: underline;
`;

const MenuContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--color-accent-yellow-benditta);
  }
`;

const MenuDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: var(--color-dark-gray-benditta);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const MenuPDFContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu: React.FC = () => {
  const [promocao, setPromocao] = useState<Promotion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMockData = () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = mockData;
        const cats = Object.values(data?.categorias ?? {});
        const categoriasArray = z.array(CatPromoSchema).safeParse(cats);

         if (!categoriasArray.success) {
          throw new Error(
            'Resposta inválida do servidor. Veja os logs para detalhes.'
          );
        }

        const diaAtual = getDiaSemanaAtual();

        const promocoesArray = categoriasArray.data.flatMap((categoria) =>
          (categoria.promocoes ?? [])
            .filter((promo) => {
              const diasDisponiveis = promo.dias_semana?.map((dia) =>
                diasSemanaMap[dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase()]
              );
              const isDisponivelHoje = diasDisponiveis?.includes(diaAtual);
              return promo.active && isDisponivelHoje;
            })
            .map(mapApiPromo)
        );

        setPromocao(promocoesArray);
      } catch (err) {
        console.error("Error loading mock data:", err);
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    };

    loadMockData();
  }, []);

  return (
    <MenuContainer id="cardapio">
      <MenuContent>
        <SectionTitle>Nosso Cardápio</SectionTitle>
        <MenuDescription>
          Conheça nossas deliciosas opções de pizzas, preparadas com
          ingredientes selecionados e nossa exclusiva massa tradicional italiana
          com 48 horas de fermentação.
        </MenuDescription>

        <MenuPDFContainer>
          <PDFViewer />
        </MenuPDFContainer>

        <main className="  bg-gray-100 pt-10   mt-3 mb-0">
          <div className="container mx-auto w-full">
            <PizzaMenuCard />
          </div>
        </main>

  

      <main className={`${styles.container} mx-auto `}>
        {isLoading && (
          <div className="container mx-auto py-6 px-4 text-center">
            <>
            <ReloadIcon className="mr-auto h-4 w-4 animate-spin ml-auto" />
            </>
            Carregando...
          </div>
        )}
        {error && <p>Erro: {error}</p>}
        {!isLoading &&
          !error &&
          promocao.length > 0 &&
              <Carousel items={promocao} />
        }
      </main>
  
      <ViewAllPromosLink href="/promos">
        Ver todas as promoções
      </ViewAllPromosLink>
      <Insta />
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;