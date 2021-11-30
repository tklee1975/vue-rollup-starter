
const ColorGrid = {
	props: {
		"color": String, 
	},
	computed: {
		"styles": function () {
			return {
				background: this.color,
				width: '50px',
				height: '150px',
			}
		}
	}, 
	template: /*html*/ `
		<span :style="styles">&nbsp;</span>
	`
}

const ColorPalette = {
	props: {
		"colorList": {
			type: Array,
			default: null,
		}
	},
	components: {
		ColorGrid,
	},
	computed: {
		"colors": function () {
			if (this.colorList == null) {

				return [
					"#000",
					"#555",
					"#EEE",
				];
			}

			return this.colorList;
		}
	},

	template: /*html*/`    
	<div style='width:100%; display:inline-flex; justify-content:center; gap: 5px'> 
	<color-grid v-for="color in colors" :color="color">{{color}}</color-grid>
	</div>
	
	`
};

export default ColorPalette;

