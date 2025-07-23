"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PromocaoDetail } from "@/types/Promocao";
import PromocaoCard from "./PromocaoCard";
import styled from "styled-components";

interface PromosCarouselProps {
  promocoes: PromocaoDetail[];
}

const StyledSwiperContainer = styled.div`
  position: relative;
  overflow: visible;

  .swiper {
    position: relative;
    padding-bottom: 40px;
    overflow: visible;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-accent-yellow-benditta);
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 70px;
    z-index: 10;
    position: absolute;
  }

  .swiper-button-prev {
    left: -35px; /* Ajuste essa distância como quiser */
  }

  .swiper-button-next {
    right: -35px; /* Ajuste essa distância como quiser */
  }

  .swiper-pagination-bullet-active {
    background-color: black;
  }

  /* Estilos para posicionar a paginação abaixo das imagens */
  .swiper {
    position: relative;
    padding-bottom: 40px; /* Adiciona espaço na parte inferior do carrossel */
  }

  .swiper-pagination {
    bottom: 0; /* Posiciona a paginação no final do padding */
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    position: absolute;
  }
`;

const PromosCarousel: React.FC<PromosCarouselProps> = ({ promocoes }) => {
  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full pb-10"
      >
        {promocoes.map((promocao) => (
          <SwiperSlide key={promocao.id} className="pb-2">
            <PromocaoCard promo={promocao} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default PromosCarousel;
