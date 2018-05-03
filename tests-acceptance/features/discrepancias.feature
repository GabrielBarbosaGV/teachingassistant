Feature: Auto-avaliação de alunos
As a teacher
I want to see my students' self-evaluations
So that I can investigate mismatches in my and students' evaluations

Scenario: No discrepancies between evaluations
Given I am at the "Student / Evaluations List" page
And I see that student "Adilson" has evaluated themselves "MA" against my "MPA" in concept "A"
And I see that student "Adilson" has evaluated themselves "MA" against my "MA" in concept "B"
And I see that student "Adilson" has evaluated themselves "MANA" against my "MPA" in concept "C"
And I see that student "Adilson" has evaluated themselves "MPA" against my "MA" in concept "D"
And I see that student "Adilson" has evaluated themselves "MA" against my "MA" in concept "E"
And I see that student "Armando" has evaluated themselves "MPA" against my "MA" in concept "A"
And I see that student "Armando" has evaluated themselves "MPA" against my "MA" in concept "B"
And I see that student "Armando" has evaluated themselves "MANA" against my "MA" in concept "C"
And I see that student "Armando" has evaluated themselves "MPA" against my "MA" in concept "D"
And I see that student "Armando" has evaluated themselves "MANA" against my "MA" in concept "E"
And I see that student "Gabriel" has evaluated themselves "MPA" against my "MPA" in concept "A"
And I see that student "Gabriel" has evaluated themselves "MA" against my "MA" in concept "B"
And I see that student "Gabriel" has evaluated themselves "MPA" against my "MPA" in concept "C"
And I see that student "Gabriel" has evaluated themselves "MPA" against my "MPA" in concept "D"
And I see that student "Gabriel" has evaluated themselves "MPA" against my "MPA" in concept "E"
When I choose to see the discrepant evaluations students list
Then I see a list with "0" students
And I see "0"% of students have discrepant evaluations