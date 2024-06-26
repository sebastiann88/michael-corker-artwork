"use client";
import React from "react";

export default function Blog() {
	return (
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
				<div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/1.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Top Ten Creative Art Styles</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 29</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/2.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Best Art Ideas</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 27</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/3.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Best All-Around Art Ideas</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 25</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/4.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Top Seven Art Styles</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 24</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/1.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Top Ten Creative Art Styles</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 29</a>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="post-img">
							<a href="/post">
								<div className="img"><img src="img/news/2.jpg" alt="" /></div>
							</a>
						</div>
						<div className="cont">
							<h4><a href="/post">Best Art Ideas</a></h4>
							<div className="info">
								<a href="/blog"><span>Blog</span></a>
								<a href="/blog">December, 27</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
