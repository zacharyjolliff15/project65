class Book {
    constructor(title, author, numberOfPages){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        // this.displayInfo = function() {
        //     return console.log(`Title: ${title}, Author: ${author}, Pages: ${numberOfPages}`)
        // };  
    }
    //Better to have it outside the constructor so every book can access it, but they each don't have their own copy of the function
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.numberOfPages}`);
    }
  
}

const Bible = new Book("Bible NIV", "Jesus Christ", 777)
const atomicHabits = new Book("Atomic Habits", "James Clear", 352)

Bible.displayInfo()
