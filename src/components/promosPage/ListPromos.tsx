'use client';

import { useEffect, useState } from 'react';
import SecaoPromocoes from '../carousel/Promos/promosPage/SecaoPromocoes';
import { z } from 'zod';
import CatPromoSchema, {
  CategoriaPromoSchema,
} from '@/types/Zod/ItemSchema';
import { ReloadIcon } from '@radix-ui/react-icons';
import mockData from './mocksPromo.json';
import { X } from 'lucide-react';

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

const ListPromos: React.FC = () => {
  const [categorias, setCategorias] = useState<CategoriaPromoSchema[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromocoes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = mockData;
        const cats = Object.values(data?.categorias ?? {});
        const parsed = z.array(CatPromoSchema).safeParse(cats);

        if (!parsed.success) {
          throw new Error(
            'Resposta inválida do servidor. Veja os logs para detalhes.'
          );
        }

        setCategorias(parsed.data);
      } catch (err) {
        console.error('Error fetching promos:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromocoes();
  }, []);

  const normalizeDia = (dia: string) =>
    dia
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .charAt(0).toUpperCase() +
    dia
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .slice(1)
      .toLowerCase();


  const diaAtual = getDiaSemanaAtual();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🔥 Promoções Imperdíveis
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Aproveite nossas ofertas especiais e economize em seus pratos
            favoritos!
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12 space-y-16">
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
          categorias.length > 0 &&
          categorias.map((categoria) => (
            <div key={categoria.id}>
              {categoria.promocoes && categoria.promocoes.length > 0 ? (
                <SecaoPromocoes
                  titulo={categoria.nome}
                  promocoes={categoria.promocoes
                    .map((promo) => {
                      const diasDisponiveis = promo.dias_semana?.map((dia) => {
                        const normalizado = normalizeDia(dia);
                        return diasSemanaMap[normalizado];
                      });
                      const isDisponivelHoje =
                        diasDisponiveis?.includes(diaAtual);
                      return { ...promo, isDisponivelHoje };
                    })
                    .sort((a, b) =>
                      a.isDisponivelHoje === b.isDisponivelHoje
                        ? 0
                        : a.isDisponivelHoje
                          ? -1
                          : 1
                    )}
                  descricao={categoria.descricao}
                />
              ) : (
                <section className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">{categoria.nome}</h2>
                    {categoria.descricao && (
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        {categoria.descricao}
                      </p>
                    )}
                  </div>
                  <div className="text-center text-muted-foreground py-10">
                    <X className="h-8 w-8 mx-auto mb-2" />
                    <p>
                      Sem promoções disponíveis nesta categoria no momento.
                    </p>
                  </div>
                </section>
              )}
            </div>
          ))}
      </div>

      {/* Footer da página */}
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            ⏰ Promoções válidas por tempo limitado. Não perca!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListPromos;
