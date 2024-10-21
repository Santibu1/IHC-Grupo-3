Feature: Edit Ecological Habit

Allow users to modify the details of their ecological habits.

Scenario: Access edit habit option
  Given the user is in the <list of habits>
  When the user clicks the <Edit> icon next to a habit
  Then the application should display an <editable form> with the habit details.

Scenario: Edit habit with valid data
  Given the user is editing the <habit>
  And the user modifies the <fields>
  When the user clicks <Save>
  Then the application should save the changes and display a <confirmation message>.

Scenario: Edit habit with invalid data
  Given the user is editing the <habit>
  And the user enters invalid data or leaves <mandatory fields> blank
  When the user clicks <Save>
  Then the application should display <error messages> indicating the fields to correct.