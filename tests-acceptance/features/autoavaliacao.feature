Feature: Student self-evaluation
As a student
I want to evaluate my performance in study subjects
So that I may express my views to the teacher and understand theirs

Scenario: Successful filling of self-evaluation form
Given I am at the "Self-Evaluation" page
And I fill field "Gerência de Configuração" with "MA"
When I fill field "Requisitos" with "MPA"
And I see field "Gerência de Configuração" has "MA"
Then I see field "Requisitos" has "MPA"