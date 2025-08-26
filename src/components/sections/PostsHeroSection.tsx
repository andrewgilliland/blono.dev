import Circle from "@/components/icons/Circle";
import Container from "@/components/layout/Container";

const PostsHeroSection = () => {
    return (
        <section id="hero">
            <Container>
                <div className="flex justify-center items-center flex-col md:flex-row mt-20 gap-12 md:gap-20">
                    <div className="relative">
                        <Circle
                            size={434}
                            className="absolute fill-purp-dark -translate-x-[325px] -translate-y-[325px] opacity-20"
                        />
                        <Circle
                            size={100}
                            className="absolute fill-purp-dark translate-x-32 -translate-y-12 opacity-20"
                        />
                        <Circle
                            size={100}
                            className="absolute fill-purp-dark translate-x-36 translate-y-20 opacity-20"
                        />
                        <h1 className="relative">Developer Blog</h1>
                    </div>
                    <div className="relative group flex w-full md:w-1/2">
                        <Circle
                            size={250}
                            className="absolute fill-theme-indigo -translate-x-5 md:-translate-y-20 opacity-20"
                        />
                        <p className="relative font-semibold text-2xl text-white md:mt-10">
                            Blogs authored by the Bloomington-Normal developer community
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PostsHeroSection;
