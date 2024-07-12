export function passwordRegEx(password) {
  let reg = new RegExp(
    "^(?=.*[,-.>/!@#$%^&*()+])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"
  );
  if (reg.test(password)) return true;
  else return false;
}
