public class ArithmeticProgression {
    public static void main(String[] args) {
        int firstTerm = 3;
        int commonDifference = 2;
        int numberOfTerms = 5;
        int lastTerm = firstTerm + (numberOfTerms - 1) * commonDifference;
        int sum = (numberOfTerms * (firstTerm + lastTerm)) / 2;
        System.out.println("Sum of arithmetic progression: " + sum);
    }
}
