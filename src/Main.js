import React, { Component } from "react";
import {
  Link
} from "react-router-dom";


class Main extends Component {
  render() {
    return (
      // <HashRouter>
      <div>
        <div>
          <h1 className="blog-heading">My blog posts</h1>
        </div>
        <div className="blog-posts">
          <div className="post">
            <Link to="/programming">
              <img className="blog-post-image" src={require('./images/large.jpeg')}></img>
            </Link>
            <Link to="/programming" className="title-link">
              <h1 className="post-title">My blog on Computer Programming</h1>
            </Link>
            <div className="center"><time datetime="2019-11-15">nov 15, 2019</time></div>
            <p>
            I never planned to work in tech; after studying journalism, I was all set for a career as a foreign correspondent for a print newspaper...
            <Link to="/programming">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/hobbies">
              <img className="blog-post-image" src={require('./images/gaming.jpg')}></img>
            </Link>
            <Link to="/hobbies" className="title-link">
              <h1 className="post-title">Gaming is my hobby</h1>
            </Link>
            <div className="center"><time datetime="2019-11-18">nov 18, 2019</time></div>
            <p>
              I've been passionate about hobbies my whole life. I love learning, collecting, researching and ..
            <Link to="/hobbies">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/people">
              <img className="blog-post-image" src={require('./images/people.jpg')}></img>
            </Link>
            <Link to="/people" className="title-link">
              <h1 className="post-title">Types of people</h1>
            </Link>
            <div className="center"><time datetime="2019-11-23">nov 23, 2019</time></div>
            <p>
            Psychologists Say There Are Only 5 Kinds of People in the World., “Hey, Which one are you?”...
            <Link to="/people">
                Read More
            </Link>
            </p>
          </div>
          <div className="clear-fix">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
