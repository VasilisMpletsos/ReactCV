import styles from "@/styles/ProgrammingLanguages.module.css";
import Item from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LanguageBadge from "../components/LanguageBadge";

const programmingLanguagesData = [
  {
    name: "C",
    image: "programming/c.png",
    score: 5.0,
    isLoved: true,
  },
  {
    name: "C++",
    image: "programming/c++.png",
    score: 3,
    isLoved: false,
  },
  {
    name: "Python",
    image: "programming/python.png",
    score: 5,
    isLoved: true,
  },
  {
    name: "JavaScript",
    image: "programming/javascript.png",
    score: 4.0,
    isLoved: true,
  },
  {
    name: "Typescript",
    image: "programming/typescript.png",
    score: 3.5,
    isLoved: false,
  },
  {
    name: "React",
    image: "programming/react.png",
    score: 4.5,
    isLoved: true,
  },
  {
    name: "FastAPI",
    image: "programming/fastapi.png",
    score: 4.5,
    isLoved: true,
  },
  {
    name: "Azure",
    image: "programming/azure.png",
    score: 4.5,
    isLoved: false,
  },
  {
    name: "AWS",
    image: "programming/aws.png",
    score: 2.5,
    isLoved: false,
  },
  {
    name: "Docker",
    image: "programming/docker.png",
    score: 4,
    isLoved: false,
  },
  {
    name: "PyTorch",
    image: "programming/pytorch.png",
    score: 4.5,
    isLoved: true,
  },
  {
    name: "TensorFlow",
    image: "programming/tensorflow.png",
    score: 3,
    isLoved: false,
  },
  {
    name: "NodeJS",
    image: "programming/nodejs.png",
    score: 3,
    isLoved: false,
  },
  {
    name: "Django",
    image: "programming/django.png",
    score: 3.5,
    isLoved: false,
  },
  {
    name: "SQL",
    image: "programming/sql.png",
    score: 3.5,
    isLoved: false,
  },
  {
    name: "OpenCV",
    image: "programming/opencv.png",
    score: 3.5,
    isLoved: false,
  },
  {
    name: "Matlab",
    image: "programming/matlab.png",
    score: 2.5,
    isLoved: false,
  },
  {
    name: "Git",
    image: "programming/git.png",
    score: 4.5,
    isLoved: false,
  },
];

const ProgrammingLanguages = () => {
  return (
    <div className={styles.programmingLanguagesContainer}>
      <div className={styles.programmingLanguagesIntroductionContainer}>
        <h1 className={styles.programmingLanguagesIntroductionTitle}>Tech Stack</h1>
        <p className={styles.programmingLanguagesIntroductionText}>
          My technical expertise centers on machine learning and artificial intelligence, where I have developed and deployed
          intelligent solutions across various domains. In addition to my AI focus, I possess hands on experience in both frontend
          and backend application development, enabling me to build robust and user friendly systems. My Electronics Engineer
          background also equipped me with valuable skills in low-level programming and performance-critical software engineering
          so i am grateful that i have a grasp on what drives today developments as well.
        </p>
        <Stack spacing={4} justifyContent='space-evenly' direction='row' useFlexGap sx={{ flexWrap: "wrap", pt: 4 }}>
          {programmingLanguagesData.map((language, index) => (
            <Item className={styles.programmingLanguagesCard}>
              <LanguageBadge
                image={language.image}
                name={language.name}
                score={language.score}
                isLoved={language.isLoved}
                key={index}
              />
            </Item>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
