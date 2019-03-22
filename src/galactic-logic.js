let todayDate = new Date();
const planetValues = {
  Mercury: 0.24,
  Venus: 0.62,
  Mars: 1.88,
  Jupiter: 11.86
};

export class UserAge {
  constructor(userDOB, userLifeExpectancy) {
    this.DOB = new Date(userDOB);
    this.userAgeInYears;
    this.userLifeExpectancy = userLifeExpectancy;
  }

  calculateEarthAgeInYears() {
    let userAgeInSecond = (todayDate.getTime() - this.DOB.getTime()) / 1000;
    this.userAgeInYears = (userAgeInSecond / 31622400).toFixed(1);
    return this.userAgeInYears;
  }
  calculateAgeOnPlanet(planet) {
    let ageOnPlanet = (this.userAgeInYears / planetValues[planet]).toFixed(1);
    return ageOnPlanet;
  }
  calculateYearsLeftOnPlanet(planet) {
    let yearsLeftOnPlanet;
    if (planet === "Earth") {
      yearsLeftOnPlanet = this.userLifeExpectancy - this.userAgeInYears;
    } else {
      yearsLeftOnPlanet = (
        this.userLifeExpectancy / planetValues[planet] -
        parseFloat(this.calculateAgeOnPlanet(planet))
      ).toFixed(1);
    }
    let result = `You still have ${yearsLeftOnPlanet} years of fun and joy left on ${planet}!`;
    if (yearsLeftOnPlanet < 0) {
      result = `You have lived ${Math.abs(yearsLeftOnPlanet)} years over the expectancy on ${planet}! You are alone!!`;
    }
    return result;
  }
}
