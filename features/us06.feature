Feature: Delete Ecological Habit

Allow users to delete ecological habits they no longer wish to follow.

Scenario: Access delete habit option
  Given the user is in the <list of habits>
  When the user clicks the <Delete> icon next to a habit
  Then the application should display a <confirmation pop-up>.

Scenario: Confirm habit deletion
  Given the user is in the <confirmation pop-up>
  When the user clicks <Delete>
  Then the habit should be removed from the list, and a <confirmation message> displayed.

Scenario: Cancel habit deletion
  Given the user is in the <confirmation pop-up>
  When the user clicks <Cancel>
  Then the habit should remain in the list without changes.
