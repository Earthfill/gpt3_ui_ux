import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Pre-trained Model',
    text: 'Pre-trained on a massive amount of text data from the internet, allows it to learn and understand the structure and patterns of human language.',
  },
  {
    title: 'Zero-Shot and Few-Shot Learning',
    text: 'Exhibits the ability to understand and respond to tasks and questions it has never seen before with minimal or no specific training.',
  },
  {
    title: 'Diverse Applications',
    text: 'Useful for a wide range of natural language processing tasks, including text generation, language translation, question-answering, content summarization, and more.',
  },
  {
    title: 'Human-Like Text',
    text: 'Capable of generating text that remarkably appears human-like and coherent, leading to its widespread use in natural language generation applications.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features