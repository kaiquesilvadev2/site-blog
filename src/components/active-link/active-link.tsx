import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

// Cria um tipo para o componente.
// children = conteúdo dentro da tag.
// LinkProps = todas as props que o componente Link aceita.
type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps

export default function ActiveLink({
    children,
    href,
    ...rest // pega o restante das props do Link
}: ActiveLinkProps) {

    // Hook do Next para acessar informações da rota atual
    const router = useRouter();

    // Verifica se o link corresponde à página atual
    const isCurrentPath =
        router.asPath == href || // rota atual igual ao href
        router.asPath == rest.as  // rota atual igual ao "as"

    return (
        <Link
            href={href}

            // Junta classes CSS dinamicamente
            className={cn('text-sm font-medium transition-colors hover:text-blue-300 ',

                // se a rota estiver ativa aplica azul
                // senão aplica cor padrão
                isCurrentPath
                    ? 'text-blue-200'
                    : 'text-gray-200'
            )}

            // espalha outras props do Link
            {...rest}
        >
            {children}
        </Link>
    )
}