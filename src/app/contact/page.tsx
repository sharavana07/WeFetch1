"use client";

import React, { useState } from "react";
import { Mail, Phone, Building, User, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "");

    // ❌ Removed ID generation — Google Sheet will auto-create WE0001, WE0002...
    const formData = {
      fullName: get("fullName"),
      email: get("email"),
      phone: get("phone"),
      companyName: get("companyName"),
      createdAt: new Date().toISOString(),
      description: get("description"),
    };

    try {
      const res = await fetch("https://sheetdb.io/api/v1/mlmuinh7ijqf1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 text-lg mt-3">
            Reach out and let&apos;s explore how Wefetch can help your organization.
          </p>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 border border-green-300 text-center">
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-600 border border-red-300 text-center">
            Failed to send message. Try again later.
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-10 shadow-xl space-y-8"
        >
          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                <User className="w-5 h-5" /> Full Name
              </label>
              <input
                name="fullName"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                <Mail className="w-5 h-5" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone + Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                <Phone className="w-5 h-5" /> Phone
              </label>
              <input
                type="text"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
                <Building className="w-5 h-5" /> Company Name
              </label>
              <input
                name="companyName"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Your Company"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-gray-700 font-medium">
              <MessageSquare className="w-5 h-5" /> Description
            </label>
            <textarea
              name="description"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
              placeholder="Tell us your requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 text-lg rounded-xl bg-green-600 text-white hover:bg-green-700 transition disabled:bg-gray-400 flex items-center gap-3 justify-center mx-auto"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
