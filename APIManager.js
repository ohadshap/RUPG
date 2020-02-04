//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getUsers() {
    
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/1.3/?results=7`,
            success: (data) => {
                
                const theUsers = data.results
                const myUser = theUsers[0]
                
                const mainUser = {
                    firstName: myUser.name.first,
                    lastName: myUser.name.last,
                    city: myUser.location.city,
                    state: myUser.location.country,
                    profilePic: myUser.picture.thumbnail
                }

                let friends = []
                for(let i = 1; i < theUsers.length; i++) {
                    friends.push({
                        friendFirstName: theUsers[i].name.first,
                        friendLastName: theUsers[i].name.last   
                    })
                        
                }
                
                this.data.users = {mainUser, friends}
                

                return 
                
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        }); 
    }

    getQuote() {
        $.ajax({
            method: "GET",
            url: `https://api.kanye.rest/`,
            success: (data) => {
                this.data.kanyeQuote = data.quote
                return
                
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getPokemon() {
        let randomNum = Math.floor(Math.random() * 800)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-form/${randomNum}/`,
            success: (data) => {
                this.data.thePokemon = {
                pokaName: data.name,
                pokePic: data.sprites.front_default
                }
            return
                
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getAbout() {
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=all-meat&paras=1`,
            success: (data) => {
                this.data.meatText = data;
                return
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getInfo() {
        this.getUsers()
        this.getQuote()
        this.getAbout()
        this.getPokemon()
    }

}




