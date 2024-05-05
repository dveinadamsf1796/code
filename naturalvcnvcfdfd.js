public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 5;
        int sum = sumOfNumbers(n);
        System.out.println("Sum of first " + n + " natural numbers: " + sum);
    }

    public static int sumOfNumbers(int n) {
        if (n != 0)
            return n + sumOfNumbers(n - 1);
        else
            return n;
    }
}
