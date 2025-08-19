import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Lista de comentários/reviews exibidos no componente MarqueeDemo
const reviews = [
    {
        name: "Michael",
        username: "@michael_pai",
        body: "A pré-escola é maravilhosa! Meu filho adora os professores e aprende muito todos os dias.",
        img: "/pais/michael.png",
    },
    {
        name: "Viviane",
        username: "@viviane_mae",
        body: "Ambiente acolhedor e seguro. Sinto confiança em deixar minha filha aqui.",
        img: "/pais/viviane.jpeg",
    },
    {
        name: "Leticia",
        username: "@leticia_mae",
        body: "Equipe dedicada e atenciosa. Vejo o desenvolvimento do meu filho a cada semana.",
        img: "/pais/leticia.jpeg",
    },
    {
        name: "Bianca",
        username: "@bianca_mae",
        body: "Atividades educativas e recreativas excelentes. Recomendo a todos os pais!",
        img: "/pais/bia.jpeg",
    },
    {
        name: "Gabriela",
        username: "@gabriela_mae",
        body: "Meu filho está sempre feliz e animado para ir à escola. Ótimo trabalho!",
        img: "/pais/gabriela.jpeg",
    },
    {
        name: "Victor",
        username: "@victor_pai",
        body: "A pré-escola faz parte do crescimento do meu filho. Só tenho elogios!",
        img: "/pais/victor.jpeg",
    },
    {
        name: "Danielly",
        username: "@danielly_mae",
        body: "Os professores são muito carinhosos e sempre atentos ao bem-estar das crianças. Estou muito satisfeita!",
        img: "/pais/dani.jpeg",
    },
    {
        name: "Simone",
        username: "@simone_mae",
        body: "A pré-escola é um lugar incrível para as crianças aprenderem e se divertirem. Meu filho adora!",
        img: "/pais/simone.jpeg",
    },
    {
        name: "Natalia",
        username: "@natalia_mae",
        body: "Estou impressionada com a qualidade do ensino e o carinho dos professores. Meu filho está se desenvolvendo muito bem!",
        img: "/pais/natalia.jpeg",
    },
    {
        name: "Luciane",
        username: "@luciane_mae",
        body: "A pré-escola é um lugar seguro e divertido para as crianças. Meu filho sempre volta para casa feliz!",
        img: "/pais/luciane.jpeg",
    },
    {
        name: "Fernando",
        username: "@fernando_pai",
        body: "A equipe é muito profissional e dedicada. Vejo o progresso do meu filho a cada dia.",
        img: "/pais/fernando.jpeg",
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
