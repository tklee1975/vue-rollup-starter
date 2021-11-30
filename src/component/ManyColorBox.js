
//import ColorBox from "./ColorBox";
// import "ColorBox";	// this is not working 
import ColorBox from "./ColorLabel";


const ManyColorBox = {
	components: {
		ColorBox,
	},
	props: {
		colorList : {
			type: Array, 
		}
	},
	template: /*html*/`    
	<template v-for="color in colorList">
		<color-box :color=color></color-box>
	</template>        
	`
};

export default ManyColorBox;
