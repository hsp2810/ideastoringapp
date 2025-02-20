"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

interface IdeaBreakdownProps {
  problem: string;
  solution: string;
  targetAudience: string[];
  marketGap: string;
}

export function IdeaBreakdown({
  problem,
  solution,
  targetAudience,
  marketGap,
}: IdeaBreakdownProps) {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <Card className='p-6'>
        <h3 className='text-xl font-semibold mb-4'>Problem Statement</h3>
        <p className='text-muted-foreground mb-4'>{problem}</p>
        <Button variant='outline' className='w-full'>
          <Wand2 className='mr-2 h-4 w-4' />
          Refine with AI
        </Button>
      </Card>

      <Card className='p-6'>
        <h3 className='text-xl font-semibold mb-4'>Solution</h3>
        <p className='text-muted-foreground mb-4'>{solution}</p>
        <Button variant='outline' className='w-full'>
          <Wand2 className='mr-2 h-4 w-4' />
          Expand Solution
        </Button>
      </Card>

      <Card className='p-6'>
        <h3 className='text-xl font-semibold mb-4'>Target Audience</h3>
        <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
          {targetAudience.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
      </Card>

      <Card className='p-6'>
        <h3 className='text-xl font-semibold mb-4'>Market Gap</h3>
        <p className='text-muted-foreground'>{marketGap}</p>
      </Card>
    </div>
  );
}
