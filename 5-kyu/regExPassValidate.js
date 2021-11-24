function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z\d]{6,}$/.test(password);
  }
  
  console.log(validate("dD2klo"));