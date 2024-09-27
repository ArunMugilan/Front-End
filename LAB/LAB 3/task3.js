let product = {
  productName: "Widget",
  quantity: 10,
  price: 19.99,
};

function Book(bookName, authorName) {
  this.bookName = bookName;
  this.authorName = authorName;
}

Book.prototype.price = 9.99;

let myBook = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams");

let employee = {
  employeeName: "John Smith",
  employeeId: "1234",
  salary: 50000,
};

let manager = Object.create(employee);

manager.managerName = "Jane Doe";
manager.branch = "New York";

console.log(manager.employeeName); 
console.log(manager.employeeId); 
console.log(manager.salary); 
console.log(manager.managerName);
console.log(manager.branch); 
