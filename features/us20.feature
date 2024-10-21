Feature: Forum Communication

Allow users to communicate with others and exchange information in the forum.

Scenario: Access the community forum
  Given the user needs to enter the <community forum>
  When the user selects the <Forum> option
  Then the system should direct the user to the <forum section>.

Scenario: User-to-user communication
  Given the user is in the <community forum>
  And they wish to talk with other users
  Then the user should be able to select <conversations> or search for a <specific user>.
