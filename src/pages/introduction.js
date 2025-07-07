import * as React from 'react';
import styles from "@/styles/Home.module.css";

const Introduction = () => {
  return (
    <main className={styles.main}>
      <div className={styles.introductionContainer}>
        <h1 className={styles.introductionTitle}>About</h1>
        <p className={styles.introductionText}>
          As an <b>BEng & MEng in Electrical and Computer Engineering</b> and <b>MSc in Advanced Computer Systems</b> from Aristotle University's Polytechnic School, I have developed expertise in cutting-edge technologies and engineering principles. My education provided a strong foundation and deepened my understanding of the innovative technologies shaping our world.
          I take great pride in my impactful contributions to university teams at the forefront of engineering innovation, such as the <b>Aristotle FSAE Racing Team</b>, renowned for crafting 1:2 scale F1 vehicles in the highly competitive FSAE engineering competitions.
          <br /><br />
          From my former employers, I have successfully managed to:
        </p>
        <ul>
          <li><b>CERTH:</b> Contribute to major customers and work on interesting European projects.</li>
          <li><b>Kenotom:</b> Complete two major releases on time for automotive customers, generating an estimated value of over €2M for the client.</li>
          <li><b>Fieldscale:</b> Implement a new SaaS product, enhancing the main product's value.</li>
        </ul>
        <br />
        <p className={styles.introductionText}>
          I am passionate about software development, particularly in the areas of <b>embedded systems</b>, <b>computer vision</b>, and <b>machine learning</b>. My goal is to leverage my skills and experience to create innovative solutions that make a positive impact on society.
          In this site on the Navigation Bar you will find:
        </p>
        <ul>
          <li>Programming Languages - My technical skills</li>
          <li>Projects - My portfolio of work</li>
          <li>Work Experience - My professional background</li>
          <li>Education - My academic achievements</li>
        </ul>
      </div>
    </main>
  );
}

export default Introduction;