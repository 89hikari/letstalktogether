let store = {
    _state: {
        profilePage: {

            posts:  [
                {id: 1, post: "Hi, hru", likes: '24'},
                {id: 2, post: "Test", likes: '12'}
            ],

            sitebar: [
                {name: "Andrew", img: "https://www.imago-images.com/imagoextern/bilder/stockfotos/en/imago-images-aurora-borealis.jpg"}, 
                {name: "Vlad", img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss063e012660.jpg"},
                {name: "Vandes", img: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}, 
                {name: "Valera", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"},
                {name: "Aloxa", img: "https://www.gettyimages.com/gi-resources/images/500px/983801190.jpg"}
            ],

            newPostText: ''

        },
    
        messagesPage: {

            dialogs: [
                {id: 1, name: "Andrey", ava: "https://www.imago-images.com/imagoextern/bilder/stockfotos/en/imago-images-aurora-borealis.jpg"},
                {id: 2, name: "Vlad", ava: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss063e012660.jpg"},
                {id: 3, name: "Vandes", ava: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"},
                {id: 4, name: "Valera", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"},
                {id: 5, name: "Aloxa", ava: "https://www.gettyimages.com/gi-resources/images/500px/983801190.jpg"},
                {id: 6, name: "Some", ava: "https://specials-images.forbesimg.com/imageserve/5ec2899e39da220006585816/960x0.jpg?cropX1=0&cropX2=664&cropY1=175&cropY2=486"},
            ],

            messages: [
                {id: 1, message: "yoyoyo"},
                {id: 2, message: "yoyoyo1"},
                {id: 3, message: "yoyoyo2"},
                {id: 4, message: "yoyoyo3"},
                {id: 5, message: "yoyoyo4"},
                {id: 6, message: "yoyoyo5"},
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state was changed")
    },

    addPost() {

        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText,
            likes: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updatePostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель // publisher-subscriber // addEventListener
    }

}

window.store = store;
export default store;

// Store - OOP
// Virtual DOM