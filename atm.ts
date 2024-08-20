import inquirer from "inquirer";    

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number,
    withdraw: number,
}

const answers: ansType = await inquirer.prompt([
    {
        name: "userId",
        type: "input",
        message: "Kindly input your Id:"
    },
    {
        name: "userPin",
        type: "number",
        message: "Kindly input your password:"
    },
    {
        name: "accountType",
        type: "list",
        choices: ["Current", "Savings"],
        message: "Choose account you want to proceed with:"
    },
    {
        name: "transactionType",
        type: "list",
        choices: ["Fast Cash", "Withdrawal"],
        message: "Choose account you want to proceed with:",
        when(answers) {
            return answers.accountType
        }
    },

    {
        name: "withdraw",
        type: "list",
        choices: [1000, 50000, 20000, 500000],
        message: "Choose amount you want to withdraw:",
        when(answers) {
            return answers.transactionType === "Fast Cash"
        }
    }
    , {
        name: "amount",
        type: "number",
        message: "Kindly enter your amount:",
        when(answers) {
            return answers.transactionType === "Withdrawal"
        }
    },

])

if (answers.userId && answers.userPin) {
    const enterAmount = answers.amount
    const enterWithdraw = answers.withdraw
    const balance = 550000
    let newBalance = balance - enterAmount
    if (newBalance >= 0) {
        console.log("Your previous balance is " + balance)
        console.log("Your new balance is " + newBalance)
    } else {
        console.log("Insufficient Balance")
    }
}