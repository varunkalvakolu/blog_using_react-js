import React, { Component } from "react";

class Programming extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>My blog on com,puter programming?</h1>
        <p>I never planned to work in tech; after studying journalism, I was all set for a career as a foreign correspondent for a print newspaper. Sadly, I graduated at the peak of the economic crisis, and the severe decline in print media</p>
        <p className="special-text">What is computer programming?</p>
        <p>Computer programming is a way of giving computers instructions about what they should do next. These instructions are known as code, and computer programmers write code to solve problems or perform a task.</p>
        <p>The end goal is to create something: that could mean anything from a web page, or a piece of software, or even just a pretty picture. That’s why computer programming is often described as a mix between art and science; it’s technical and analytical, yet creative at the same time.</p>
        <img src={require('./images/programming.jpeg')}></img>
        <h2>
        Coding versus programming
        </h2>
        <p>When I was looking for resources to learn to code at an affordable price, I stumbled across Codecademy’s HTML course. When I told my techie friends what I was learning, they informed me that HTML is not considered a programming language. I had a poke around Stack Overflow to find out more, and I discovered that while some seasoned programmers consider it a programming language, others don’t.</p>
        <h2>What programming languages should I learn?</h2>
        <p>I’ve lived in both France and Spain, and part of the reason I decided to live in these countries, was because I already spoke the language in both places. If I achieve my dream of living in Italy, I know exactly which language I’ll learn to make it as easy as possible to integrate: Italian, obviously (or love and food, depending on your perspective).</p>
        <h2>What is front-end and back-end computer programming?</h2>
        <p>Front-end development involves working with code that produces the elements that users can see and interact with; it’s all about how a website looks and feels.Back-end web developers make sure the website works as it should do, and the code they write is normally invisible to users. Back-end web developers work with databases that store information such as customer details, and servers which are where databases (virtually) live.</p>
        <h2>Why should I take a course in computer programming?</h2>
         <p>If you’re worried about finding a job in this uncertain economy, then a technical role is a good bet, with eight of the top 25 jobs this year being tech positions.</p>
        <h2>What’s next?</h2>
        <p>I hope that, by using my journalistic skills of explaining complex subjects in simple terms, you can now understand the basics of computer programming. It’s a really useful skill to have on your resume, no matter what kind of job you’re applying for, and at what level.</p>
        <h2>Standing on the shoulders of giants</h2>
        <p>Talking to other programmers and watching them work is a fascinating inspiration.
          The very system you are using to read this text relies on their work.
          Even if you're far apart, you can study their work on Open Source projects online.
          But if you get a chance, watch them giving talks at conferences and meet them at local user groups.
          Becoming part of a community is gratifying. To exchange ideas and to collaborate on projects helps you push your boundaries and learn something new every day.</p>
        <h2>Have fun and forget the rest!</h2>
        <p>The machine is agnostic to your skin color.
          It doesn't matter if you're a twelve-year-old girl or a lecturer at University.
          If you keep making the same mistake for ten hours straight, your computer won't scream at you.
          It won't punish you. It will happily await your commands.
          Also, the hurdles of entry are pretty low. An old computer is enough;
          even pen and paper and a book will suffice to work on cool programming ideas.</p>
        <h2>Get Started</h2>
        <p>You choose your own projects; nobody else. Don't let anybody tell you that you're not smart enough for this stuff. Ever.
          Each program is a wonderful journey so join us and code the world around you.</p>
      </div>
    );
  }
}

export default Programming;
