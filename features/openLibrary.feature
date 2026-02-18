Feature: Validate OpenLibrary Author API

  Scenario: Validate author details
    Given I send a GET request to the OpenLibrary author endpoint
    Then the personal_name should be "Sachi Rautroy"
    And the alternate_names should contain "Yugashrashta Sachi Routray"
