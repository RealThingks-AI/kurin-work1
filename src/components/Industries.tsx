import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import societyImg from "@/assets/industries/society-maintenance-new.jpg";
import mepImg from "@/assets/industries/mep-services-new.jpg";
import hospitalityImg from "@/assets/industries/hospitality-new.jpg";
import constructionImg from "@/assets/industries/construction-new.jpg";
import hotelsImg from "@/assets/industries/hotels-new.jpg";
import acImg from "@/assets/industries/ac-refrigeration-new.jpg";
import retailImg from "@/assets/industries/retail-malls-new.jpg";
import powerImg from "@/assets/industries/power-plants-new.jpg";
import agricultureImg from "@/assets/industries/agriculture-new.jpg";
import governmentImg from "@/assets/industries/government-new.jpg";
import hypermarketImg from "@/assets/industries/hypermarket-new.jpg";
import manufacturingImg from "@/assets/industries/manufacturing-new.jpg";
import tradingImg from "@/assets/industries/trading-new.jpg";
import financeImg from "@/assets/industries/finance-new.jpg";

interface Industry {
  name: string;
  image: string;
  description: string;
  services: string[];
}

const industries: Industry[] = [
  { 
    name: "Society Maintenance", 
    image: societyImg,
    description: "Comprehensive manpower solutions for residential societies and housing complexes, ensuring smooth day-to-day operations and resident satisfaction.",
    services: ["Security Personnel", "Housekeeping Staff", "Maintenance Workers", "Gardeners", "Reception & Concierge"]
  },
  { 
    name: "MEP Services", 
    image: mepImg,
    description: "Skilled workforce for Mechanical, Electrical, and Plumbing projects, supporting complex infrastructure installations and maintenance.",
    services: ["Electricians", "Plumbers", "HVAC Technicians", "Fire Safety Personnel", "Project Supervisors"]
  },
  { 
    name: "Hospitality", 
    image: hospitalityImg,
    description: "Trained hospitality professionals to deliver exceptional guest experiences in restaurants, cafes, and food service establishments.",
    services: ["Chefs & Cooks", "Waiters & Servers", "Kitchen Helpers", "Housekeeping", "Front Desk Staff"]
  },
  { 
    name: "Construction & Infrastructure", 
    image: constructionImg,
    description: "Reliable construction workforce for building projects of all scales, from residential to commercial developments.",
    services: ["Masons & Carpenters", "Site Supervisors", "Helpers & Laborers", "Safety Officers", "Equipment Operators"]
  },
  { 
    name: "Hotels", 
    image: hotelsImg,
    description: "Premium staffing solutions for hotels and resorts, ensuring world-class service delivery to guests.",
    services: ["Front Office Staff", "Housekeeping Teams", "F&B Service", "Kitchen Staff", "Maintenance Crew"]
  },
  { 
    name: "Air Conditioning & Refrigeration", 
    image: acImg,
    description: "Technical workforce for HVAC and refrigeration systems installation, maintenance, and repair services.",
    services: ["AC Technicians", "Refrigeration Experts", "Installation Teams", "Service Engineers", "Maintenance Staff"]
  },
  { 
    name: "Retail & Malls", 
    image: retailImg,
    description: "Dynamic retail staff to enhance customer shopping experience and drive sales in retail environments.",
    services: ["Sales Associates", "Store Managers", "Visual Merchandisers", "Security Personnel", "Housekeeping"]
  },
  { 
    name: "Power Plants", 
    image: powerImg,
    description: "Specialized technical workforce for power generation facilities, ensuring safe and efficient operations.",
    services: ["Plant Operators", "Maintenance Engineers", "Safety Officers", "Technical Assistants", "Control Room Staff"]
  },
  { 
    name: "Agriculture", 
    image: agricultureImg,
    description: "Agricultural workforce for farming operations, from cultivation to harvest and processing.",
    services: ["Farm Workers", "Equipment Operators", "Supervisors", "Quality Controllers", "Warehouse Staff"]
  },
  { 
    name: "Government Sector", 
    image: governmentImg,
    description: "Compliant manpower solutions for government projects and public sector undertakings with full statutory adherence.",
    services: ["Administrative Staff", "Data Entry Operators", "Field Workers", "Security Personnel", "Housekeeping"]
  },
  { 
    name: "Hypermarket", 
    image: hypermarketImg,
    description: "Efficient retail workforce for large-format stores and supermarkets, ensuring smooth operations.",
    services: ["Cashiers", "Stock Associates", "Customer Service", "Warehouse Staff", "Department Supervisors"]
  },
  { 
    name: "Manufacturing", 
    image: manufacturingImg,
    description: "Skilled and semi-skilled workforce for manufacturing units across various production environments.",
    services: ["Machine Operators", "Quality Inspectors", "Assembly Workers", "Supervisors", "Maintenance Staff"]
  },
  { 
    name: "Trading Companies", 
    image: tradingImg,
    description: "Business support staff for trading and distribution companies, streamlining operations and logistics.",
    services: ["Sales Executives", "Warehouse Staff", "Logistics Coordinators", "Admin Support", "Data Entry"]
  },
  { 
    name: "Account & Finance", 
    image: financeImg,
    description: "Qualified finance professionals for accounting, auditing, and financial management roles.",
    services: ["Accountants", "Bookkeepers", "Audit Assistants", "Data Entry Operators", "Finance Executives"]
  },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  return (
    <section id="industries" className="section-padding bg-slate-100" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Reach
          </span>
          <h2 className="heading-lg text-slate-800 mb-6">
            Industries <span className="text-accent">We Serve</span>
          </h2>
          <p className="text-body">
            From construction sites to corporate offices, we deliver excellence
            across diverse sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className="relative overflow-hidden h-28 md:h-40">
                <img
                  src={industry.image}
                  alt={industry.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - stronger gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 group-hover:from-black group-hover:via-black/70 transition-all duration-300" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-end p-3 md:p-4">
                  <div className="w-full">
                    <h3 className="font-display font-bold text-white text-xs md:text-sm leading-tight drop-shadow-lg">
                      {industry.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-8 md:group-hover:w-10 bg-accent transition-all duration-300 mt-1 md:mt-1.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Detail Modal */}
      <Dialog open={!!selectedIndustry} onOpenChange={() => setSelectedIndustry(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedIndustry && (
            <>
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl font-display text-foreground">
                  {selectedIndustry.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedIndustry.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Services We Provide:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Industries;
