import styles from "@/styles/Projects.module.css";
import Item from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "../components/Card";

const projectsData = [
  {
    image: "projects/ecodev_reporting.png",
    title: "Ecodev - Advanced Reporting Platform",
    content:
      "Architected and implemented a comprehensive reporting platform integrating Power BI components, with granular access control via user groups and direct permissions. Delivered advanced data visualizations powered by a proprietary larvae detection machine learning model, enabling actionable insights for stakeholders.",
  },
  {
    image: "projects/ecodev_bol.png",
    title: "Ecodev - Mosquito Larvae Presence Prediction",
    content:
      "Developed and deployed a machine learning model to accurately predict the presence of Culex, Aedes, and Anopheles mosquito species. The solution leveraged multi-source data and provided a scalable inference pipeline, significantly improving vector control decision-making.",
  },
  {
    image: "projects/crude_oil_mixture.png",
    title: "Hellenic Petroleum - Crude Oil Mixture Quality Prediction",
    content:
      "Designed and delivered a full-stack application, deployed on Microsoft Azure, to predict crude oil mixture quality for refinery operations. The system featured a user-friendly interface and robust backend, utilizing custom-trained ML models to optimize blend composition and enhance operational efficiency.",
  },
  {
    image: "projects/call_center_analytics.png",
    title: "NRG - Real-Time Call Center Analytics",
    content:
      "Engineered a serverless analytics backend on Azure for real-time processing of customer call transcriptions at NRG Call Center. Implemented advanced analytics including total call duration, sentiment analysis, keyword extraction, call summarization, audio waveform analysis, and automated call categorization, driving improved customer service and operational insights.",
  },
  {
    image: "projects/nbg_call_center.png",
    title: "NBG Bank - Service Call Analytics Platform",
    content:
      "Led the development of a scalable analytics platform for NBG Bank, enabling in-depth analysis of customer service calls. The solution provided actionable metrics, sentiment trends, and automated reporting, supporting data-driven improvements in customer engagement and service quality.",
  },
  {
    image: "projects/coca_cola_shelf_analytics.png",
    title: "Coca Cola - Shelf Analytics with Product Recognition",
    content:
      "Developed a comprehensive shelf analytics solution using advanced computer vision techniques—including segmentation, classification, graph clustering, and depth estimation. The system accurately identified and counted Coca-Cola and competitor SKUs on retail shelves, generating actionable insights to optimize product placement and market strategy. Models were exported to ONNX format and deployed on edge devices (tablets) to enable real-time processing and in-store analytics.",
  },
  {
    image: "projects/iqos_customer_reviews_sentiment.png",
    title: "IQOS - Customer Reviews Sentiment Intelligence",
    content:
      "Directed the end-to-end development of a sentiment analysis solution for IQOS product reviews across Greece. Leveraged large language models (LLMs) to aggregate, analyze, and categorize feedback from diverse sources, delivering strategic insights into customer satisfaction and product performance.",
  },
  {
    image: "projects/iqos_customer_churn.png",
    title: "IQOS - Predictive Customer Churn Analytics",
    content:
      "Solo developed a predictive analytics solution to identify and mitigate customer churn for IQOS in Greece, Bulgaria, and Cyprus. Utilized advanced machine learning techniques to detect at-risk customers, enabling timely interventions and supporting retention strategies.",
  },
  {
    image: "projects/cepal_cadastre.png",
    title: "Cepal - Automated Greek Cadastre Data Extraction",
    content:
      "Designed and implemented an automated information extraction pipeline using LLMs for the Greek National Cadastre API, deployed on AWS infrastructure. The solution ensured high reliability and scalability, streamlining property data retrieval and processing for Cepal.",
  },
  {
    image: "projects/motoroil_chatbot.png",
    title: "Motoroil - AI Internal Chatbot",
    content:
      "Developed an AI-powered internal chatbot for Motoroil, capable of answering complex queries related to the company's products and services utilizing indexed knowledge accross various data sources. The chatbot was designed to enhance employee productivity and streamline information retrieval processes.",
  },
  {
    image: "projects/coca_cola_chatbot.png",
    title: "Coca Cola - AI Internal Chatbot",
    content:
      "Contributed to the development of an AI-powered internal chatbot for Coca-Cola, supporting product-related queries and internal processes. The chatbot used advanced NLP to deliver accurate responses, indexed documents on demand into a structured repository, and integrated with the ServiceNow knowledge base to provide comprehensive access to internal information.",
  },
  {
    image: "projects/pfizer_chatbot.png",
    title: "Pfizer - Medical LLM Custom Trained Chatbot",
    content:
      "Experimented with various LLMs and fine-tuned a pretrained medical large language model (LLM) on proprietary Pfizer research data to develop a custom internal chatbot. The solution was designed to assist doctors and medical professionals with research support and drug discovery insights, enabling faster access to relevant scientific information.",
  },
  {
    image: "projects/palimpsisto.png",
    title: "Greek National Research Center - Palimpsisto",
    content:
      "Developed an automated, intent-driven chatbot and fine-tuned a custom large language model (LLM) on archaeological preservation topics and methodologies. The solution was designed to deliver accurate, context-aware responses, supporting archaeologists in their research and preservation efforts while significantly improving operational efficiency.",
    url: "https://www.researchgate.net/publication/388901739_Towards_Natural_Language_Agents_for_Archaeological_Conservation_Assistance",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsIntroductionContainer}>
        <h1 className={styles.projectsIntroductionTitle}>Real World Projects</h1>
        <Stack
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent='space-evenly'
          direction='row'
          useFlexGap
          sx={{ flexWrap: "wrap", pt: 4 }}
        >
          {projectsData.map((project, index) => (
            <Item className={styles.projectsCard}>
              <Card title={project.title} image={project.image} content={project.content} url={project.url} key={index} />
            </Item>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Projects;
