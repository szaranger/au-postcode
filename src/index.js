export function getStateByPostcode(postcode) {
  const firstDigit = postcode[0];
  const code = Number(postcode);

  switch (firstDigit) {
    case "0":
      // 	08** and 09**
      if (code >= 800 && code <= 900) {
        return "NT";
      }
      break;
    case "2":
      // 2600 to 2618 and 29**
      if ((code >= 2600 && code <= 2618) || code > 2899) {
        return "ACT";
      } else {
        return "NSW";
      }
    case "3":
      return "VIC";
    case "4":
      return "QLD";
    case "5":
      return "SA";
    case "6":
      return "WA";
    case "7":
      return "TAS";
  }

  return "Unknown Postcode";
}
