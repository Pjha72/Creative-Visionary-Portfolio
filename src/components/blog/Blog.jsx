import React from 'react';
import './Blog.css';


import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';

import { SiHashnode } from 'react-icons/si';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://pjha2186.hashnode.dev/string-methods-in-javascript"><span className="blog__category">JavaScript</span></a>
                        <a href="https://pjha2186.hashnode.dev/string-methods-in-javascript"><img src={Blog1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title"><a href="https://pjha2186.hashnode.dev/string-methods-in-javascript" style={{color: '#A7AEB9'}}>String Method’s In Javascript</a></h3>
                        <div className="blog__meta">
                            <span>24 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://pjha2186.hashnode.dev/string-methods-in-javascript" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://pjha2186.hashnode.dev/exploring-uselmmer-hooks-in-reactjs"><span className="blog__category">ReactJS</span></a>
                        <a href="https://pjha2186.hashnode.dev/exploring-uselmmer-hooks-in-reactjs"><img src={Blog2} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title "><a href="https://pjha2186.hashnode.dev/exploring-uselmmer-hooks-in-reactjs" style={{color: '#A7AEB9'}}>Exploring Uselmmer Hooks in ReactJS </a></h3>
                        <div className="blog__meta">
                            <span>21 Jan, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://pjha2186.hashnode.dev/exploring-uselmmer-hooks-in-reactjs" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://pjha2186.hashnode.dev/the-power-of-reactjs-hooks"><span className="blog__category">ReactJS</span></a>
                        <a href="https://pjha2186.hashnode.dev/the-power-of-reactjs-hooks"><img src={Blog3} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title"><a href="https://pjha2186.hashnode.dev/the-power-of-reactjs-hooks" style={{color: '#A7AEB9'}}>Unleashing the Power of ReactJS Hooks</a></h3>
                        <div className="blog__meta">
                            <span>21 Jan, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://pjha2186.hashnode.dev/the-power-of-reactjs-hooks" style={{color: '#8B88B1'}}>Hashnode</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <span align="center"><br></br>
                    <p align="center"><a href="https://hashnode.com/@Pjha2186" className='home__social-link' target='_blank' rel='noreferrer'><b>⬇ FOR MORE BLOGS ⬇</b></a></p>
                    <p><a href="https://hashnode.com/@Pjha2186" className='home__social-link' target='_blank' rel='noreferrer'><SiHashnode /></a></p>
            </span>
        </section>
    )
}

export default Blog