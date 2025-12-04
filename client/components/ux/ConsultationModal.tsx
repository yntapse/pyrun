import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showForm, setShowForm] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email) return;

    setStatus("sending");
    try {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `Consultation Request - Preferred Date: ${formattedDate} at ${selectedTime}`,
          consultationDate: `${formattedDate} at ${selectedTime}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setTimeout(() => {
        onClose();
        // Reset form
        setSelectedDate(undefined);
        setSelectedTime("");
        setName("");
        setEmail("");
        setShowForm(false);
        setStatus("idle");
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setShowForm(false);
    setStatus("idle");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Schedule a Consultation</DialogTitle>
          <DialogDescription>
            Select your preferred date and provide your contact information.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Calendar Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              {selectedDate ? "Selected Date" : "Choose a Date"}
            </h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              className="rounded-md border"
            />
            {selectedDate && (
              <p className="mt-3 text-sm text-emerald-600 font-medium">
                Selected: {selectedDate.toLocaleDateString("en-US", { 
                  weekday: "long", 
                  month: "long", 
                  day: "numeric", 
                  year: "numeric" 
                })}
              </p>
            )}
          </div>

          {/* Time Slot Selection - Shows after date selection */}
          {showForm && (
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Select Time Slot *</h3>
              <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-lg bg-gray-50">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                      selectedTime === time
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {selectedTime && (
                <p className="mt-2 text-sm text-emerald-600 font-medium">
                  Selected: {selectedTime}
                </p>
              )}
            </div>
          )}

          {/* Form Section - Shows after time selection */}
          {showForm && selectedTime && (
            <form onSubmit={handleSubmit} className="space-y-4 border-t pt-4">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Button
                  type="submit"
                  disabled={status === "sending" || !selectedDate || !selectedTime}
                  className="bg-emerald-500 text-white hover:bg-emerald-600 h-11 text-base font-semibold flex-1"
                >
                  {status === "sending" ? "Sending..." : "Confirm Consultation"}
                </Button>
              </div>

              {status === "success" && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-emerald-700 font-medium">
                    ✓ Consultation request sent! We'll contact you shortly to confirm.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">
                    Failed to send request. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
