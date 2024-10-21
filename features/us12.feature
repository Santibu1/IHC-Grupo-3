Feature: Compare Ecological Impact with Friends

Allow users to compare their ecological impact with friends to stay motivated.

Scenario: Access comparison section
  Given the user is on the <Progress> screen
  When the user clicks <Compare with Friends>
  Then the application should display a <comparison table>.

Scenario: Successful comparison
  Given the user has selected the <comparison> option
  Then the application should display the <impact differences> between the user and their friends.