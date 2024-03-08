import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class BasicBankingSystem {
    static Map<String, Double> accounts = new HashMap<>();

    public static void createAccount(String accountNumber, double initialBalance) {
        if (!accounts.containsKey(accountNumber)) {
            accounts.put(accountNumber, initialBalance);
            System.out.println("Account created successfully!");
        } else {
            System.out.println("Account already exists!");
        }
    }

    public static void deposit(String accountNumber, double amount) {
        if (accounts.containsKey(accountNumber)) {
            double balance = accounts.get(accountNumber);
            accounts.put(accountNumber, balance + amount);
            System.out.println("Deposit successful. New balance: " + accounts.get(accountNumber));
        } else {
            System.out.println("Account does not exist!");
        }
    }

    public static void withdraw(String accountNumber, double amount) {
        if (accounts.containsKey(accountNumber)) {
            double balance = accounts.get(accountNumber);
            if (balance >= amount) {
                accounts.put(accountNumber, balance - amount);
                System.out.println("Withdrawal successful. New balance: " + accounts.get(accountNumber));
            } else {
                System.out.println("Insufficient balance!");
            }
        } else {
            System.out.println("Account does not exist!");
        }
    }

    public static void checkBalance(String accountNumber) {
        if (accounts.containsKey(accountNumber)) {
            System.out.println("Current balance: " + accounts.get(accountNumber));
        } else {
            System.out.println("Account does not exist!");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("\nWelcome to Basic Banking System");
            System.out.println("1. Create Account");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Check Balance");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter account number: ");
                    String accNumber = scanner.next();
                    System.out.print("Enter initial balance: ");
                    double initialBalance = scanner.nextDouble();
                    createAccount(accNumber, initialBalance);
                    break;
                case 2:
                    System.out.print("Enter account number: ");
                    String depositAcc = scanner.next();
                    System.out.print("Enter deposit amount: ");
                    double depositAmount = scanner.nextDouble();
                    deposit(depositAcc, depositAmount);
                    break;
                case 3:
                    System.out.print("Enter account number: ");
                    String withdrawAcc = scanner.next();
                    System.out.print("Enter withdrawal amount: ");
                    double withdrawAmount = scanner.nextDouble();
                    withdraw(withdrawAcc, withdrawAmount);
                    break;
                case 4:
                    System.out.print("Enter account number: ");
                    String checkAcc = scanner.next();
                    checkBalance(checkAcc);
                    break;
                case 5:
                    running = false;
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice! Please enter a valid option.");
            }
        }
        scanner.close();
    }
}
