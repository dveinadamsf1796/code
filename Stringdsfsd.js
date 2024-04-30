public class AverageCalculator {
    public static void main(String[] args) {
        int[] numbers = {5, 10, 15, 20, 25};
        double sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        double average = sum / numbers.length;
        System.out.println("Average: " + average);
    }
}
