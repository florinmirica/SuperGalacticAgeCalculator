import { UserAge } from "../src/galactic-logic";

describe("Galactic Age Calculator", function() {
  let userDOB = "October 18, 1981";
  let userLifeExpectancy = 100;
  let newUser = new UserAge(userDOB, userLifeExpectancy);

  it("should correctly return the user's age in Earth years", function() {
    expect(newUser.calculateEarthAgeInYears()).toEqual("37");
  });
  it("should correctly return the user's age in Mercury years.", function() {
    expect(newUser.calculateAgeOnPlanet("Mercury")).toEqual("154");
  });
  it("should correctly return the user's age in Venus years.", function() {
    expect(newUser.calculateAgeOnPlanet("Venus")).toEqual("60");
  });
  it("should correctly return the user's age in Mars years.", function() {
    expect(newUser.calculateAgeOnPlanet("Mars")).toEqual("20");
  });
  it("should correctly return the user's age in Jupiter years.", function() {
    expect(newUser.calculateAgeOnPlanet("Jupiter")).toEqual("3");
  });
  it("should correctly return the number of remaining years the user have left on Earth", function() {
    let newUser = new UserAge("October 18, 1881", 100);
    newUser.calculateEarthAgeInYears();
    expect(newUser.calculateYearsLeftOnPlanet("Earth")).toEqual(
      "You have lived 37 years over the expectancy on Earth! You are alone!!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Mercury", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Mercury")).toEqual(
      "You still have 263 years of fun and joy left on Mercury!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Venus", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Venus")).toEqual(
      "You still have 101 years of fun and joy left on Venus!"
    );
  });
  it("should correctly return the number of remaining years the user have left on March", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Mars")).toEqual(
      "You still have 33 years of fun and joy left on Mars!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Jupiter", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Jupiter")).toEqual(
      "You still have 5 years of fun and joy left on Jupiter!"
    );
  });
});
