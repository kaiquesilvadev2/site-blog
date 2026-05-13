import Image from "next/image"
import { SiteContainer } from "../site-Container"
import { Button } from "../ui/button"
import { ArrowRight, Clock, Store } from "lucide-react"
import { Arrow } from "radix-ui/internal"
import { ButtonCreateStore } from "../button-create-store"

export const HeroSection = () => {
    return (
        <section className="mt-24 pb-10 md:pb-20">
            <SiteContainer className="px-5 sm:px-4">

                <div className="flex">
                    <div className="flex flex-col gap-10 sm:gap-12">


                        <div className="flex flex-col px-7 sm:px-0 gap-[1.4rem]">
                            <h1 className="text-gray-100 font-bold text-center sm:text-left text-heading-lg  lg:text-heading-hg">Venda seus produtos como afiliado em um único lugar</h1>

                            <div className="flex flex-col gap-1 m-auto sm:m-0">
                                <div className="flex gap-3">
                                    <Clock className="w-4 h-4 text-blue-200" />
                                    <p className="text-body-sm text-gray-200">Crie o seu site em menos de 5 minutos</p>
                                </div>

                                <div className="flex gap-3">
                                    <Store className="w-4 h-4 text-blue-200" />
                                    <p className="text-body-sm text-gray-200">Acompanhe e otimize seu negócio online</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3.5 w-fit m-auto sm:m-0">
                            <ButtonCreateStore className="w-auto">Criar loja grátis</ButtonCreateStore>
                            <p className="text-body-xs text-gray-300">Não precisa de cartão de crédito</p>
                        </div>
                    </div>
                    <div  >
                        <Image src="/hero-img.svg" alt="imagem hero" height={541} width={521} className="hidden sm:block" />
                    </div>
                </div>
            </SiteContainer>
        </section>
    )

}