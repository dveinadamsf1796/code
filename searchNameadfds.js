import java.util.ArrayList;

public class ListContainsExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        String searchName = "Bob";
        if (names.contains(searchName)) {
            System.out.println("Name " + searchName + " found.");
        } else {
            System.out.println("Name " + searchName + " not found.");
        }
    }
}
