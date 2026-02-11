import { useState } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_y3pc14g",
        "template_qz2rum5",
        e.target,
        "rSiFjFAxGIIsHtbAv"
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        setSending(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-8">
            Get In Touch
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-neutral-200 text-sm transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-500/20 placeholder:text-neutral-600"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-neutral-200 text-sm transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-500/20 placeholder:text-neutral-600"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-neutral-200 text-sm transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:ring-1 focus:ring-blue-500/20 placeholder:text-neutral-600 resize-none"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={sending}
              className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
