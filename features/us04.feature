Feature: View Ecological Habits Tracking

Track sustainable habits and monitor progress toward a greener lifestyle.

Scenario: Access habits tracking section
  Given the user is on the <Eco-Habits menu>
  When the user selects <Track Habits>
  Then the application should display the <list of habits>.

Scenario: View habit metrics
  Given the user is in the <Track Habits> section
  When the user clicks on a <habit>
  Then the application should display the <habit details>.

Scenario Outline: Error in loading habit data
  Given the user is in the <Track Habits> section
  When there is a <loading error>
  Then the application should display a <red error message>.
