"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IdeaHeader } from "@/components/idea/IdeaHeader";
import { IdeaBreakdown } from "@/components/idea/IdeaBreakdown";
import { IdeaFeatures } from "@/components/idea/IdeaFeatures";
import { IdeaBusinessModel } from "@/components/idea/IdeaBusiness";
// import { IdeaCompetition } from "@/components/idea/competition";
// import { IdeaCollaboration } from "@/components/idea/collaboration";
// import { IdeaAttachments } from "@/components/idea/attachments";
// import { IdeaExecutionPlan } from "@/components/idea/execution-plan";
import { idea } from "@/data";

export default function IdeaPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className='container mx-auto px-4 py-8'>
      <IdeaHeader
        title={idea.title}
        summary={idea.summary}
        status={idea.status}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className='mt-8'>
        <TabsList className='grid w-full grid-cols-4 lg:grid-cols-8'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='features'>Features</TabsTrigger>
          <TabsTrigger value='business'>Business</TabsTrigger>
          <TabsTrigger value='competition'>Competition</TabsTrigger>
          <TabsTrigger value='collaboration'>Collaboration</TabsTrigger>
          <TabsTrigger value='attachments'>Attachments</TabsTrigger>
          <TabsTrigger value='execution'>Execution</TabsTrigger>
          <TabsTrigger value='ai-insights'>AI Insights</TabsTrigger>
        </TabsList>

        <div className='mt-6'>
          <TabsContent value='overview'>
            <IdeaBreakdown
              problem={idea.problem}
              solution={idea.solution}
              targetAudience={idea.targetAudience}
              marketGap={idea.marketGap}
            />
          </TabsContent>

          <TabsContent value='features'>
            <IdeaFeatures features={idea.features} />
          </TabsContent>

          <TabsContent value='business'>
            <IdeaBusinessModel />
          </TabsContent>

          {/* <TabsContent value='competition'>
            <IdeaCompetition competitors={idea.competition} />
          </TabsContent>

          <TabsContent value='collaboration'>
            <IdeaCollaboration ideaId={idea.id} />
          </TabsContent>

          <TabsContent value='attachments'>
            <IdeaAttachments attachments={idea.attachments} />
          </TabsContent>

          <TabsContent value='execution'>
            <IdeaExecutionPlan />
          </TabsContent> */}

          <TabsContent value='ai-insights'>
            <Card className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>
                AI-Powered Insights
              </h3>
              <div className='space-y-4'>
                <Button className='w-full justify-start'>
                  Generate SWOT Analysis
                </Button>
                <Button className='w-full justify-start'>
                  Suggest Feature Improvements
                </Button>
                <Button className='w-full justify-start'>
                  Analyze Market Potential
                </Button>
                <Button className='w-full justify-start'>
                  Create Task Breakdown
                </Button>
              </div>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
