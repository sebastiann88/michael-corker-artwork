"use client";
import React from "react";

export default function Form() {
  return (
		<>
		<div className="col-md-5 offset-md-1">
			<h4 className="mb-3 text-2xl">Contact Form</h4>
			<form method="post" className="contact__form" action="mail.php">
				{/* <!-- Form message --> */}
				<div className="row">
					<div className="col-12">
						<div
							className="alert alert-success contact__msg"
							style={{display: 'none'}}
							role="alert"
						>
							Your message was sent successfully.
						</div>
					</div>
				</div>
				{/* <!-- Form elements --> */}
				<div className="row">
					<div className="col-md-12 form-group">
						<input
							name="name"
							type="text"
							placeholder="Your Name *"
							required
						/>
					</div>
					<div className="col-md-6 form-group">
						<input
							name="email"
							type="email"
							placeholder="Your Email *"
							required
						/>
					</div>
					<div className="col-md-6 form-group">
						<input
							name="phone"
							type="text"
							placeholder="Your Number *"
							required
						/>
					</div>
					<div className="col-md-12 form-group">
						<input
							name="subject"
							type="text"
							placeholder="Subject *"
							required
						/>
					</div>
					<div className="col-md-12 form-group">
						<textarea
							className="text-area"
							name="message"
							id="message"
							cols="30"
							rows="4"
							placeholder="Message *"
							required
						></textarea>
					</div>
					<div className="col-md-12">
						<input name="submit" type="submit" value="Send Message" />
					</div>
				</div>
			</form>
		</div>
	</>
  )
}
