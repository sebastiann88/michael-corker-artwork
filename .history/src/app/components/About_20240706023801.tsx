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
					<div className="col-md-7 animate-box" data-animate-effect="fadeInLeft" data-tina-field={tinaField(props, "message")}>
						<TinaMarkdown content={ props.message } components={{
							h6: props => <h6 className="section-subtitle" {...props}/>,
							h2: props => <h2 className="section-title white" {...props}/>,
							p: props => <p className="mb-6" {...props}/>,
						}} />
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