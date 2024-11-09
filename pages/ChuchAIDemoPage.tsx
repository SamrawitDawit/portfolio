
import styles from '../styles/ChuchAIDemoPage.module.css';

export default function ChuchAIDemo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ChuchAI Project Demo Video</h1>
      <div className={styles.videoWrapper}>
        <video controls width="100%" height="500">
        <source src="/chuchAI-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
