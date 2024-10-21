Feature: User Login

Allow users to log in to access their account and available features.

Scenario: Access login page
  Given the user is on the <main menu>
  When the user clicks on <Login>
  Then the application should display the <login page>.

Scenario: Login with valid credentials
  Given the user is on the <login page>
  And the user enters valid <username> and <password>
  When the user clicks on <Login>
  Then the application should display the <main dashboard>.

Scenario Outline: Login with invalid credentials
  Given the user is on the <login page>
  And the user enters invalid <credentials>
  When the user clicks on <Login>
  Then the application should display <error message>.
