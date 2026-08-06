import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sparkles, CheckCircle, ArrowRight, Loader2, CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, isWeekend } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

export function AuditSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email, and select a date & time.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("submit-booking", {
        body: {
          name,
          email,
          company,
          preferred_date: format(selectedDate, "yyyy-MM-dd"),
          preferred_time: selectedTime,
          submitted_at: new Date().toISOString(),
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      setIsSubmitted(true);
      toast({
        title: "Booking Request Received!",
        description: `We'll confirm your ${format(selectedDate, "MMMM d")} at ${selectedTime} slot within 24 hours.`,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Disable weekends and past dates
  const disabledDays = (date: Date) => {
    return isWeekend(date) || date < new Date();
  };

  const benefits = [
    "30-minute focused consultation call",
    "Identify 3 automations that can save you time & money",
    "Get a personalized AI implementation roadmap",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Free 30-Min AI Audit Call
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Book Your Free{" "}
                <span className="gradient-text">AI Audit Call</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Schedule a personalized 30-minute call with our AI experts. We'll analyze your business processes and identify the best automation opportunities.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-card p-8 rounded-2xl border border-border glow-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Booking Request Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We'll confirm your {selectedDate && format(selectedDate, "MMMM d")} at {selectedTime} slot to {email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Work Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  {/* Date Picker */}
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-background border-border",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Select a date *"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={disabledDays}
                          initialFocus
                          fromDate={new Date()}
                          toDate={addDays(new Date(), 60)}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Select Time (CET)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "text-xs",
                              selectedTime === time && "bg-primary text-primary-foreground"
                            )}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    disabled={isLoading || !selectedDate || !selectedTime}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Book My Free Audit Call
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Free 30-minute call. No obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
