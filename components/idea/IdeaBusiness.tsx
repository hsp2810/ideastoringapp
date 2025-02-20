import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { idea } from "@/data";

export function IdeaBusinessModel() {
  return (
    <Card className='p-4 w-full max-w-lg mx-auto'>
      <CardHeader>
        <CardTitle className='text-xl font-semibold'>Business Model</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium'>Type</h3>
            <p className='text-gray-600'>{idea.businessModel.type}</p>
          </div>
          <div>
            <h3 className='text-lg font-medium'>Pricing</h3>
            <ul className='list-disc list-inside text-gray-600'>
              <li>
                <span className='font-medium'>Basic:</span> $
                {idea.businessModel.pricing.basic}
              </li>
              <li>
                <span className='font-medium'>Pro:</span> $
                {idea.businessModel.pricing.pro}
              </li>
              <li>
                <span className='font-medium'>Enterprise:</span>{" "}
                {idea.businessModel.pricing.enterprise}
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
