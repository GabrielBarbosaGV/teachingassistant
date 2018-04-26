Feature: Cadastro de auto avaliação
As a student
I want to evaluate my performance in study subjects
So that I may express my views to the teacher and understand theirs

Scenario: successful filling of self-evaluation form (GUI)
Given I am at the "Self-Evaluation" page
When I fill field "Requisitos" with "MPA"
And I fill field "Gerência de Configuração" with "MA"
Then I see the field "Requisitos" has "MPA"
And I see the field "Gerência de Configuração" has "MA"