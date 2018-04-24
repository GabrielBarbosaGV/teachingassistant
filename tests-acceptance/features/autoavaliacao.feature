Feature: Cadastro de auto avaliação
As a student
I want to evaluate my performance in study subjects
So that I may express my views to the teacher and understand theirs

Scenario: successful filling of self-evaluation form (GUI)
Given I am at the “Self-Evaluation” page
When I fill field “A” with “MPA”
And I fill field “B” with “MA”
And I fill field “C” with “MPA”
And I submit the form
Then I see a confirmation message

Scenario: Failure in self-evaluation due to lack of data provided (GUI)
Given I am at the “Self-Evaluation” page
When I fill field “A” with “MPA”
And I fill field “B” with “MA”
And I submit the form
Then I see a failure message


