public class SwitchExample {
    public static void main(String[] args) {
        int dayOfWeek = 4;
        String dayName;
        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                dayName = "Unknown";
        }
        System.out.println("Day of the week: " + dayName);
    }
}
