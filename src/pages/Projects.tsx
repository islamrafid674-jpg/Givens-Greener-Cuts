import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    "All",
    "Landscaping",
    "Maintenance",
    "Hardscaping",
    "Commercial",
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Backyard Transformation",
      category: "Landscaping",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/492330100_655619003942881_1303161778813339837_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEiqiifYMlEq3dLWEbTF18nzB9kl9I1ZsnMH2SX0jVmye6vrmr5Nlz_qHCOxvIwhe6fL4WSRtld6ZngKsIke-AS&_nc_ohc=jjNercgJLDkQ7kNvwFJxS2P&_nc_oc=Adrm0pXp1CXjRgexE8Oj0ls_wuqXsgyoT3-g7_YaL5FOUR9umE42gAPBAlbTpcAaF3s&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=44Azdq2HYZY7lgYYjEt51w&_nc_ss=7a3a8&oh=00_Af23WBnFQViXQ-FjSVx9HtNd8-YpN9qmvaRe-oHGNYYBMw&oe=69D46FB3",
      description:
        "Complete overhaul including new sod, custom flower beds, and a stone walkway.",
      span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Corporate Office Park",
      category: "Commercial",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/491822915_652512937586821_6401234813785507716_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFteJGhSQLM0mN_nubuSgwp_niZImOmSn_-eJkiY6ZKf7WYFys_rnJEyBvqm_oyXT-xxhdFcwa9rJoGuyzqRudU&_nc_ohc=fHVLimSNGpIQ7kNvwFsjap_&_nc_oc=AdrdjQURTev88pZqebpl2ijKZT07y0690GLNsI8yk9wElMDGML8-ykaQf0FMHtowoZY&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=lxLizDkdY3oZ5ajAiS6PjQ&_nc_ss=7a3a8&oh=00_Af2Xi9yjTonHuQdEObLB5d0h66ZqHzbVhTalSRkISsj9Ig&oe=69D46CF0",
      description:
        "Weekly maintenance and seasonal color rotation for a 5-acre commercial property.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      title: "Patio & Firepit Installation",
      category: "Hardscaping",
      image:
        "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/492356398_651076664397115_550021618119818425_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEiYPnK-g2nuKYQN1fTSaEqDG3QU7joeCMMbdBTuOh4I9YRkmn8dqiNn6j5oOPkAS2UQ4K8pko9A8Fre_7BSjh1&_nc_ohc=hK-xdBrx8t4Q7kNvwFTPfHb&_nc_oc=AdqoVCFnHsGdSGYvpK_MRotVjOT42_Gz_x3z-JlVe29N7fC4j7rCfIF6Ettku7W2IvE&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=oNQrF7MtLTq2VYIpc6RTpA&_nc_ss=7a3a8&oh=00_Af3D8BPLljXVA8xxIRkzUf8Ou3CdCOrNuqhbxYFPTFgILA&oe=69D459FF",
      description:
        "Custom paver patio with a built-in firepit and seating wall.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      title: "Residential Lawn Care",
      category: "Maintenance",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/487222642_634500576054724_7716345748713383708_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHunoa3cDQ3R8eYXkdoQMFmRQhBsaFJvnRFCEGxoUm-dDqJNHZIt4XYMoiS0RUXcqJzGpj9PxFwVJWc4EnvGfrk&_nc_ohc=Yap3MGXGYbIQ7kNvwGk0sBW&_nc_oc=AdpiTFsDmCniTBrt-fhanrcl5RjAAQW1VyxrmgAuoATkxkh_C9R048dE3FzFTUJEfMA&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=xpsDEfI3kszfyuq0XrDmEQ&_nc_ss=7a3a8&oh=00_Af3jpsQjbl9dEC7ao8TnUmwf-MiqDqQMdHxoLDZqAJ5ruw&oe=69D46513",
      description: "Ongoing weekly mowing, edging, and fertilization program.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 5,
      title: "Front Yard Curb Appeal",
      category: "Landscaping",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/486576651_633712806133501_1416200224214611520_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFloKV1LO8TXQg7Rw1m3uD9g29bCMn3gZ-Db1sIyfeBn3GRpNFjA4BxSDweq6JebJbnwrm0JU6ASEdEaWHRsI3e&_nc_ohc=WM4xVdG7j2YQ7kNvwF80YYj&_nc_oc=AdrBU5wj9u3VhlwZ6e7EJD10RIOMaBG2rAgEaYDFdAFQENKs6ow1jhD1R1xs58_7Y9c&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=M2Nf75vEi-J__h16JQosUQ&_nc_ss=7a3a8&oh=00_Af3r7W3YZ5y9NXnGxgFJHmTuNxMZmW0Lin_nL99RjrLw0w&oe=69D45875",
      description:
        "Drought-tolerant plant installation and fresh mulch application.",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 6,
      title: "Retail Center Snow Management",
      category: "Commercial",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/486521197_633032682868180_4213817156989098381_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEx_91GkdKw1Ytih7Misl8zHaRg2tM7EogdpGDa0zsSiNW4BJ2rkVmPVOUwe2UKpoEztha4e0zQtPDBt9MmKb6j&_nc_ohc=pD6uquF6ZlMQ7kNvwGXv_Sg&_nc_oc=AdobmsoSCk_8AtrMimzoJQSMA6kxsArk1tcVl9Yni9IWTIiQxzRNdtGmdrc1-Fgd8A8&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=hiyPiwJeh4sPjBHgrSwSvQ&_nc_ss=7a3a8&oh=00_Af3sKA1u0BTW-PSJU2xM3rHDfHBe1IB7cPOKuSZgdeYzLQ&oe=69D4607B",
      description:
        "Zero-tolerance snow and ice management for a busy shopping center.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 7,
      title: "Custom Walkway Design",
      category: "Hardscaping",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/487198351_633012029536912_4459106479199500732_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHTnwqkNmikY2IlbMI_5sux7MWY0HspwDnsxZjQeynAOb9jV-f1ZBvsjzEPpLLHG5U6dw00S7ylbaWe-jc53-zV&_nc_ohc=hvTY2oSW094Q7kNvwHlEXYa&_nc_oc=AdouB6M6t_Obo51JEiT75AkJOuw5TfwJRhpB1IreaJUvHHEbcsfYmXvJao2hdicE6to&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=PCJhbuzrZcc9VBfr8vFS0w&_nc_ss=7a3a8&oh=00_Af3gf1rBnHqX_LIVSTMpinZqsgNBliBD3lSAXdFjMF_YIQ&oe=69D45E0F",
      description:
        "Elegant stone walkway connecting the front driveway to the backyard patio.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 8,
      title: "Spring Garden Cleanup",
      category: "Maintenance",
      image:
        "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/486574775_633004262871022_2001058143843051292_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEUXumpkcrm8AloF3St97lZY7wi7U5a-PJjvCLtTlr48v8khKicdcjSSgsmMSXos-J-Sa6MrLd866AUzsAe0oru&_nc_ohc=jvsBoFF2WCUQ7kNvwHWVQU1&_nc_oc=Adr-_uKlDlVCVTlTOET0PtsWB2vLT_0vg0sacoMj7eNHEOfv4vaC4q8MO2LwqUrZNys&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=OlrHmECSEk2-DoPV10AH_g&_nc_ss=7a3a8&oh=00_Af0b5CeoJGfx-3ERrlKmTsq3KiI8GfF4N0vFtPpp7A5Ywg&oe=69D46766",
      description:
        "Thorough removal of winter debris and preparation of flower beds for spring planting.",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      {/* Page Header */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2000&auto=format&fit=crop"
            alt="Portfolio background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Our <span className="text-brand-gold">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Explore our recent projects and see the quality of work we deliver
            to every client.
          </motion.p>
        </div>
      </section>

      {/* Featured Before/After */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-extrabold text-brand-dark mb-4 tracking-tight">
              Featured Transformation
            </h2>
            <p className="text-xl text-gray-500 font-light">
              A complete backyard overhaul in West Omaha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/487198351_633012029536912_4459106479199500732_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHTnwqkNmikY2IlbMI_5sux7MWY0HspwDnsxZjQeynAOb9jV-f1ZBvsjzEPpLLHG5U6dw00S7ylbaWe-jc53-zV&_nc_ohc=hvTY2oSW094Q7kNvwHlEXYa&_nc_oc=AdouB6M6t_Obo51JEiT75AkJOuw5TfwJRhpB1IreaJUvHHEbcsfYmXvJao2hdicE6to&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=PCJhbuzrZcc9VBfr8vFS0w&_nc_ss=7a3a8&oh=00_Af3gf1rBnHqX_LIVSTMpinZqsgNBliBD3lSAXdFjMF_YIQ&oe=69D45E0F"
                alt="Before landscaping"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 glass-dark text-white px-6 py-2 rounded-full font-heading font-bold text-sm tracking-widest">
                BEFORE
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/486574775_633004262871022_2001058143843051292_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEUXumpkcrm8AloF3St97lZY7wi7U5a-PJjvCLtTlr48v8khKicdcjSSgsmMSXos-J-Sa6MrLd866AUzsAe0oru&_nc_ohc=jvsBoFF2WCUQ7kNvwHWVQU1&_nc_oc=Adr-_uKlDlVCVTlTOET0PtsWB2vLT_0vg0sacoMj7eNHEOfv4vaC4q8MO2LwqUrZNys&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=OlrHmECSEk2-DoPV10AH_g&_nc_ss=7a3a8&oh=00_Af0b5CeoJGfx-3ERrlKmTsq3KiI8GfF4N0vFtPpp7A5Ywg&oe=69D46766"
                alt="After landscaping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-brand-green text-white px-6 py-2 rounded-full font-heading font-bold text-sm tracking-widest shadow-lg">
                AFTER
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-dark text-white shadow-xl scale-105"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-brand-dark shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Bento Grid Gallery */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`group relative rounded-[2rem] overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 ${activeCategory === "All" ? project.span : "col-span-1 row-span-1"}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592424005688-57380dc5f8e7?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-8 tracking-tight">
            Inspired by our work?
          </h2>
          <p className="text-brand-gold mb-12 text-xl font-light">
            Let's create something beautiful for your property.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl hover:shadow-brand-green/20 group"
          >
            Start Your Project{" "}
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
