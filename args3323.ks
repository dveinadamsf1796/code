public class PalindromeIgnoreCaseAndSpaces {
    public static void main(String[] args) {
        String str = "A man a plan a canal Panama";
        str = str.replaceAll("\\s+", "").toLowerCase();
        boolean isPalindrome = true;
        for (int i = 0; i < str.length() / 2; i++) {
            if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            System.out.println("Palindrome.");
        } else {
            System.out.println("Not a palindrome.");
        }
    }
}
