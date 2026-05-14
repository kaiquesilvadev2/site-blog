import { Store } from "lucide-react"
import { ButtonCreateStore } from "../button-create-store"
import { SiteContainer } from "../site-Container"


export const CallToAction = () => {
    return (
        <section className="bg-linear-180 from-blue-400/25">
            <SiteContainer className="px-5 sm:px-4">
                <div className=" relative
                flex flex-col gap-8 md:gap-10 justify-center items-center py-14 md:py-20
               
                ">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-3.5 md:p-4 bg-cyan-300 w-fit rounded-full">
                        <Store className="h-7 md:h-8 w-7 md:w-8 text-cyan-100" />
                    </div>
                    <h2 className="text-gray-100 text-2xl text-center md:text-3xl font-bold max-w-[30.6rem] m-auto">Crie uma loja online e inicie suas vendas ainda hoje</h2>
                    <ButtonCreateStore className=" flex gap-2 w-fit">Criar loja grátis</ButtonCreateStore>
                </div>
            </SiteContainer>
        </section>
    )
}