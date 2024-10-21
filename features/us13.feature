Feature: Monthly Carbon Footprint Reports

Allow users to receive a monthly report showing their carbon footprint progress.

Scenario: Receive monthly report
  Given a month has passed since the user started using the app
  When the user accesses the <Reports> section
  Then the application should display a <monthly progress summary>.

Scenario: Successfully download the report
  Given the user is viewing the <monthly report>
  When the user clicks <Download>
  Then the application should download the report in <PDF> format.
