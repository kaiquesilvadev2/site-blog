import Image from "next/image";
import Link from "next/link";

interface Author {
    imgUser: string
    nameUser: string
}

interface PostCardProps {
    datePost: string,
    imgPost: string,
    title: string,
    description: string,
    author: Author
}

export default function PostCard({ datePost, imgPost, title, description, author: { imgUser, nameUser } }: PostCardProps) {
    return (
        <Link href="/blog/" className="flex flex-col gap-2 p-2 rounded-xl border border-gray-400 bg-gray-600 hover:border-blue-300 transition-all duration-300  ">
            <div className="relative">
                <div className="absolute top-0 right-0 bg-gray-600 text-body-xs text-gray-300 px-2.5 py-1.5 rounded-bl-[10px] rounded-tr-md">
                    {datePost}
                </div>
                <Image
                    src={imgPost}
                    alt={title}
                    width={342}
                    height={144}
                    className="h-40 w-full rounded-t-md object-cover object-center"
                />

            </div>
            <div className="flex flex-col gap-3 p-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-heading-xs text-gray-100 font-sans">
                        {title}
                    </h2>
                    <p className="line-clamp-3 text-body-xs font-inter text-gray-300">
                        {description}
                    </p>
                </div>

                <div className="pt-3 border-t border-gray-400">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={imgUser}
                            alt={`imagem de ${nameUser}`}
                            width={20}
                            height={20}
                            className="rounded-full border border-blue-200 h-5 w-5"
                        />
                        <p className="font-inter text-gray-300 text-body-xs">
                            {nameUser}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}