"use client";
import React from "react";
import { PageBlocksAbout } from "tina/__generated__/types";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";

export default function About(props: PageBlocksAbout) {
	return (
		<>
		<section className="about section-padding">
			<div className="container">
				<div className="row">

				{/* <div className="caption padding-left" data-tina-field={tinaField(props, "message")}>
									<TinaMarkdown content={ props.message } components={{
										h4: props => <h4 className="name" {...props}/>,
										h6: props => <h6 className="subname" {...props}/>,
										p: props => <p {...props}/>,
									}} /> */}


					<div className="col-md-7 animate-box" data-animate-effect="fadeInLeft" data-tina-field={tinaField(props, "message")}>
						<TinaMarkdown content={ props.message } components={{
							h6: props => <h6 className="section-subtitle" {...props}/>,
							h2: props => <h2 className="section-title white" {...props}/>,
							p: props => <p {...props}/>,
						}} />
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
		</>
	)
}