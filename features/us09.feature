Feature: Carbon Footprint Progress Tracking

Allow users to track their carbon footprint progress through metrics and graphs.

Scenario: Access carbon footprint progress screen
  Given the user is on the <main menu>
  When the user selects <Carbon Footprint Progress>
  Then the application should display the <carbon footprint graph>.

Scenario: View updated progress
  Given the user has added new <habits>
  When the user views the <progress screen>
  Then the application should display the updated <carbon footprint data>.

Scenario: Error in loading progress data
  Given the user is in the <progress screen>
  When there is an issue loading the <data>
  Then the application should display an <error message>.
