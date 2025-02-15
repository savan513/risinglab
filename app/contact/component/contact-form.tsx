"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useDispatch, useSelector } from "react-redux"
import { contactUsapi } from "@/lib/store/features/contactUsSlice"
import { RootState } from "@/lib/store/store"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  subject: z.string().optional().default("inquiry of customer"),
})

export function ContactForm() {
  const dispatch = useDispatch();
  
  const { loading, contactUsapiData, error } = useSelector((state: RootState) => ({
    loading: state.contactUs.loading,
    contactUsapiData: state.contactUs.contactUsapiData,
    error: state.contactUs.error
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "inquiry of customer",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await dispatch(contactUsapi({ values }) as any).unwrap();
      
      if (result) {
        toast.success("Your message has been sent successfully.", {
          description: "We'll get back to you soon!",
        });
        form.reset();
      }
    } catch (error: any) {
      toast.error("Something went wrong!", {
        description: error.message || "Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50 dark:border-gold/50">
          <h2 className="text-2xl font-playfair mb-6 text-foreground">Get in Touch with The Rise Of Lab Grown Diamonds</h2>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="bg-background border-border/50 focus:border-gold"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      {...field} 
                      className="bg-background border-border/50 focus:border-gold"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your phone number" 
                      {...field} 
                      className="bg-background border-border/50 focus:border-gold"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message" 
                      {...field} 
                      className="bg-background border-border/50 focus:border-gold"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold/90 text-black"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

