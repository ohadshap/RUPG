
class Renderer {
    constructor(){
    }
    
    renderMainUser(mainUser) {
        $(".user-container").empty()
        const source = $('#mainUser-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainUser);
        $(".user-container").append(newHTML);
    }

    renderFriends(friends) {
        $(".friends-container").empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({friends});
        $(".friends-container").append(newHTML);
    }

    renderQuote(kanyeQuote) {
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({kanyeQuote});
        $(".quote-container").append(newHTML);
    }

    renderPokemon(thePokemon) {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(thePokemon);
        $(".pokemon-container").append(newHTML);
    }

    renderAbout(meatText) {
        $(".meat-container").empty()
        const source = $('#about-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({meatText});
        $(".meat-container").append(newHTML);
    }


    renderAll(data) {
        this.renderMainUser(data.users.mainUser)
        this.renderFriends(data.users.friends)
        this.renderQuote(data.kanyeQuote)
        this.renderPokemon(data.thePokemon)
        this.renderAbout(data.meatText)
    }


}