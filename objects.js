var myObj = {
    name: "Daniel",
    age: 22,
    likes: ["Cycling", "Judo"],
    hobbies: function() {
        return this.likes;
    }
};

console.log(myObj.hobbies())