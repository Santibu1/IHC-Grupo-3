Feature: Eco-Friendly Product Recommendations

Allow users to receive product recommendations based on their consumption habits.

Scenario: Generate product recommendations
  Given the user has completed their <consumption profile>
  When the application detects <sustainable habits>
  Then the system should suggest <eco-friendly products>.

Scenario: View recommended products
  Given the user is in the <Recommendations> section
  When the user selects a <category>
  Then the application should display a <list of eco-friendly products>.
