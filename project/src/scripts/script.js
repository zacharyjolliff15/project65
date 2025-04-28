class BankAccount {
    constructor (accountNumber = 0.0, accountHolderName, balance = 0.0){
        this.accountNumber = accountNumber
        this.accountHolderName = accountHolderName
        this.balance = balance
    }
}


// class BankAccount {
//     constructor (accountNumber, accountHolderName, balance = 0.0){
//         this.accountNumber = accountNumber;
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
// }

// // Example of creating a BankAccount object:
// const account1 = new BankAccount("12345", "Alice", 100.50);
// const account2 = new BankAccount("67890", "Bob"); // balance will be 0.0 by default

// console.log(account1.accountNumber); // Output: 12345
// console.log(account1.balance);       // Output: 100.5

// console.log(account2.accountNumber); // Output: 67890
// console.log(account2.balance);       // Output: 0