@wip
Feature: PisanoTestTask Tests

  Background:
    Given Navigate to URL

  Scenario: Fill and click all related fields with meaningful test data and validate message on last page
    When Go to under frame and click widget button
    Then Score with numbers
    Then Score with using emoji
    And Click next page button
    Then Fill the blanks in input place ok
    Then Click radio button that I have read and accept
    Then Select Pisano
    And Click the next page button
    Then Fill the email , phone and name inputs
    Then Click Submit button
    Then Verify the succesful message

  Scenario: Click not Accept
    When Go to under frame and click widget button
    Then Score with numbers
    Then Score with using emoji
    And Click next page button
    Then Fill the blanks in input place ok
    Then Click radio button that not accept
    Then Select Pisano
    And Click the next page button
    Then See first page
