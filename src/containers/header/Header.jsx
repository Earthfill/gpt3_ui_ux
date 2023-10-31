import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Leveraging the capabilities of GPT-3 for your specific product or service can significantly streamline and automate various aspects of your development process, ultimately enhancing efficiency and user experience. From automating content generation to improving decision-making, GPT-3 is a valuable tool for successfully launching your product or service.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>Over 1,600 people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header