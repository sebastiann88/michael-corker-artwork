"use client";
import React from "react";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";
import { PageBlocksIntro } from "tina/__generated__/types";

export default function Intro(props: PageBlocksIntro) {
	return (
		<>
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
							<div className="item right">
								<figure>
									<img src="img/team/7.jpg" alt="" className="img-fluid" />
								</figure>
								<div className="caption padding-left" data-tina-field={tinaField(props, "intro")}>
									<TinaMarkdown content={ props.intro } components={{
										div: props => <div className="name" {...props }/>,
										div: props => <div className="subname" {...props }/>,
										p: props => <p {...props}/>,
									}} />
									<a href="/about" className="btn-curve btn-1 mt-10"
										><span>Learn More</span></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}
