'use strict';

describe('Service: desLocation', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desLocation, newCity,newIsland,newDungeon;
  beforeEach(inject(function (_desLocation_) {
    desLocation = _desLocation_;
    newCity = desLocation.newCity();
    newIsland=desLocation.newIsland();
    newDungeon=desLocation.newDungeon();
  }));

  it('new city state should be free', function () {
    expect(desLocation.cityState(newCity)).toBe('FREE');
  });

  it('city with siege tockens shoul be sieged', function () {
    var siegedCity = newCity;
    siegedCity.siege=7;
    expect(desLocation.cityState(siegedCity)).toBe('SIEGED');
  });

  it('city with razed flag true tockens shoul be razed', function () {
    var razedCity = newCity;
    razedCity.razed=true;
    expect(desLocation.cityState(razedCity)).toBe('RAZED');
  });

  it('undefined city state should be unkown', function () {
    var undefinedCity;
    expect(desLocation.cityState(undefinedCity)).toBe('UNKNOWN');
  });

  it('empty city state should be unkown', function () {
    var emptyCity={};
    expect(desLocation.cityState(emptyCity)).toBe('UNKNOWN');
  });

  it('wrong type city state should be unkown', function () {
    var wrongTypeCity=8;
    expect(desLocation.cityState(wrongTypeCity)).toBe('UNKNOWN');
  });

 it('undefined adventure state should be unkown', function () {
    var undefinedLocation;
    expect(desLocation.adventureLocationState(undefinedLocation)).toBe('UNKNOWN');
  });
});
