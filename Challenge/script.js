let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === 'string';// ===
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 1;

  console.log(calculated)
};

const calcUser = () => {
  logCalc();//()
  if (calculated > 2) {
    user = 'John';    //removed  if (calculated > 2) & state = 'idle'
    state = 'requesting';
  }
  if (calculated > 3) { //+  if (calculated > 3) 
    state = 'idle';
    return;
  }
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();
