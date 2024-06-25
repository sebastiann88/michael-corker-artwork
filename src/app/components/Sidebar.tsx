"use client";
import React from "react";

export default function Sidebar() {
	return (
		<aside className="col-md-4">
			<div className="blog2-sidebar row">
				<div className="col-md-12">
					<div className="widget search">
						<form>
							<input
								type="text"
								name="search"
								placeholder="Type here ..."
							/>
							<button type="submit">
								<i className="ti-search" aria-hidden="true"></i>
							</button>
						</form>
					</div>
				</div>
				<div className="col-md-12">
					<div className="widget">
						<div className="widget-title">
							<h6>Recent Posts</h6>
						</div>
						<ul className="recent">
							<li>
								<div className="thum">
									<img src="img/news/1.jpg" alt="" />
								</div>
								<a href="post.html">Top Ten Tattoos Styles</a>
							</li>
							<li>
								<div className="thum">
									<img src="img/news/2.jpg" alt="" />
								</div>
								<a href="post.html">Best Tattoo Back Ideas</a>
							</li>
							<li>
								<div className="thum">
									<img src="img/news/3.jpg" alt="" />
								</div>
								<a href="post.html">Best Wrap Around Tattoo Ideas</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-12">
					<div className="widget">
						<div className="widget-title">
							<h6>Archives</h6>
						</div>
						<ul>
							<li><a href="#">December 2023</a></li>
							<li><a href="#">November 2023</a></li>
							<li><a href="#">October 2023</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-12">
					<div className="widget">
						<div className="widget-title">
							<h6>Categories</h6>
						</div>
						<ul>
							<li>
								<a href="#"><i className="ti-angle-right"></i>Tattooing</a>
							</li>
							<li>
								<a href="#"><i className="ti-angle-right"></i>Piercing</a>
							</li>
							<li>
								<a href="#"
									><i className="ti-angle-right"></i>Laser Removal</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-12">
					<div className="widget">
						<div className="widget-title">
							<h6>Tags</h6>
						</div>
						<ul className="tags">
							<li><a href="#">Tattooing</a></li>
							<li><a href="#">Piercing</a></li>
							<li><a href="#">Laser</a></li>
							<li><a href="#">Care</a></li>
							<li><a href="#">Removal</a></li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
	)
}