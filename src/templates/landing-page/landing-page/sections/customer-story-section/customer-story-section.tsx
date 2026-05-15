import { SiteContainer } from "@/components/site-Container"
import Image from "next/image"

const testimonials = [
    {
        id: 1,
        feedback:
            "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A",
        authorName: "Annette Bones",
        authorRole: "CEO na Anne Corp",
        urlImg: "/Annette.png"

    },
    {
        id: 2,
        feedback:
            "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
        authorName: "Jacob Jones",
        authorRole: "CEO na JJ Org",
        urlImg: "/Jacob.png"
    },
]

export const CustomerStorySection = () => {
    return (
        <section>
            <SiteContainer className="px-5 sm:px-4">
                <div className="flex flex-col gap-8 md:gap-12 py-20 md:py-32">
                    <h2 className="font-sans text-gray-100 text-2xl text-center md:text-3xl font-bold">Quem utiliza, aprova!</h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                        {testimonials.map(itens => (
                            <div key={itens.id} className="p-6 md:p-10 rounded-xl bg-gray-600 border border-gray-100/10 flex flex-col gap-8 md:gap-10 flex-1">
                                <p className="text-action-md text-gray-200/80 leading-6">
                                    {itens.feedback}
                                </p>

                                <div className="flex gap-3 items-center">
                                    <Image
                                        className="h-9 w-9 rounded-full border border-blue-200"
                                        src={itens.urlImg} height={36} width={36} alt={itens.authorName}
                                    />
                                    <div>
                                        <p className="text-sm text-gray-200/90">
                                            {itens.authorName}
                                        </p>
                                        <p className="text-body-xs text-gray-300/80">
                                            {itens.authorRole}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}</div>

                </div>
            </SiteContainer>
        </section>)
}