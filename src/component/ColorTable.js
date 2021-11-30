import ColorLabel from "./ColorLabel";

const ColorTable = {
	components: {
		ColorLabel
	},
	props: {
		"colorList": {
			type: Array,
			default: null,
		}
	},
	computed: {
		
	},

	template: /*html*/`    
	<div style='display:flex' width='100%'> 
	<color-label v-for="color in colorList" :color="color" width="20%">{{color}}</color-label>
	</div>
	
	`
};

export default ColorTable;

