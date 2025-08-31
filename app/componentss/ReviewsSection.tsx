import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
}

function ReviewCard({ name, review }: ReviewCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-lg font-medium">{name[0]}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">{name}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm">{review}</p>
        </div>
      </div>
    </Card>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-500 text-sm font-medium mb-4 text-center">//REVIEWS</p>
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Your trusted travel partner</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Alex Buckmaster", review: "Customized itinerary perfectly matched my interests." },
            { name: "Judith Rodriguez", review: "Seamless booking experience from start to finish." },
            { name: "Dennis Callis", review: "Impressive flexibility and range of options available." },
            { name: "Corina McCoy", review: "Great community aspect and group travel opportunities." }
          ].map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
