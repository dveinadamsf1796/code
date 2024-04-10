public class GCDWithEuclideanAlgorithm {
    public static void main(String[] args) {
        int num1 = 20, num2 = 30;
        
        while (num1 != num2) {
            if (num1 > num2) {
                num1 -= num2;
            } else {
                num2 -= num1;
            }
        }
        
        System.out.println("GCD: " + num1);
    }
}
