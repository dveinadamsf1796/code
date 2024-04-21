public class StringLastIndexOf {
    public static void main(String[] args) {
        String str = "Hello, World!";
        int lastIndex = str.lastIndexOf("l");
        if (lastIndex != -1) {
            System.out.println("Last index of 'l': " + lastIndex);
        } else {
            System.out.println("Substring 'l' not found.");
        }
    }
}
