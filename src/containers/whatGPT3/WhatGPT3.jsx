import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 (GPT-3), is a state-of-the-art artificial intelligence language model developed by OpenAI. It is the third iteration of the GPT series, following GPT-2. GPT-3 is known for its remarkable capabilities in natural language understanding and generation." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Understanding user input prompts and generating coherent, human-like responses, making it suitable for various text-based conversational applications." />
        <Feature title="Knowledge base" text="Leveraging its vast pre-trained knowledge of internet text to provide information and contextually relevant responses to a wide range of factual questions and inquiries." />
        <Feature title="Education" text="Utilizing its extensive pre-trained knowledge of educational materials to provide informative and contextually relevant responses to academic and learning-related questions and topics." />
      </div>
    </div>
  )
}

export default WhatGPT3