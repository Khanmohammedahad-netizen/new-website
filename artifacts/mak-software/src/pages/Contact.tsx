import React from 'react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Project type is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      projectType: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const text = `Hi MAK Software, I'd like to discuss a project.
Name: ${values.name}
Company: ${values.company}
Project Type: ${values.projectType}
Message: ${values.message}`;
    
    const url = `https://wa.me/917702448705?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-32 pb-24">
      <Seo
        title="Contact Us - Start a Project | MAK Software Solutions"
        description="Start a software project with MAK Software Solutions. Get a technical proposal with architecture, timeline, and pricing. Reach us via WhatsApp or the contact form - we respond within 24 hours."
        path="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact MAK Software Solutions',
            url: 'https://www.maksoftwaresolutions.com/contact',
          },
        ]}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-[#111411]">Start a Project.</h1>
            <p className="font-sans text-xl text-[#111411]/70 font-light">
              Tell us what you're trying to build. If it's a fit, we'll architect a solution.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 md:p-12 border border-[#E5E0D8] rounded-xl shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-[#111411]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-xs uppercase tracking-widest text-[#111411]/70">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" className="bg-transparent border-[#E5E0D8] focus-visible:ring-[#2D5A3D]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-xs uppercase tracking-widest text-[#111411]/70">Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" className="bg-transparent border-[#E5E0D8] focus-visible:ring-[#2D5A3D]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-widest text-[#111411]/70">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" type="email" className="bg-transparent border-[#E5E0D8] focus-visible:ring-[#2D5A3D]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-widest text-[#111411]/70">Project Type</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-[#E5E0D8] bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select a category</option>
                              <option value="Enterprise Software">Enterprise Software</option>
                              <option value="AI Integration">AI Integration</option>
                              <option value="SaaS Platform">SaaS Platform</option>
                              <option value="Mobile Application">Mobile Application</option>
                              <option value="Other">Other</option>
                            </select>
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
                          <FormLabel className="font-mono text-xs uppercase tracking-widest text-[#111411]/70">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about the problem you're solving..." 
                              className="min-h-[150px] bg-transparent border-[#E5E0D8] focus-visible:ring-[#2D5A3D] resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button 
                      type="submit" 
                      className="w-full bg-[#1A3D2B] hover:bg-[#2D5A3D] text-white font-mono text-sm tracking-widest py-4 transition-colors rounded-sm"
                    >
                      SEND INQUIRY VIA WHATSAPP
                    </button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 text-[#111411]">
            <AnimatedSection delay={0.2}>
              <div className="mb-12">
                <h3 className="font-serif text-2xl mb-4">Direct Contact</h3>
                <p className="font-sans font-light mb-6">
                  Prefer direct communication? Reach out to us via WhatsApp or email. We typically respond within 24 hours.
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <span className="text-[#111411]/50 uppercase tracking-widest text-xs block mb-1">WhatsApp</span>
                    <a href="https://wa.me/917702448705" target="_blank" rel="noreferrer" className="hover:text-[#2D5A3D] transition-colors">+91 7702448705</a>
                  </div>
                  <div>
                    <span className="text-[#111411]/50 uppercase tracking-widest text-xs block mb-1">Email</span>
                    <a href="mailto:hello@maksoftware.com" className="hover:text-[#2D5A3D] transition-colors">hello@maksoftware.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-[#E5E0D8]">
                <h3 className="font-serif text-2xl mb-6">Global Presence</h3>
                <ul className="grid grid-cols-2 gap-4 font-sans font-light text-[#111411]/80">
                  <li>United States</li>
                  <li>United Kingdom</li>
                  <li>Europe</li>
                  <li>Japan</li>
                  <li>Singapore</li>
                  <li>Australia</li>
                  <li>UAE</li>
                  <li>Saudi Arabia</li>
                  <li>India</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
