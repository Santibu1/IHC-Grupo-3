Feature: Set Reminders for Ecological Habits

Allow users to set reminders for their habits to ensure timely completion.

Scenario: Access reminder setting option
  Given the user is in the <list of habits>
  When the user clicks the <Set Reminder> icon next to a habit
  Then the application should display a <reminder configuration pop-up>.

Scenario: Successfully set a reminder
  Given the user is configuring a reminder
  And the user selects valid <frequency> and <time>
  When the user clicks <Save>
  Then the reminder should be saved, and a <confirmation message> displayed.

Scenario: Set reminder with missing data
  Given the user is configuring a reminder
  And the user leaves <mandatory fields> blank
  When the user clicks <Save>
  Then the application should display <error messages> indicating the fields to complete.
