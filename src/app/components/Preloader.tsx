"use client";
import React from "react";

export default function Preloader() {
  return (
    <>
			{/* <!-- Preloader --> */}
			<div className="preloader-bg h-screen"></div>
			<div id="preloader h-screen">
				<div id="preloader-status">
					<div className="preloader-position loader"></div>
				</div>
			</div>
			{/* <!-- Smoke Preloader --> */}
			<div className="cd-transition-layer visible opening">
				<div className="bg-layer"></div>
			</div>
    </>
  )
}