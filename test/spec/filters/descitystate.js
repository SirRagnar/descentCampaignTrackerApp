'use strict';

describe('Filter: desCityState', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var desCityState,translate,city;
  beforeEach(inject(['$filter', '$translate', 'desLocation', function ($filter,$translate,_desLocation_) {
    desCityState = $filter('desCityState');
    translate=$translate;
    city=_desLocation_.newCity();
  }]));

  it('new City state should be free', function () {       
    expect(desCityState(city)).toBe(translate.instant('FREE'));
  });

  it('city with false razed flag and siege tockens be sieged', function () {   
    city.siege=7;
    expect(desCityState(city)).toBe(translate.instant('SIEGED'));
  });

  it('city with true razed flag sould have Raded state', function () {   
    city.siege=7;
    city.razed=true;
    expect(desCityState(city)).toBe(translate.instant('RAZED'));
  });

  it('undefined city state should be unkown', function () {   
    var undefinedCity;
    expect(desCityState(undefinedCity)).toBe(translate.instant('UNKNOWN'));
  });

  it('empty city state should be unkown', function () {   
    var emptyCity={};
    expect(desCityState(emptyCity)).toBe(translate.instant('UNKNOWN'));
  });

  it('non object city state should be unkown', function () {   
    var invalidTypeCity=7;
    expect(desCityState(invalidTypeCity)).toBe(translate.instant('UNKNOWN'));
  });

});
