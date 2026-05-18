import { SiteContainer } from "@/components/site-Container"
import { Search } from "@/components/search/search"

export default function BlogHero() {
    return (
        <div className="">
            <SiteContainer className="px-5 sm:px-4">
                <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-end">
                    <div className="flex flex-col gap-3 md:max-w-md">
                        <p className="w-fit text-body-xs rounded-[0.2rem] text-cyan-100 font-inter px-3 py-1.5 bg-cyan-300">blog</p>
                        <h1 className="text-heading-lg md:text-heading-xl text-gray-200 font-sans font-bold">Dicas e estratégias para impulsionar seu negócio</h1>
                    </div>

                    <Search />
                </div>
            </SiteContainer>
        </div>
    )
}