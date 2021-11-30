
//const Color = require('color');
import { colord } from "colord";


const ColorLabel = {
	props: {
		color : {
			type: String, 
			default: '#000',
		},
		width: {
			type: String,
			default: '200px',
		},
		height: {	
			type: String,
			default: '50px',
		}
	},
	computed: {
		textColor() {
			return colord(this.color).isDark() ? '#fff' : '#000';
		},
		textStyle() {
			return {
				color: this.textColor,
				fontWeight: 'bold',
			}
		},
		boxStyle() {
			return {
				width: this.width,
				height: this.height,
				backgroundColor: this.color,
				
				display: 'inline-grid',
			}
		}
	},
	template: /*html*/`            
	<div :style="boxStyle">
		<div :style="textStyle" style='display:flex; justify-content:center; align-items:center'>
		{{color}}
		</div>
  	</div>	
	`
};

export default ColorLabel;
