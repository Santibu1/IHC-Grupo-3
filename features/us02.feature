Feature: Profile Information Editing

Simple editing of profile information to keep it updated.

Scenario: Access "My Profile" page
  Given the user is on the <main menu>
  When the user clicks on the <profile icon>
  Then the application should display the <profile information>.

Scenario: Access profile editing options
  Given the user is on the <profile page>
  When the user clicks on the <edit icon>
  Then the <editing options> should become available.

Scenario Outline: Edit profile information
  Given the user is editing the <profile>
  And the user changes the <fields>
  When the user clicks <Save>
  Then the application should display <confirmation message> and update the <profile>.