"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpCircle, Share2, Star } from "lucide-react";

interface IdeaHeaderProps {
  title: string;
  summary: string;
  status: string;
}

export function IdeaHeader({ title, summary, status }: IdeaHeaderProps) {
  return (
    <Card className='p-6'>
      <div className='flex items-start justify-between'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-muted-foreground'>{summary}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <Badge variant='secondary'>{status}</Badge>
            <Badge variant='outline'>v1.0</Badge>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <Button variant='outline' size='sm'>
            <ArrowUpCircle className='mr-2 h-4 w-4' />
            Upvote
          </Button>
          <Button variant='outline' size='sm'>
            <Star className='mr-2 h-4 w-4' />
            Follow
          </Button>
          <Button variant='outline' size='sm'>
            <Share2 className='mr-2 h-4 w-4' />
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
}
