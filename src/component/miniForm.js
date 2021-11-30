
const miniForm = {
	data() {
		return {
			//   content: "",
			choice: 2,
		}
	},
	props: ['title'],
	template: /*html*/`            
		<div class=''>
			<h1>Mini Form - {{title}}</h1>
			Choice: {{choice}}
			<p>
			<input v-model="choice" id="1" type='radio' value='1'>Choice 1</input>
			<input v-model="choice" id="2" name="xx" type='radio' value='2'>Choice 2</input>
			<input v-model="choice" id="3" name="xx" type='radio' value='3'>Choice 3</input>
		</div>
	`
};

export default miniForm;