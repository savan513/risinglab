import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The engagement ring I purchased from Jenny Diamonds exceeded all my expectations. The quality and craftsmanship are exceptional.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Collector",
    content:
      "Their collection of rare diamonds is impressive. The expertise and service provided made my purchase experience memorable.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Customer",
    content:
      "The attention to detail and personalized service sets Jenny Diamonds apart. I couldn't be happier with my jewelry.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">Hear what our valued clients have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur border-gold/20">
                <CardContent className="p-6">
                  <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                  <div>
                    <p className="font-serif text-gold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

