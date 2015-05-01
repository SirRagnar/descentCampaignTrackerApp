'use strict';

describe('Filter: desCityStateClass', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var desCityStateClass,city;
  beforeEach(inject(['$filter', 'desLocation',function ($filter,_desLocation_) {
    desCityStateClass = $filter('desCityStateClass');
    city=_desLocation_.newCity();
  }]));  

  it('free City state should be green', function () {       
    expect(desCityStateClass(city)).toBe('label-success');
  });

  it('city sieged shoul be warning', function () {   
    city.siege=7;
    expect(desCityStateClass(city)).toBe('label-warning');
  });

  it('city with razed sould be in danger css class', function () {   
    city.siege=7;
    city.razed=true;
    expect(desCityStateClass(city)).toBe('label-danger');
  });

  it('undefined city state should be green', function () {   
    var undefinedCity;
    expect(desCityStateClass(undefinedCity)).toBe('label-success');
  });

  it('empty city state should be green', function () {   
    var emptyCity={};
    expect(desCityStateClass(emptyCity)).toBe('label-success');
  });

  it('non object city state should be green', function () {   
    var invalidTypeCity=7;
    expect(desCityStateClass(invalidTypeCity)).toBe('label-success');
  });

});
