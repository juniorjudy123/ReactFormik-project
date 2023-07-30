import React from "react"

function form() {
	return (
		<div className="formCentered">
			<form>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" />
				<br />

				<label htmlFor="email">E-mail:</label>
				<input type="email" id="email" name="email" />
				<br />

				<label htmlFor="channel">Channel</label>
				<input type="text" id="channel" name="channel" />
				<br />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default form
