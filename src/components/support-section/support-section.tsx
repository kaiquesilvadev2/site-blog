import { HeartHandshake, icons, PaintbrushVertical, Store } from "lucide-react"
import { SiteContainer } from "../site-Container"
import { BenefitCard } from "../benefit-card"

export const SupportSection = () => {
    return (
        <section className="bg-background py-12">
            <SiteContainer className="px-5 sm:px-4 flex flex-col gap-9 md:gap-12">
                <h2 className="text-gray-100 text-2xl text-center md:text-3xl font-bold max-w-[30.6rem] m-auto">Sua loja de afiliados, simples, do jeito que deveria ser</h2>


                <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
                    <BenefitCard
                        icon={PaintbrushVertical}
                        title="Personalize seu site"
                        description="Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara."
                        className="bg-blue-400"
                    />

                    <BenefitCard
                        icon={Store}
                        title="Venda de qualquer loja"
                        description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
                        className="bg-cyan-300"
                        iconBg="bg-cyan-200"
                    />

                    <BenefitCard
                        icon={HeartHandshake}
                        title="Receba suporte amigável"
                        description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
                        className="bg-blue-400"
                    />

                </div>

            </SiteContainer>
        </section>
    )
}