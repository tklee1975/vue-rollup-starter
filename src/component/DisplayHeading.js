
const DisplayHeading = {
	props: {
		"heading" : {
			type: String,
			default: "Default Title"
		}
	},

	template: /*html*/`            
	<div style='font-family:arial;font-size:2rem;color:white;background:#000;padding:10px'>
    <h3 style='text-align:center'>{{heading}}</h3>
  	</div>	
	`
};

export default DisplayHeading;

