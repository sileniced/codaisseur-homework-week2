module.exports.groupAdultsByAgeRange = group => {

  let sorting = {
    '20 and younger': [],
    '21-30': [],
    '31-40': [],
    '41-50': [],
    '51 and older': []
  };

  return group.reduce((grouped, adult) => {
    switch (true) {
      case adult.age < 18:
        return grouped;
      case adult.age < 21:
        grouped['20 and younger'].push(adult);
        break;
      case adult.age < 31:
        grouped['21-30'].push(adult);
        break;
      case adult.age < 41:
        grouped['31-40'].push(adult);
        break;
      case adult.age < 51:
        grouped['41-50'].push(adult);
        break;
      default:
        grouped['51 and older'].push(adult);
        break;
    }
    return grouped;

  }, sorting)
};