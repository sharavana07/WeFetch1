"use client";

import React, { useState } from "react";
import { Mail, Phone, Building, User, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "");

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-900 px-6 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading with Animation */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Contact <span className="text-emerald-700">Wefetch</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Let&apos;s explore how we can transform your organization&apos;s potential into reality
          </p>
        </div>

        {/* Status Messages with Animation */}
        {status === "success" && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-2 border-emerald-300 text-center shadow-lg transform animate-slideDown">
            <CheckCircle2 className="w-6 h-6 inline-block mr-2" />
            <strong>Success!</strong> Your message has been sent. We&apos;ll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-2 border-red-300 text-center shadow-lg transform animate-slideDown">
            <AlertCircle className="w-6 h-6 inline-block mr-2" />
            <strong>Oops!</strong> Something went wrong. Please try again later.
          </div>
        )}

        {/* Contact Form with Enhanced Design */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm border-2 border-emerald-100 rounded-3xl p-12 shadow-2xl space-y-8 transform transition-all duration-300 hover:shadow-emerald-200/50"
        >
          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                <User className={`w-5 h-5 transition-colors ${focusedField === 'fullName' ? 'text-emerald-600' : 'text-gray-500'}`} />
                Full Name
              </label>
              <input
                name="fullName"
                required
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField('')}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-200 bg-white"
                placeholder="John Doe"
              />
            </div>

            <div className="group">
              <label className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                <Mail className={`w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-emerald-600' : 'text-gray-500'}`} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-200 bg-white"
                placeholder="john@company.com"
              />
            </div>
          </div>

          {/* Phone + Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                <Phone className={`w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-emerald-600' : 'text-gray-500'}`} />
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-200 bg-white"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="group">
              <label className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                <Building className={`w-5 h-5 transition-colors ${focusedField === 'companyName' ? 'text-emerald-600' : 'text-gray-500'}`} />
                Company Name
              </label>
              <input
                name="companyName"
                required
                onFocus={() => setFocusedField('companyName')}
                onBlur={() => setFocusedField('')}
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-200 bg-white"
                placeholder="Acme Corporation"
              />
            </div>
          </div>

          {/* Description */}
          <div className="group">
            <label className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
              <MessageSquare className={`w-5 h-5 transition-colors ${focusedField === 'description' ? 'text-emerald-600' : 'text-gray-500'}`} />
              How Can We Help?
            </label>
            <textarea
              name="description"
              rows={6}
              required
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField('')}
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 focus:outline-none resize-none transition-all duration-200 bg-white"
              placeholder="Tell us about your project, goals, and how we can help you succeed..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed flex items-center gap-3 justify-center mx-auto shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            We typically respond within 24 hours during business days
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}