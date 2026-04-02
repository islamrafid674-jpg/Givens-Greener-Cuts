import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Scissors,
  Shovel,
  Truck,
  Snowflake,
  Leaf,
} from "lucide-react";
import { useRef } from "react";

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const services = [
    {
      id: "mowing",
      title: "Lawn Mowing & Maintenance",
      icon: Scissors,
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/660094074_920090177495761_2034882180357738945_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGr3qFkoGLvuj4QA1eFDYMfGal--_eEm84ZqX7794SbzmleHDk5T1tydnf5CRLzwMKQDVz0x7PSFOWkFsEZRCc2&_nc_ohc=6-G-TKaEQpMQ7kNvwFwRbqA&_nc_oc=AdpTydsTWJJbTf-UvW5ZBLhBKnDGi7p8Qm3RPy8XkqzjcLyOzYdd7MPRkrhLoZ9rIfg&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=HZ5LGiuEj1iuBm9FDNWObw&_nc_ss=7a3a8&oh=00_Af28mCAYJf560C21O0imDzGvSf57CuJmMt8TG43Db3WxCw&oe=69D470A8",
      description:
        "Keep your property looking pristine week after week. Our comprehensive maintenance plans ensure your lawn is healthy, lush, and perfectly manicured.",
      features: [
        "Weekly & bi-weekly mowing",
        "Precision edging & trimming",
        "Clipping cleanup",
        "Fertilization & weed control",
      ],
      price: "Starting at $45/visit",
    },
    {
      id: "landscaping",
      title: "Landscaping & Design",
      icon: Shovel,
      image:
        "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/561899273_792190793619034_806478961386775924_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGcZTEUMpirQtAvXfe3nJ7aTEz5H5yRnLFMTPkfnJGcscEynMWX8h2w3R9R2yBzk66_OeVp1Atbyyqt3kvHLxsI&_nc_ohc=ccKaucy1QzkQ7kNvwHz_TRd&_nc_oc=AdpkXKofkF0UC66fVn9NlUGnWyb3Esrk6DFyh3AeY7_UrB3pHhijUpiBZv2mlitYR6k&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=Vorb2UKpxVz6E5dLVoGYvg&_nc_ss=7a3a8&oh=00_Af21qRmTrH35FgcB2PhEsBMjW4FHNpxoPvqNCXZmtKNo-g&oe=69D46F10",
      description:
        "Transform your outdoor space into a beautiful, functional extension of your home or business. We handle everything from design to full installation.",
      features: [
        "Custom landscape design",
        "Planting (trees, shrubs, flowers)",
        "Mulch & rock installation",
        "Hardscaping (patios, walkways)",
      ],
      price: "Custom Quoted",
    },
    {
      id: "gardening",
      title: "Gardening & Yard Cleanup",
      icon: Leaf,
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/502465679_680222538149194_1313362806640291490_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGywhespnKlKRmJxa2fT_Y7HHsHrlXBDwcceweuVcEPB-8a4bcehrLw_rYerOqjRHTR0_iyr9y-ivhjsZ-eNLbd&_nc_ohc=F5NlFZp2MFkQ7kNvwGsmCLc&_nc_oc=Adrmsh1dUQxcqM-fZNiQOza-U2ACXlk1-Cqu2UZTyx3en2bYWX5OC4-TDzhEj7H73hc&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=TcpbUHEr0AiFw8Zb0MWe1g&_nc_ss=7a3a8&oh=00_Af2p0qeeb0LrW-xezuYWMe5pW28NsNJds_CdUsczGji-YQ&oe=69D466E2",
      description:
        "Seasonal cleanups and detailed garden care to keep your beds looking fresh and your plants thriving year-round.",
      features: [
        "Spring & Fall cleanups",
        "Weed removal & prevention",
        "Pruning & hedge trimming",
        "Soil conditioning",
      ],
      price: "Starting at $150",
    },
    {
      id: "hauling",
      title: "Hauling & Debris Removal",
      icon: Truck,
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/517100793_714160304755417_9194571769787120205_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGkhUuQE5iKrHLo_b4wwk3vruuTVs5ZREiu65NWzllESD-s48QvQJ808pRMdmmjV9l_vlbp2Bfu-aFb6JRfdtCT&_nc_ohc=t5HbMJppjeYQ7kNvwEdcf4l&_nc_oc=AdozE3hdfWicnbS13JUR-WseNsd2BLXw-VOS_U0TldihTFgdm6UDXka9bQG_j67mdmM&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=l7f-yWIHt31PVYoPuDke2A&_nc_ss=7a3a8&oh=00_Af2VzBaoj8GHpxV3o6cEmmuj5hL_6ksvhVsaR8o7UVs7MA&oe=69D46EC4",
      description:
        "Quick, efficient removal of yard waste, old landscaping materials, and general debris. We leave your property spotless.",
      features: [
        "Brush & branch removal",
        "Old mulch/rock extraction",
        "Post-storm cleanup",
        "Eco-friendly disposal",
      ],
      price: "Starting at $99/load",
    },
    {
      id: "snow",
      title: "Snow Removal",
      icon: Snowflake,
      image:
        "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/517563059_713158214855626_6728592122309867498_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGOnG7Y3VxRRzJiEGcqWgMns2qlIVjn-EazaqUhWOf4Rild0ixEHELzU2qI46T0l4M5_wgcxh9CNUxnj70MuSxp&_nc_ohc=X1rUzS6SjugQ7kNvwFcihoP&_nc_oc=AdrKgJYtLfpDmXUr5dRXn_L8XLQG_S7uTDDaFOLq-rqcece-9gdexOrgyhc3DNylLRY&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=JScH3NCtnrYAOt6LwpKQ2Q&_nc_ss=7a3a8&oh=00_Af2_CjQEaBLqAuO8p_kPy0kI-4NBqaJ2pFxRFzdgVZ-dFg&oe=69D4490A",
      description:
        "Reliable winter services to keep your driveways, walkways, and parking lots safe and accessible during harsh Omaha winters.",
      features: [
        "24/7 emergency dispatch",
        "Plowing & shoveling",
        "Salting & de-icing",
        "Commercial & residential contracts",
      ],
      price: "Seasonal Contracts Available",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      {/* Page Header */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
            alt="Landscaping background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Our <span className="text-brand-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Professional property maintenance tailored to your needs. From
            routine care to complete transformations.
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Services List */}
      <section ref={containerRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Sidebar (Sticky) */}
            <div className="lg:w-1/3 hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8">
                  Jump to Service
                </h3>
                {services.map((service, index) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="flex items-center space-x-3 text-gray-500 hover:text-brand-green transition-colors py-2 font-medium"
                  >
                    <service.icon className="w-5 h-5" />
                    <span>{service.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3 space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-32"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/9] mb-10 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 glass p-4 rounded-2xl shadow-lg">
                      <service.icon className="w-8 h-8 text-brand-green" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-heading font-extrabold text-brand-dark mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-white rounded-[2rem] p-8 shadow-sm mb-10 border border-gray-100">
                    <h4 className="font-heading font-bold text-brand-dark mb-6 text-xl">
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700 font-medium"
                        >
                          <Check className="w-6 h-6 text-brand-green mr-3 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-green transition-colors shadow-lg flex items-center justify-center text-lg group"
                    >
                      Book This Service
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                        Pricing
                      </span>
                      <span className="text-brand-green font-heading font-bold text-2xl">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 tracking-tight">
            Need a Custom Maintenance Plan?
          </h2>
          <p className="text-gray-300 mb-12 text-xl font-light">
            We offer bundled services for commercial properties and HOAs.
            Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-gold text-brand-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-colors shadow-xl hover:shadow-brand-gold/20"
          >
            Discuss Commercial Contracts
          </Link>
        </div>
      </section>
    </div>
  );
}
