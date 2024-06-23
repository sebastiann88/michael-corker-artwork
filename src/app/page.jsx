import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <hr className="line-vr-section" />
      <section className="team section-padding">
        <div className="container">
          <div className="row mb-30">
            <div className="section-head col-md-12 text-center">
              <div className="section-subtitle">Michael Corker</div>
              <div className="section-title white">Visual <span>Artist</span></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="owl-carousel owl-theme">
                <div className="item right">
                  <figure>
                    <img src="img/team/7.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption padding-left">
                    <div className="name">Michael Corker</div>
                    <div className="subname">Visual Artist</div>
                    <p>
                      Tattoo aliquet miss orci elit gene on tristique in the dream
                      vitaen aliuam lorem tincidunt felis sed gravida aliquam the
                      neque miss blue hendren mavition duru sapien mana amenta the
                      mollis.
                    </p>
                    <a href="about.html" className="btn-curve btn-1 mt-10"
                      ><span>Learn More</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7 animate-box" data-animate-effect="fadeInLeft">
              <div className="section-subtitle">Michael Corker</div>
              <div className="section-title white">My Background</div>
              <p>
                Tattoo viverra tristique usto duis vitae diam neque nivamus aestan
                the artine arinian aten mis viverra nec lacus nedana duru edino
                setlie suscipe curas tristique inila duman aten elit finibus
                vivera alacus fermen. Lorem arena nuam enim mi obortis esen the
                uctus cumsan solden malisuametion ametion in the auctor orci done
                vitae.
              </p>
              <ul className="about-list list-unstyled">
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>Comfortable and relaxing environment</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>Experienced artist input on your tattoo</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>Top of the line cleaning and safety protocols</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>Full aftercare instructions for a well-healed tattoo</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-md-5 mt-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <img src="img/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <hr className="line-vr-section" />
      <hr className="line-vr-section" />
      <section className="blog section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-30">
              <div className="section-head text-center">
                <div className="section-subtitle">Blog Articles</div>
                <div className="section-title white">Latest News</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    <div className="img"><img src="img/news/1.jpg" alt="" /></div>
                  </a>
                </div>
                <div className="cont">
                  <h4><a href="post.html">Top Ten Creative Art Styles</a></h4>
                  <div className="info">
                    <a href="blog.html"><span>Blog</span></a>
                    <a href="blog.html">December, 29</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    <div className="img"><img src="img/news/2.jpg" alt="" /></div>
                  </a>
                </div>
                <div className="cont">
                  <h4><a href="post.html">Best Art Ideas</a></h4>
                  <div className="info">
                    <a href="blog.html"><span>Blog</span></a>
                    <a href="blog.html">December, 27</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    <div className="img"><img src="img/news/3.jpg" alt="" /></div>
                  </a>
                </div>
                <div className="cont">
                  <h4><a href="post.html">Best All-Around Art Ideas</a></h4>
                  <div className="info">
                    <a href="blog.html"><span>Blog</span></a>
                    <a href="blog.html">December, 25</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="post-img">
                  <a href="post.html">
                    <div className="img"><img src="img/news/4.jpg" alt="" /></div>
                  </a>
                </div>
                <div className="cont">
                  <h4><a href="post.html">Top Seven Art Styles</a></h4>
                  <div className="info">
                    <a href="blog.html"><span>Blog</span></a>
                    <a href="blog.html">December, 24</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
