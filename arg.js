import java.text.DecimalFormat;

public class DecimalFormatExample {
    public static void main(String[] args) {
        double number = 12345.6789;
        DecimalFormat df = new DecimalFormat("#,##0.00");
        String formatted = df.format(number);
        System.out.println("Formatted number: " + formatted);
    }
}
