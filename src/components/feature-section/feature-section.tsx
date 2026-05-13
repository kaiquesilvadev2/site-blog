import Image from "next/image"
import { FeatureCard } from "../feature-card"
import { SiteContainer } from "../site-Container"
import { Button } from "../ui/button"
import { ButtonCreateStore } from "../button-create-store"
import { FeatureContent } from "../feature-content"

export const FeatureSection = () => {
    return (
        <section className="py-10 md:py-20">
            <SiteContainer className="px-5 sm:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

                    <FeatureContent>
                        <FeatureCard badge="simples" title="Crie um catálogo de produtos online em poucos minutos" />
                    </FeatureContent>

                    <FeatureContent>
                        <FeatureCard badge="prático" title="Venda para seu público através de uma plataforma única" />
                    </FeatureContent>

                    <FeatureContent className=" md:col-span-2 flex flex-col gap-8 md:flex-row md:gap-20">
                        <div className="flex-1 flex flex-col justify-between">
                            <FeatureCard badge="personalizável" title="enha uma loja online personalizada com a cara da sua marca" />
                            <ButtonCreateStore className="hidden md:flex w-fit">Criar loja grátis </ButtonCreateStore>
                        </div>

                        <div className="flex-1">
                            <Image src="./feature-section.svg" alt="imagem do cardi" height={200} width={400} className="w-full" />
                        </div>
                        <ButtonCreateStore className="w-full md:hidden">Criar loja grátis </ButtonCreateStore>

                    </FeatureContent>

                </div>
            </SiteContainer>
        </section>
    )
}