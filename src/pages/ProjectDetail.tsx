import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Home, 
  Car, 
  Users, 
  Building, 
  Calendar,
  Phone,
  Download,
  CheckCircle
} from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getProjectPDF = (projectSlug: string) => {
    switch (projectSlug) {
      case 'haruns-nest':
        return {
          url: '/assets/images/pdf/Harun nest.pdf',
          filename: 'Harun_Nest_Details.pdf'
        };
      case 'mollicks-dream':
        return {
          url: '/assets/images/pdf/Mollicks dream.pptx',
          filename: 'Mollicks_Dream_Presentation.pptx'
        };
      case 'tilottoma':
        return {
          url: '/assets/images/pdf/SAL TILOTTOMA .pdf',
          filename: 'SAL_Tilottoma_Details.pdf'
        };
      default:
        return {
          url: '/assets/images/pdf/Soldiers builders main .pdf',
          filename: 'Soldiers_Builders_Main_Profile.pdf'
        };
    }
  };

  const projects = {
    'haruns-nest': {
      id: 1,
      name: "Harun's Nest",
      location: "Road: 502/e, Plot No-003, Sector-16, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
      description: "Tranquil south-facing retreat near the lake. A serene, residential enclave of quiet sophistication.",
      detailedDescription: "Harun's Nest represents a tranquil south-facing retreat near the lake in Jolshiri Abashon. This serene residential enclave embodies quiet sophistication with its South-West Facing Corner Plot on a cross road with entrance from the South. The project features 16 feet height ground floor with total 9 parking facilities and includes dedicated spaces for gym, office, meeting and drivers waiting.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      lift: "8 Passenger",
      facing: "South-West Corner Plot",
      status: "ongoing",
      features: ["Gym", "Office", "Meeting Space", "Rooftop Party Place"],
      amenities: [
        "16 Feet Height Ground Floor",
        "9 Parking Facilities",
        "775 Sft Space for GYM, Office, Meeting",
        "Drivers Waiting Area",
        "30'0\" Front Side Road (South)",
        "120'0\" Rear Side Road (North)",
        "One 08 Passenger Lift",
        "Party Place at Rooftop"
      ],
      gallery: [
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0014.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0015.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0016.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0017.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0018.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0019 (1).jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0019.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0020.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0021.jpg"
      ]
    },
    'tilottoma': {
      id: 2,
      name: "SAL Tilottoma",
      location: "Plot No- 069, Road No- 304, Sector-11, Jolshiri Abashon",
      image: "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
      description: "A tranquil residential haven, just a one-minute stroll from the lake. Nature and comfort, side by side.",
      detailedDescription: "SAL Tilottoma offers a tranquil residential haven, just a one-minute stroll from the lake in Jolshiri Abashon. This South East Facing Corner Plot provides the perfect combination of nature and comfort, side by side. The project features double unit apartments with premium amenities and lake proximity for a serene living experience.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "8-10 Passenger",
      facing: "South East Facing Corner Plot",
      status: "ongoing",
      features: ["Double Unit", "Lake Proximity", "Corner Plot"],
      amenities: [
        "Lake View Apartments",
        "One Minute Walk to Lake",
        "South East Corner Plot",
        "Double Unit Configuration",
        "8-10 Passenger Lift",
        "10 Parking Spaces",
        "Premium Location",
        "Natural Environment"
      ],
      gallery: [
        "/assets/images/projects/tilottoma/m-01_1 - Photo (1).jpg",
        "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_2 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_3 - Photo (1).jpg",
        "/assets/images/projects/tilottoma/m-01_3 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_4 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_5 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_7 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_8 - Photo (1).jpg",
        "/assets/images/projects/tilottoma/m-01_8 - Photo.jpg"
      ]
    },
    'jolshiri': {
      id: 3,
      name: "Jolshiri",
      location: "Sector-16, Road# 502/E, Plot# 003, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0017.jpg",
      description: "Elegant south-facing single-row plot with dual access. Beside 140 ft boulevard, steps from a five-star hotel and top university.",
      detailedDescription: "Jolshiri represents elegant south-facing single-row plot with dual access, strategically positioned beside 140 ft boulevard. The location provides unparalleled convenience, being just steps away from a five-star hotel and top university, making it perfect for both residential comfort and investment potential.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "8 Passenger",
      facing: "South East Facing Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Corner Plot", "Premium Location"],
      amenities: [
        "South East Corner Plot",
        "Single Unit Configuration",
        "8 Passenger Lift",
        "10 Parking Spaces",
        "Premium Location",
        "Modern Amenities"
      ],
      gallery: [
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0017.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0018.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0019.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0020.jpg"
      ]
    },
    'mollicks-dream': {
      id: 4,
      name: "Mollick's Dream",
      location: "Sector-08, Road# 412A, Plot# 014, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mollicks-dream/mollicks dream  text.jpg",
      description: "A tranquil residential haven, just a one-minute stroll from the lake. Nature and comfort, side by side.",
      detailedDescription: "Mollick's Dream offers a tranquil residential haven, just a one-minute stroll from the lake in Jolshiri Abashon. This South West Facing Plot provides the perfect combination of nature and comfort, side by side. The project features single unit apartments with premium amenities and lake proximity.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      lift: "10 Passenger",
      facing: "South West Facing Plot",
      status: "ongoing",
      features: ["Single Unit", "Lake Proximity", "Premium Location"],
      amenities: [
        "One Minute Walk to Lake",
        "South West Facing Plot",
        "Single Unit Configuration",
        "10 Passenger Lift",
        "9 Parking Spaces",
        "Premium Location",
        "Natural Environment"
      ],
      gallery: [
        "/assets/images/projects/mollicks-dream/mollicks dream  text.jpg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0021.jpg",
        "/assets/images/projects/tilottoma/m-01_5 - Photo.jpg",
        "/assets/images/projects/tilottoma/m-01_7 - Photo.jpg"
      ]
    },
    'mehnaz': {
      id: 5,
      name: "Mehnaz",
      location: "Sector-12, Road# 404, Plot# 011, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
      description: "Elegantly positioned right beside the Central Mosque - a home in the heart of spiritual serenity.",
      detailedDescription: "Mehnaz is elegantly positioned right beside the Central Mosque, offering a home in the heart of spiritual serenity. This South West Facing Corner Plot provides residents with a unique combination of modern luxury and spiritual tranquility, making it an ideal choice for those seeking peace and comfort.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "8 Passenger",
      facing: "South West Facing Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Mosque Adjacent", "Corner Plot"],
      amenities: [
        "Adjacent to Central Mosque",
        "South West Corner Plot",
        "Single Unit Configuration",
        "8 Passenger Lift",
        "10 Parking Spaces",
        "Spiritual Environment",
        "Premium Location"
      ],
      gallery: [
        "/assets/images/projects/mehnaz/0e788e22-544d-4507-8d0f-1736778e648e.jpeg",
        "/assets/images/projects/mehnaz/259c9f95-a0ab-4b28-941d-33e73c6adf0f.jpeg",
        "/assets/images/projects/mehnaz/35d83a78-be47-4aae-a323-346d3c13a1ec (1).jpeg",
        "/assets/images/projects/mehnaz/35d83a78-be47-4aae-a323-346d3c13a1ec.jpeg",
        "/assets/images/projects/mehnaz/4a597adf-592e-4bc9-a60a-32bfeaa458a7.jpeg",
        "/assets/images/projects/mehnaz/86c5c8f4-50de-4dde-b6ec-ade734e1c2fe.jpeg",
        "/assets/images/projects/mehnaz/87dcc708-e140-46a3-ae94-2255be0ee0f6 (1).jpeg",
        "/assets/images/projects/mehnaz/87dcc708-e140-46a3-ae94-2255be0ee0f6.jpeg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.45.02_147aaa7c.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.50.35_f605f9ea.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.50.56_588fef0b.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.51.23_94f4fba3.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.51.48_eaa6508d.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.13_eb9014f6.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.14_0140a9d0.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-31 at 15.56.37_e7252e92.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-31 at 15.56.56_3bc01d55.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-06-21 at 17.45.55_d1853486.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-06-21 at 17.47.32_2abb161b.jpg",
        "/assets/images/projects/mehnaz/ccbe7675-b8d2-467c-a840-7e15984fbae7.jpeg",
        "/assets/images/projects/mehnaz/db3568b1-895b-4f28-bacf-400ce53da8e1.jpeg",
        "/assets/images/projects/mehnaz/e62eb7c0-8612-42d3-8517-8f2b10062aae (1).jpeg",
        "/assets/images/projects/mehnaz/e62eb7c0-8612-42d3-8517-8f2b10062aae (2).jpeg",
        "/assets/images/projects/mehnaz/e62eb7c0-8612-42d3-8517-8f2b10062aae.jpeg",
        "/assets/images/projects/mehnaz/f84d53ca-ab73-4d75-8c47-02a1be4acbb5.jpeg",
        "/assets/images/projects/mehnaz/fb032187-7a9e-4fa8-bf66-0441ad76cb18.jpeg"
      ]
    },
    'habibs-utopia': {
      id: 6,
      name: "Habib's Utopia",
      location: "Sector-12, Road# 501, Plot# 017, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
      description: "Grand north-east corner plot with triple road frontage. Direct access to 140 ft main road. Airy, open & full of light.",
      detailedDescription: "Habib's Utopia stands as a testament to architectural excellence with its grand north-east corner plot featuring triple road frontage. This prestigious development offers direct access to the 140 ft main road, ensuring excellent connectivity and accessibility. The strategic positioning allows for maximum natural light and ventilation.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      lift: "9 Passenger",
      facing: "North East Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Triple Road Frontage", "Corner Plot"],
      amenities: [
        "Triple Road Access",
        "North East Corner Plot",
        "Single Unit Configuration",
        "9 Passenger Lift",
        "9 Parking Spaces",
        "140 ft Main Road Access",
        "Premium Corner Location"
      ],
      gallery: [
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.32 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.48 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.55 PM.jpeg"
      ]
    },
    'chandra-neer': {
      id: 7,
      name: "Chandra Neer",
      location: "Sector-06, Road# 406, Plot# 106, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.13_eb9014f6.jpg",
      description: "Distinguished north-east frontage on 140 ft road — where elegance meets easy access.",
      detailedDescription: "Chandra Neer offers distinguished north-east frontage on 140 ft road, where elegance meets easy access. This North East Facing Plot provides residents with excellent connectivity and accessibility while maintaining the luxury and comfort expected from Soldiers Builders BD developments.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "9 Passenger",
      facing: "North East Facing Plot",
      status: "ongoing",
      features: ["Single Unit", "140 ft Road", "Premium Location"],
      amenities: [
        "140 ft Road Frontage",
        "North East Facing Plot",
        "Single Unit Configuration",
        "9 Passenger Lift",
        "10 Parking Spaces",
        "Excellent Connectivity",
        "Premium Location"
      ],
      gallery: [
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.13_eb9014f6.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.14_0140a9d0.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-31 at 15.56.37_e7252e92.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-31 at 15.56.56_3bc01d55.jpg"
      ]
    },
    'lutfors-uttorayon': {
      id: 8,
      name: "Lutfor's Uttorayon",
      location: "BLDGN # 15, Road # Avenue 2, Block # C, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      description: "Making Dreams Come to Life",
      detailedDescription: "Lutfor's Uttorayon represents our commitment to excellence in completed luxury residential developments. This prestigious project in Chondrima Model Town showcases our ability to deliver on time with uncompromising quality.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "2x10 Passenger",
      facing: "South Facing Corner Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"],
      amenities: [
        "Dual Elevator System",
        "South Facing Corner Plot",
        "Single Unit Configuration",
        "2x10 Passenger Lifts",
        "10 Parking Spaces",
        "Premium Finishes",
        "Completed Project"
      ],
      gallery: [
        "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
        "/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
        "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg"
      ]
    },
    'bondhu-bilash': {
      id: 9,
      name: "Bondhu Bilash",
      location: "BLDG # 11, Road # 4, Block # C, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      description: "Making Dreams Come to Life",
      detailedDescription: "Bondhu Bilash represents our commitment to excellence in completed luxury residential developments. This prestigious project in Chondrima Model Town showcases our ability to deliver on time with uncompromising quality.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      lift: "2x10 Passenger",
      facing: "South Facing Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"],
      amenities: [
        "Dual Elevator System",
        "South Facing Plot",
        "Single Unit Configuration",
        "2x10 Passenger Lifts",
        "9 Parking Spaces",
        "Premium Finishes",
        "Completed Project"
      ],
      gallery: [
        "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
        "/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
        "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg"
      ]
    },
    'chondrima-bilash': {
      id: 10,
      name: "Chondrima Bilash",
      location: "BLDG # 10, Road # 9, Block # B, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg",
      description: "Making Dreams Come to Life",
      detailedDescription: "Chondrima Bilash represents our commitment to excellence in completed luxury residential developments. This prestigious project in Chondrima Model Town showcases our ability to deliver on time with uncompromising quality.",
      landSize: "6 Katha (4320 SFT)",
      buildingType: "B+G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 20,
      lift: "2x8 Passenger",
      facing: "Southwest Facing Corner Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"],
      amenities: [
        "Dual Elevator System",
        "Southwest Corner Plot",
        "Single Unit Configuration",
        "2x8 Passenger Lifts",
        "20 Parking Spaces",
        "Premium Finishes",
        "Completed Project"
      ],
      gallery: [
        "/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg",
        "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
        "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
        "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg"
      ]
    },
    'kashful': {
      id: 11,
      name: "Kashful",
      location: "Plot 16, Road 504H, Sector 16, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg",
      description: "Experience luxury living at Jolshiri Dhaka — where every day feels like a private retreat. It's not just a home, it's a statement. Discover a lifestyle of elegance and comfort.",
      detailedDescription: "Kashful offers luxury living at Jolshiri Dhaka where every day feels like a private retreat. It's not just a home, it's a statement. Discover a lifestyle of elegance and comfort in this premium development that combines modern amenities with natural beauty.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      lift: "8 Passenger",
      facing: "Premium Plot",
      status: "ongoing",
      features: ["Single Unit", "Premium Location", "Luxury Living"],
      amenities: [
        "Premium Plot Location",
        "Single Unit Configuration",
        "8 Passenger Lift",
        "10 Parking Spaces",
        "Luxury Amenities",
        "Private Retreat Feel",
        "Modern Comfort"
      ],
      gallery: [
        "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg",
        "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
        "/assets/images/projects/tilottoma/m-01_8 - Photo.jpg",
        "/assets/images/projects/mehnaz/WhatsApp Image 2025-06-21 at 17.45.55_d1853486.jpg"
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-yellow-400 hover:text-yellow-300">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Projects
            </Link>
            <div className="flex items-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mr-4">
                {project.name}
              </h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'completed' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-yellow-600 text-white'
              }`}>
                {project.status === 'completed' ? 'Completed' : 'Ongoing'}
              </span>
            </div>
            <div className="flex items-start space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-xl text-gray-300">{project.location}</p>
            </div>
            <p className="text-lg text-gray-400 max-w-4xl">
              {project.detailedDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <img
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Specifications */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Project Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.landSize}</div>
                    <div className="text-gray-400 text-sm">Land Size</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.buildingType}</div>
                    <div className="text-gray-400 text-sm">Building Type</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.apartmentSize}</div>
                    <div className="text-gray-400 text-sm">Apartment Size</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.bedrooms}</div>
                    <div className="text-gray-400 text-sm">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.parking}</div>
                    <div className="text-gray-400 text-sm">Parking Spaces</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">{project.apartments}</div>
                    <div className="text-gray-400 text-sm">Total Units</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Plot Facing</h3>
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg inline-block font-medium">
                  {project.facing}
                </div>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Amenities & Features</h2>
              <div className="space-y-4">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Special Features</h3>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Interested in {project.name}?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              {project.status === 'completed' 
                ? 'Contact us for similar upcoming projects or resale opportunities'
                : 'Book your apartment today and secure your future'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.a
                href="tel:+8801769100680"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </motion.a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200 flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const pdfInfo = getProjectPDF(projectId || '');
                  handleDownload(pdfInfo.url, pdfInfo.filename);
                }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200 flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;