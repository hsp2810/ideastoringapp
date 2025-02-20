"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface IdeaFeaturesProps {
  features: {
    mustHave: string[];
    niceToHave: string[];
    future: string[];
  };
}

export function IdeaFeatures({ features }: IdeaFeaturesProps) {
  const onDragEnd = (result: DropResult) => {
    // Handle drag and drop logic here
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='grid gap-6 md:grid-cols-3'>
        <Droppable droppableId='must-have'>
          {(provided) => (
            <Card
              className='p-6'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className='text-xl font-semibold mb-4'>Must Have</h3>
              {features.mustHave.map((feature, index) => (
                <Draggable key={feature} draggableId={feature} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='mb-2'
                    >
                      <Badge
                        variant='default'
                        className='w-full justify-start py-2'
                      >
                        {feature}
                      </Badge>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Card>
          )}
        </Droppable>

        <Droppable droppableId='nice-to-have'>
          {(provided) => (
            <Card
              className='p-6'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className='text-xl font-semibold mb-4'>Nice to Have</h3>
              {features.niceToHave.map((feature, index) => (
                <Draggable key={feature} draggableId={feature} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='mb-2'
                    >
                      <Badge
                        variant='secondary'
                        className='w-full justify-start py-2'
                      >
                        {feature}
                      </Badge>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Card>
          )}
        </Droppable>

        <Droppable droppableId='future'>
          {(provided) => (
            <Card
              className='p-6'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className='text-xl font-semibold mb-4'>Future</h3>
              {features.future.map((feature, index) => (
                <Draggable key={feature} draggableId={feature} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='mb-2'
                    >
                      <Badge
                        variant='outline'
                        className='w-full justify-start py-2'
                      >
                        {feature}
                      </Badge>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Card>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
