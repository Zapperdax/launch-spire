import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const { _createdAt, views, author, _id, description, link, category, title } =
    post;
  return (
    <li className="startup-card group p-4 md:p-5 rounded-lg shadow-md bg-white mt-5">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <p className="startup-card_date text-sm">{formatDate(_createdAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-5 md:size-6 text-primary" />
          <span className="text-sm md:text-base font-medium">{views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 md:mt-5 gap-3">
        <div className="flex-1 min-w-0">
          <Link href={`/user/${author?._id}`}>
            <p className="text-sm md:text-base font-medium truncate">
              {author?.name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-lg md:text-2xl font-semibold truncate">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt={author?.name!}
            width={40}
            height={40}
            className="rounded-full w-10 h-10 md:w-12 md:h-12"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc text-sm md:text-base line-clamp-2 mt-2 md:mt-4">
          {description}
        </p>
        <img
          src={link || "/logo.png"}
          alt="placeholder"
          className="startup-card_img"
        />
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2 mt-3 md:mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-sm md:text-base font-medium">{category}</p>
        </Link>
        <Button
          className="startup-card_btn text-sm md:text-base px-3 py-1"
          asChild
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton mt-5" />
      </li>
    ))}
  </>
);
export default StartupCard;
