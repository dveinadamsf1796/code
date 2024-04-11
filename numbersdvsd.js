public class SumOfFactorialDigits {
    public static void main(String[] args) {
        int number = 5;
        int factorial = 1;
        for (int i = 2; i <= number; i++) {
            factorial *= i;
        }
        int sum = 0;
        while (factorial != 0) {
            sum += factorial % 10;
            factorial /= 10;
        }
        System.out.println("Sum of digits of factorial of " + number + ": " + sum);
    }
}
