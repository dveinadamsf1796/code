import java.util.Scanner;

public class DogInfo {
    public static void main(String[] args) {
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        
        // Ask the user to input their name
        System.out.print("Please enter your name: ");
        String ownerName = scanner.nextLine();
        
        // Ask the user to input their dog's age
        System.out.print("Please enter your dog's age: ");
        int dogAge = scanner.nextInt();
        
        // Display the dog information
        System.out.println("Owner's Name: " + ownerName);
        System.out.println("Dog's Age: " + dogAge + " years");
        
        // Close the Scanner object
        scanner.close();
    }
}
