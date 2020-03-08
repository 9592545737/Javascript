class Storage{

  constructor() {
    this.country;
    this.pCode;
    this.defaultCountry = 'CA';
    this.defaultPCode = 'V6T 1Z4';
  }

  getLocationData() {
    if (localStorage.getItem('country') === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');      
    }

    if (localStorage.getItem('pCode') === null) {
      this.pCode = this.defaultPCode;
    } else {
      this.pCode = localStorage.getItem('pCode');
    }

    return {
      country: this.country,
      pCode:this.pCode
    }
  }

  setLocationData(country, pCode) {
    localStorage.setItem('country', country);
    localStorage.setItem('pCode', pCode)
    
  }
}