Feature: Food Waste Reduction Alerts

Allow users to receive alerts and tips to reduce food waste.

Scenario: Receive expiration alerts
  Given the user has registered their <food inventory>
  When items are near <expiration>
  Then the application should send an <alert> with suggestions for recipes or ways to use the food.

Scenario: Tips for reducing food waste
  Given the user receives a <food expiration alert>
  When the user opens the <alert>
  Then the application should provide <tips> to reduce food waste, such as quick recipes or preservation ideas.
