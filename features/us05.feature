Feature: Add Ecological Habit

Allow users to add new ecological habits to improve their sustainable lifestyle.

Scenario: Access add habit option
  Given the user is in the <Habits Tracking> section
  When the user clicks on <Add Habit>
  Then the application should display the <habit creation form>.

Scenario: Add habit with valid data
  Given the user is on the <habit creation form>
  And the user fills in the <fields> with valid data
  When the user clicks on <Save>
  Then the habit should be saved, and a <confirmation message> displayed.

Scenario: Add habit with incomplete or invalid data
  Given the user is on the <habit creation form>
  And the user leaves mandatory <fields> blank or enters invalid data
  When the user clicks on <Save>
  Then the application should display <error messages> indicating the fields to correct.
