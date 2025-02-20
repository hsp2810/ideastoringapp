import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

export default function SearchIdeas() {
  return (
    <div className='relative w-96'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
      <Input placeholder='Search ideas...' className='pl-10' />
    </div>
  );
}
