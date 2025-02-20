import HomePageClientWrapper from "@/components/HomePageClientWrapper";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-4xl font-bold text-foreground'>Ideas Hub</h1>
          <Button>
            <PlusCircle className='mr-2 h-4 w-4' />
            New Idea
          </Button>
        </div>

        <HomePageClientWrapper />
      </div>
    </main>
  );
}
