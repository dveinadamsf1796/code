public class MinimumArrayElement {
    public static void main(String[] args) {
        int[] array = {10, 30, 20, 50, 40};
        int min = array[0];
        for (int num : array) {
            if (num < min) {
                min = num;
            }
        }
        System.out.println("Minimum element in the array: " + min);
    }
}
