public class SumOfSquares {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int sumOfSquares = 0;
        for (int num : array) {
            sumOfSquares += num * num;
        }
        System.out.println("Sum of squares: " + sumOfSquares);
    }
}
