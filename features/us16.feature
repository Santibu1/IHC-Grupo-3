Feature: Record Home Energy Consumption

Allow users to record their energy consumption to analyze their carbon footprint.

Scenario: Record energy consumption
  Given the user is entering <energy data> for electricity, gas, and water
  When the user completes the <monthly data>
  Then the application should display the <carbon footprint analysis>.

Scenario: Receive energy efficiency suggestions
  Given the user has high <energy consumption>
  When the system detects elevated <usage>
  Then the application should suggest <measures> to optimize energy use.
