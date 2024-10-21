Feature: Custom Notifications for Ecological Achievements

Allow users to receive notifications about ecological achievements.

Scenario: Receive achievement notification
  Given the user has completed an <ecological challenge>
  When a significant <goal> is reached
  Then the application should send a <notification> highlighting the achievement.

Scenario: Configure notifications
  Given the user is in the <Settings> section
  When the user personalizes the <notifications>
  Then the application should allow the user to enable or disable <achievement notifications>.
