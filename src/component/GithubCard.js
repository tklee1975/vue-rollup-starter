import axios from 'axios';

const api = 'https://api.github.com/users';



const GithubCard = {
	props: {
		"username" : {
			type: String,
            required: true
		}
	},

    data() {
        return {
            "githubProfile": {},
        }
    },

    created() {
        this.loadGithubProfile();
    },

    methods: {
        
        async loadGithubProfile() {
            console.log("loadGithubProfile!");
            //const resp = await axios.get(`${api}${this.username}`);
            const url = `${api}/${this.username}`;
            console.log(`url: ${url}`);
            const resp = await axios.get(`${api}/${this.username}`);

            
            console.log('response: ', resp.data);
            this.githubProfile = resp.data;
        }
    },

	template: /*html*/`            
	<div style="display:flex; flex-direction:column; gap:0px; width:200px">
    <h4>Github Profile</h4>
    <div><img :src="githubProfile.avatar_url" style="display:block;width:100%; height:100%"/></div>
    <div style='background:#000;color:#fff;text-align:center; padding:10px;'><b>{{githubProfile.name}}</b></div>
    
    </div>
	`
};

export default GithubCard;

