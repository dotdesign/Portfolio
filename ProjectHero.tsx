{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh15540\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
import Container from "@/components/ui/Container";\
import ProjectHero from "@/components/projects/ProjectHero";\
import FeaturedImage from "@/components/projects/FeaturedImage";\
import ProjectOverview from "@/components/projects/ProjectOverview";\
import ChallengeSection from "@/components/projects/ChallengeSection";\
import ResearchSection from "@/components/projects/ResearchSection";\
import SolutionDesign from "@/components/projects/SolutionDesign";\
import ProcessSection from "@/components/projects/ProcessSection";\
import KeyFeatures from "@/components/projects/KeyFeatures";\
import ResultsSection from "@/components/projects/ResultsSection";\
import ProjectSidebar from "@/components/projects/ProjectSidebar";\
\
const DubaiLabourProject = () => \{\
  // Project data\
  const projectTags = ["Ministry of Human Resources", "Government", "Back Office", "UX Transformation"];\
  \
  const overviewItems = [\
    \{ label: "Client", value: "Ministry of Human Resources & Emiratisation (MoHRE), Dubai" \},\
    \{ label: "Role", value: "Senior User Experience Consultant" \},\
    \{ label: "Scope", value: "Back Office - Shared Service systems across multiple platforms (Web, Tablet, Mobile)" \},\
    \{ label: "Duration", value: "18 months" \}\
  ];\
  \
  const challenges = [\
    "Complex back-office operations requiring streamlined processes",\
    "Multiple user touchpoints across different platforms",\
    "Need for standardization across all digital interfaces",\
    "Integration with existing MoHRE design system",\
    "Diverse user base with varying technical expertise"\
  ];\
  \
  const researchPoints = [\
    "Conducted stakeholder interviews with back-office staff",\
    "Analyzed existing workflows and pain points",\
    "Collaborated with business analysts to understand technical requirements",\
    "Documented user journeys and process flows",\
    "Identified optimization opportunities"\
  ];\
  \
  const solutions = [\
    \{ main: "Created unified UX architecture for shared services" \},\
    \{ \
      main: "Developed responsive layouts for:",\
      subItems: [\
        "Web interface for complex operations",\
        "Tablet optimization for field operations",\
        "Mobile interface for on-the-go access"\
      ]\
    \},\
    \{ main: "Implemented MoHRE design system standards across all platforms" \},\
    \{ main: "Designed intuitive navigation and workflow patterns" \}\
  ];\
  \
  const processes = [\
    \{ title: "User Research", description: "Contextual inquiries and user interviews" \},\
    \{ title: "Workflow Mapping", description: "Detailed process documentation" \},\
    \{ title: "Wireframing", description: "Initial concept validation" \},\
    \{ title: "Prototyping", description: "Interactive demos for stakeholder review" \},\
    \{ title: "Design System Integration", description: "Ensuring consistency with MoHRE standards" \}\
  ];\
  \
  const features = [\
    "Unified dashboard for back-office operations",\
    "Cross-platform consistency in user experience",\
    "Streamlined workflow management",\
    "Integrated notification system",\
    "Standardized component library"\
  ];\
  \
  const results = [\
    \{ percentage: "35%", description: "Improved operational efficiency" \},\
    \{ percentage: "42%", description: "Reduced training time for new staff" \},\
    \{ percentage: "28%", description: "Enhanced user satisfaction" \},\
    \{ percentage: "100%", description: "Standardized experience across platforms" \}\
  ];\
  \
  const projectDetails = [\
    \{ label: "Client", value: "Ministry of Human Resources & Emiratisation" \},\
    \{ label: "Industry", value: "Government" \},\
    \{ label: "Services", value: "UX Research, UX Design, Prototyping" \},\
    \{ label: "Duration", value: "18 months" \},\
    \{ label: "Role", value: "Senior UX Consultant" \}\
  ];\
  \
  const tools = ["Figma", "Sketch", "Adobe XD", "InVision", "Miro", "Axure RP"];\
\
  return (\
    <main className="bg-background text-foreground pb-20">\
      \{/* Hero Section */\}\
      <ProjectHero \
        title="Modernizing MoHRE Dubai's Back Office Operations: A UX Transformation Case Study"\
        tags=\{projectTags\}\
      />\
\
      \{/* Featured Image */\}\
      <FeaturedImage \
        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop"\
        alt="MoHRE Dubai Project"\
      />\
\
      \{/* Project Content */\}\
      <Container>\
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">\
          \{/* Main Content */\}\
          <div className="md:col-span-2 space-y-12">\
            <ProjectOverview items=\{overviewItems\} />\
            \
            <ChallengeSection \
              description="The Ministry faced significant challenges with their legacy back-office systems that were causing operational inefficiencies and user frustration."\
              challenges=\{challenges\}\
            />\
            \
            <ResearchSection \
              imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"\
              researchPoints=\{researchPoints\}\
            />\
            \
            <SolutionDesign \
              description="Our approach focused on creating a unified experience while ensuring platform-specific optimizations."\
              solutions=\{solutions\}\
            />\
            \
            <ProcessSection processes=\{processes\} />\
            \
            <KeyFeatures \
              features=\{features\}\
              imageSrc="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2670&auto=format&fit=crop"\
            />\
            \
            <ResultsSection results=\{results\} />\
          </div>\
\
          \{/* Sidebar */\}\
          <ProjectSidebar \
            details=\{projectDetails\}\
            tools=\{tools\}\
          />\
        </div>\
      </Container>\
    </main>\
  );\
\};\
\
export default DubaiLabourProject;}