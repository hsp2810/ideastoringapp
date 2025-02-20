"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IdeaCardProps {
  idea: {
    id: number;
    title: string;
    description: string;
    category: string;
    votes: number;
    createdAt: string;
    coverImage: string;
  };
  view: "grid" | "list";
}

export function IdeaCard({ idea, view }: IdeaCardProps) {
  return (
    <Link
      href={`/ideas/${idea.id}`}
      className='block transition-transform hover:scale-[1.02]'
    >
      <Card
        className={`overflow-hidden transition-shadow hover:shadow-lg ${
          view === "list" ? "flex" : ""
        }`}
      >
        <div className={`relative ${view === "list" ? "w-48 h-auto" : "h-48"}`}>
          <Image
            src={idea.coverImage}
            alt={idea.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='flex-1'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <Badge variant='secondary' className='mb-2'>
                {idea.category}
              </Badge>
              <span className='text-sm text-muted-foreground'>
                {new Date(idea.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h3 className='text-xl font-semibold'>{idea.title}</h3>
          </CardHeader>
          <CardContent>
            <p className='text-muted-foreground'>{idea.description}</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='ghost' size='sm'>
              <ArrowUpCircle className='mr-1 h-4 w-4' />
              {idea.votes}
            </Button>
            <Button variant='ghost' size='sm'>
              <MessageCircle className='mr-1 h-4 w-4' />
              Comment
            </Button>
            <Button variant='ghost' size='sm'>
              <Share2 className='mr-1 h-4 w-4' />
              Share
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
