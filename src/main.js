import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { UserAge } from "./galactic-logic";

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    let DOB = $("#inputDOB").val();
    let lifeExpectancy = parseInt($("#inputExpectancy").val());
    let newUser = new UserAge(DOB, lifeExpectancy);
    $("#earthAge").text(newUser.calculateEarthAgeInYears());
    $("#earthLeft").text(newUser.calculateYearsLeftOnPlanet("Earth"));
    $("#mercuryAge").text(newUser.calculateAgeOnPlanet("Earth"));
    $("#mercuryLeft").text(newUser.calculateYearsLeftOnPlanet("Mercury"));
    $("#venusAge").text(newUser.calculateAgeOnPlanet("Mercury"));
    $("#venusLeft").text(newUser.calculateYearsLeftOnPlanet("Venus"));
    $("#marsAge").text(newUser.calculateAgeOnPlanet("Mars"));
    $("#marsLeft").text(newUser.calculateYearsLeftOnPlanet("Mars"));
    $("#jupiterAge").text(newUser.calculateAgeOnPlanet("Jupiter"));
    $("#jupiterLeft").text(newUser.calculateYearsLeftOnPlanet("Jupiter"));
  });
});
