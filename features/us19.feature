Feature: Online Support Contact

Allow users to contact online support to resolve issues with the website.

Scenario: Contact support
  Given the user needs immediate help with the <website>
  When the user selects the <Support> section
  Then the system should provide <assistance> to resolve the problem.

Scenario: Personalized support help
  Given the user is in the <Support> section
  And the problem persists
  Then the user should be able to contact a <personalized assistant> for further help.
