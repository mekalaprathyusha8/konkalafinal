import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle decorative blobs */}
      <div style={{ position: "absolute", top: "-8%", right: "-5%", width: 380, height: 380, borderRadius: "55% 45% 60% 40%", background: "rgba(139,30,45,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-6%", left: "-4%", width: 300, height: 300, borderRadius: "45% 60% 40% 65%", background: "rgba(212,175,55,0.06)", pointerEvents: "none" }} />

      <div className="container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
            Our Story
          </span>
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, maxWidth: 560, margin: "0 auto 12px" }}>
            About <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Konkala Fine Arts</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div style={{ width: 8, height: 8, background: "#D4AF37", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Founder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{
              borderRadius: 16, overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              maxWidth: 320, width: "100%",
            }}>
              <img
                src={founderImg}
                alt="Madhu Kuruva - Founder"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ paddingTop: 16 }}
          >
            <div style={{ marginBottom: 24, lineHeight: 1.8 }}>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 14 }}>
                Konkala Fine Arts, nestled in the heart of <strong style={{ color: "#5C0F1A" }}>Madhapur, Hyderabad</strong>, is a premier arts training academy dedicated to nurturing creativity, artistic skills, and cultural enrichment for over a decade.
              </p>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 14 }}>
                Founded by award-winning contemporary artist <strong style={{ color: "#D4AF37" }}>Madhu Kuruva</strong>, the academy masterfully blends traditional Indian art forms with modern techniques — creating a truly unique and transformative learning experience for every student.
              </p>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 14 }}>
                From age 5 to any age, students join beginner to advanced programs in visual arts, pottery, guitar, and vocals. Every student receives <strong style={{ color: "#8B1E2D" }}>personalized guidance</strong> in a peaceful, inspiring studio environment that fosters both skill and confidence.
              </p>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem" }}>
                With 10+ years of excellence, 500+ trained students, and 15+ structured courses, Konkala Fine Arts has become Hyderabad's most trusted creative institution — shaping artists who go on to achieve at national and international levels.
              </p>
            </div>


          </motion.div>
        </div>
      </div>

      <style>{``}</style>
    </section>
  );
};

export default AboutSection;
