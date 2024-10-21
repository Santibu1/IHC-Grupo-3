Feature: Join Group Challenges

Allow users to join group challenges to achieve shared ecological goals.

Scenario: Join a group challenge
  Given the user is in the <Challenges> section
  When the user selects an <active group challenge>
  Then the user should be able to join and contribute to the shared <goal>.

Scenario: Track group challenge progress
  Given the user has joined a <group challenge>
  When the user views the <My Progress> section
  Then the application should display the <individual contribution> and the group's overall progress.
