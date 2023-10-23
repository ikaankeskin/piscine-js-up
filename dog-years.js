function dogYears(planet, ageInSeconds) {
    const earthYearInSeconds = 31557600;
    const ageInEarthYears = ageInSeconds / earthYearInSeconds;
  
    let dogYearsMultiplier;
    switch (planet) {
      case 'earth':
        dogYearsMultiplier = 1;
        break;
      case 'mercury':
        dogYearsMultiplier = 0.2408467;
        break;
      case 'venus':
        dogYearsMultiplier = 0.61519726;
        break;
      case 'mars':
        dogYearsMultiplier = 1.8808158;
        break;
      case 'jupiter':
        dogYearsMultiplier = 11.862615;
        break;
      case 'saturn':
        dogYearsMultiplier = 29.447498;
        break;
      case 'uranus':
        dogYearsMultiplier = 84.016846;
        break;
      case 'neptune':
        dogYearsMultiplier = 164.79132;
        break;
      default:
        throw new Error('Invalid planet name');
    }
  
    const ageInDogYears = ageInEarthYears * 7 / dogYearsMultiplier;

    const roundedAgeInDogYears = Math.round(ageInDogYears * 100) / 100;
    return roundedAgeInDogYears;
  }
  