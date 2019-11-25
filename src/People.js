import React, { Component } from "react";
import "./index.css";

class People extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>Types of people</h1>
        <p>Psychologists Say There Are Only 5 Kinds of People in the World.,&nbsp;
          <span className="special-text">“Hey, Which one are you?”.</span>
        </p>
        <img src={require('./images/people.jpg')}></img>
        <p>Your personality influences everything from the friends you choose to the candidates you vote for in a political election. Yet many people never really spend much time thinking about their personality traits.</p>
        <p>Most modern-day psychologists agree there are five major personality types. Referred to as the "five factor model," everyone possesses some degree of each.</p>
        
        <ol>
          <li><h2>Conscientiousness.</h2>
            <p>People who rank highest in conscientiousness are efficient, well-organized, dependable, and self-sufficient. They prefer to plan things in advance and aim for high achievement. People who rank lower in conscientiousness may view those with this personality trait as stubborn and obsessive.</p>
          </li>
          <li><h2>Extroversion.</h2>
            <p>People who rank high in extroversion gain energy from social activity. They're talkative and outgoing and they're comfortable in the spotlight. Others may view them as domineering and attention-seeking.</p>
          </li>
          <li><h2>Agreeableness.</h2>
          <p>Those who rank high in agreeableness are trustworthy, kind, and affectionate toward others. They're known for their pro-social behavior and they're often committed to volunteer work and altruistic activities. Other people may view them as naïve and overly passive.</p>
          </li>
          <li><h2>Openness to experience.</h2>
          <p>People who rate high in openness are known for their broad range of interests and vivid imaginations. They're curious and creative and they usually prefer variety over rigid routines. They're known for their pursuits of self-actualization through intense, euphoric experiences like meditative retreats or living abroad. Others may view them as unpredictable and unfocused.</p>
          </li>
          <li><h2>Neuroticism</h2>
          <p>Neurotic people experience a high degree of emotional instability. They're more likely to be reactive and excitable and they report higher degrees of unpleasant emotions like anxiety and irritability. Other people may view them as unstable and insecure.</p> 
          </li>
        </ol>
      </div>
    );
  }
}

export default People;
