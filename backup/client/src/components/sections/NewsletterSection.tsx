import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/newsletter", data);
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and news.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="font-inter font-bold text-2xl text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-blue-100">Get the latest news, updates, and insights delivered directly to your inbox.</p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-grow mb-3 sm:mb-0">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={`w-full px-4 py-3 rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring ${errors.email ? 'focus:ring-red-300 border-red-300' : 'focus:ring-blue-300'}`}
                  {...register("email")} 
                />
                {errors.email && <p className="mt-1 text-red-200 text-sm">{errors.email.message}</p>}
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-primary font-inter font-medium rounded-r-lg sm:rounded-l-none hover:bg-blue-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
