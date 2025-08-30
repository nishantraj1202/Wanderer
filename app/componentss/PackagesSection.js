import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function PackageCard({ image, duration, title, description }) {
  return (
    <Card className="relative overflow-hidden h-80">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-4 left-4">
        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {duration}
        </span>
      </div>
      <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
        <h3 className="text-xl font-light mb-2">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{description}</p>
        <Button variant="outline" className="self-start text-white border-white hover:bg-white hover:text-black bg-transparent">
          Choose package
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PackagesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-500 text-sm font-medium mb-4 text-center">//OUR PACKAGES</p>
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Discover our exceptional travel packages
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              image: "/traditional-balinese-temple-with-person-in-pink-cl.png",
              duration: "5 day, 4 night",
              title: "All-Inclusive Packages",
              description: "Everything from flights to accommodation and activities"
            },
            {
              image: "/traditional-cultural-dancers-in-colorful-costumes.png", 
              duration: "6 day, 4 night",
              title: "Cultural Packages",
              description: "Heritage tours and local cultural performances"
            },
            {
              image: "/dramatic-coastal-cliffs-with-turquoise-water-and-r.png",
              duration: "5 day, 4 night", 
              title: "Adventure Packages",
              description: "Hiking, diving, and extreme sports experiences"
            }
          ].map(pkg => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}