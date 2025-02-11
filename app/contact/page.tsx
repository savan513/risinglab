import { ContactForm } from "@/app/contact/component/contact-form";
// import { SiteHeader } from "@/components/site-header";
import { ContactInfo } from "./component/ContactInfo";
import { GoogleMap } from "./component/GoogleMap";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* <SiteHeader /> */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair mb-4">Contact Us</h1>
          <nav className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
              alt="Customer support"
              className="object-cover w-full h-full"
            />
          </div>
          <ContactForm />
        </div>
        <ContactInfo />
        <GoogleMap />
      </main>
    </div>
  )
}

