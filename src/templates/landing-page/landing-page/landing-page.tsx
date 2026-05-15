import { CallToAction, CustomerStorySection, FeatureSection, SupportSection } from "./sections"
import { HeroSection } from "./sections/hero-section/hero-section"


export const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
            <CallToAction />
        </>
    )
}