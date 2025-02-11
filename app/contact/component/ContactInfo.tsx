import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Mail className="w-8 h-8 text-gold" />
        <div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-sm text-muted-foreground">info@jennydiamonds.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Phone className="w-8 h-8 text-gold" />
        <div>
          <h3 className="font-semibold mb-1">Phone</h3>
          <p className="text-sm text-muted-foreground">+91 97248 20911</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <MapPin className="w-8 h-8 text-gold" />
        <div>
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-sm text-muted-foreground">Surat, Gujarat, India</p>
        </div>
      </div>
    </div>
  )
}

