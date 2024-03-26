export const validateEmail = email => {
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;
  email = email.trim();

  if (email == '' || email == undefined || email == null) {
    return {status: false, error: 'Please enter email'};
  } else if (!emailRegex.test(email)) {
    return {status: false, error: 'Email is not valid'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateSpace = text => {
  var ragex = /[*%#:&\s]/;
  if (ragex.test(text)) {
    return {status: false, error: 'Space not allowed'};
  } else {
    return {status: true, error: ''};
  }
};

export const validatePhoneNo = no => {
  var phoneno = /^\d{10}$/;
  no = no.trim();
  if (no == '' || no == undefined || no == null) {
    return {status: false, error: 'Please enter phone number'};
  } else if (!phoneno.test(no)) {
    return {status: false, error: 'Phone number is not valid'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateName = name => {
  var newName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter name'};
  } else if (!newName.test(name)) {
    return {status: false, error: 'Name is not valid'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateFirstName = name => {
  var newName = /^[a-zA-Z ]*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter first name'};
  } else if (!newName.test(name)) {
    return {status: false, error: 'First name is not valid'};
  } else {
    return {status: true, error: ''};
  }
};
export const validateLastName = name => {
  // var newName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  // var newName = /^[a-zA-Z]+$/;
  var newName = /^[a-zA-Z ]*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter last name'};
  } else if (!newName.test(name)) {
    return {status: false, error: 'Last name is not valid'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateCouponCode = name => {
  var newName = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
  // var newName = /^[^*|\":<>[\]{}`\\()';@&$]+$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter coupon code'};
  } else if (!newName.test(name)) {
    return {status: false, error: 'Enter valid coupon code'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateReviewTitle = name => {
  var newName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter review title'};
  } else if (!newName.test(name)) {
    return {status: false, error: 'Review title is not valid'};
  } else {
    return {status: true, error: ''};
  }
};
export const validateReview = name => {
  // var newName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  // name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter review'};
  } else if (name.length < 5) {
    return {status: false, error: 'Enter at least 5 character'};
  } else {
    return {status: true, error: ''};
  }
};

// =======================================================================
export const validateGstNumber = name => {
  var regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter GST number'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid GST number'};
  } else {
    return {status: true, error: ''};
  }
};
export const validateCompanyName = name => {
  var regex = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter company name'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid company name'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateAccountNumber = name => {
  // var regex = /^(?:[0-9]{11}|[0-9]{2}-[0-9]{3}-[0-9]{6})$/;
  var regex = /^\d{9,18}$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter account number'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid account number'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateIfscCode = name => {
  var regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter IFSC code'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid IFSC code'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateAccounHolderName = name => {
  var regex = /^((?:[A-Za-z]+ ?){1,3})$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter accoun holder name'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid accoun holder name'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateBankName = name => {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter bank name'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid bank name'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateShopName = name => {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter shop name'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid shop name'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateAdharCard = name => {
  // var regex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;  // with space
  var regex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/; //without space
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter adhar card'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid adhar card'};
  } else {
    return {status: true, error: ''};
  }
};

export const validatePanCard = name => {
  var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter pan card'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid pan card'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateStreeNumber = name => {
  // var regex = /^[a-zA-Z]([a-zA-Z-]+\s)+\d{1,4}$/;
  var regex = /^[0-9]*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter street number'};
  }
  // else if (!regex.test(name)) {
  //   return {status: false, error: 'Enter valid street number'};
  // }
  else {
    return {status: true, error: ''};
  }
};

export const validateFlatNumber = name => {
  var regex = /^[1-9]\d*(?: ?(?:[a-z]|[/-] ?\d+[a-z]?))?$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter flat number'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid flat number'};
  } else {
    return {status: true, error: ''};
  }
};

export const validatePinCode = name => {
  var regex = /^[1-9][0-9]{5}$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Enter pin code'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid pin code'};
  } else {
    return {status: true, error: ''};
  }
};
export const validateZipCode = name => {
  var regex = /^[1-9][0-9]{5}$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter zip code'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid zip code'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateLandmark = name => {
  // var regex = /^[a-zA-Z]+$/;
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter landmark'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid landmark'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateCity = name => {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter city'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid city'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateState = name => {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  name = name.trim();
  if (name == '' || name == undefined || name == null) {
    return {status: false, error: 'Please enter state'};
  } else if (!regex.test(name)) {
    return {status: false, error: 'Enter valid state'};
  } else {
    return {status: true, error: ''};
  }
};

export const validatePrice = price => {
  var regex = /^\d+(\.\d{2})?$/; // price with dot like 2.50 RS
  // var regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\d+)?$/  // price without dot like 2 RS
  price = price.trim();
  if (price == '' || price == undefined || price == null) {
    return {status: false, error: 'Please enter price'};
  }
  if (price.length > 11) {
    return {status: false, error: 'Please enter less amount'};
  } else if (!regex.test(price)) {
    return {status: false, error: 'Enter valid price'};
  } else {
    return {status: true, error: ''};
  }
};
