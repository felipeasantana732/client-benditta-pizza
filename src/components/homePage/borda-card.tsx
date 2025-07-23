import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import styled from "styled-components";

interface PizzaMenuCardProps {
  className?: string
}

const BordaTitle = styled.h2`
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
  margin-bottom: 0.5rem; /* mb-2 */
  color: var(--color-accent-yellow-benditta);
  position: relative;
  display: block;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: white;

    @media (min-width: 768px) {
      left: 0;
      transform: none;
    }
  }
`;


export default function PizzaMenuCard({ className = "" }: PizzaMenuCardProps) {
  const flavors = ["Catupiry", "Mussarela", "Cheddar", "Chocolate"]

  return (
    <div className={`w-full mx-auto relative ${className}`}>
      <Card className="bg-gray-900 text-white rounded-3xl overflow-visible shadow-lg relative z-0">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row md:items-center relative">
            {/* Circular landscape image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:absolute md:left-4 md:top-1/2 md:transform md:-translate-y-1/2 md:-ml-8 md:translate-x-0">
              <div className="w-32 h-32 lg:w-52 lg:h-52  md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400">
                <Image
                  src="/img/bendittaPizza/borda-choc.png"
                  alt="Borda de pizza Recheada"
                  width={148}
                  height={148}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content section */}
            <div className="w-[85%]  mx-auto pt-16 px-4 py-4 md:w-[85%] md:ml-[20%] md:p-6 md:pt-6">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                {/* Left section - Title and flavors */}
                <div className="flex-1">
                  <h2 className="text-sm lg:text-left md:text-left text-center font-medium mb-1">Incremente sua pizza com</h2>
                  <BordaTitle >Borda Recheada</BordaTitle>
                  
                  {/* <h3 className="text-lg lg:text-left md:text-left text-center font-bold mb-2">Borda Recheada</h3> */}

                  <div className="flex flex-col space-y-2 items-center md:flex-row md:items-center md:gap-4 md:space-y-0">
                    <span className="text-xs mt-0 md:mt-4 lg:mt-4 font-semibold">Sabores:</span>
                    <div className="flex mt-0 md:mt-4 lg:mt-4 items-center  gap-3">
                      {flavors.map((flavor, index) => (
                        <span key={index} className="text-xs flex items-center">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></span>
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right section - Pricing */}
                <div className="flex justify-center gap-6 ">
                  <div className="text-center flex-1 sm:flex-auto min-w-[8rem]">
                    <p className="text-xs text-gray-300 mb-1">Pizza Individual</p>
                    <p className="text-xl font-bold  text-black  bg-yellow-400 rounded-full p-3">
                      10 <span className="text-xs text-gray-500">R$</span>
                    </p>
                  </div>
                  <div className="text-center flex-1 sm:flex-auto min-w-[8rem]">
                    <p className="text-xs text-gray-300 mb-1">Pizza   Grande  </p>
                    <p className="text-xl font-bold  text-black  bg-yellow-400 rounded-full p-3">
                      15 <span className="text-xs text-gray-500">R$</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
