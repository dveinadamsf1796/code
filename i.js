// Define a Day class
class Day {
    constructor(name, isWeekend) {
        this.name = name;
        this.isWeekend = isWeekend;
    }

    // Method to check if the day is a weekend
    checkIsWeekend() {
        if (this.isWeekend) {
            console.log(`${this.name} is a weekend day.`);
        } else {
            console.log(`${this.name} is not a weekend day.`);
        }
    }

    // Static method to return a list of weekend days
    static getWeekendDays() {
        return ['Saturday', 'Sunday'];
    }
}

// Create instances of Day
const monday = new Day('Monday', false);
const saturday = new Day('Saturday', true);

// Test the Day class methods
monday.checkIsWeekend();
saturday.checkIsWeekend();

// Accessing static method to get weekend days
console.log("Weekend days:", Day.getWeekendDays());
