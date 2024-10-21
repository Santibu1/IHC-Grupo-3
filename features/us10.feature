Feature: Personalized Advice Configuration

Allow users to receive personalized tips based on their daily behavior.

Scenario: Access personalized advice settings
  Given the user is on the <Tips> page
  When the user clicks <Personalize Tips>
  Then the application should display a <configuration window>.

Scenario: Successfully save personalized advice
  Given the user has set <preferences>
  When the user clicks <Save>
  Then the application should confirm the settings with a <confirmation message>.
