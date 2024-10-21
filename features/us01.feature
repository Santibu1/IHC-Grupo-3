Feature: Account Registration

Simple account registration process for the application.

Scenario: Access registration page
  Given the user is on the <homepage>
  When the user clicks on <Register>
  Then the application should display the <registration page>.

Scenario: Register with valid data
  Given the user is on the <registration page>
  And the user enters valid data into the fields
  When the user clicks on <Create Account>
  Then the account should be created and the user should see the <welcome message>.

Scenario Outline: Register with invalid data
  Given the user is on the <registration page>
  And the user enters invalid data into the <fields>
  When the user clicks on <Create Account>
  Then the application should display <error message> under the <fields> to be corrected.

