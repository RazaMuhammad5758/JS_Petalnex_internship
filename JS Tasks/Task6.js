function debounce(fn, delay) {
    let timerId; // timer id store krega k kb fn ko execute hona h
  
    return function(...args) {
      // mojuda time ko clear krega, delay countdown restart krny k liye
      clearTimeout(timerId);
  
      // yahan shceduling krengy k fn ko ktna delay lena h by setTimeout
      timerId = setTimeout(() => {
        fn.apply(this, args); 
      }, delay);
    };
  }
  
const log = () => console.log('Debounced');
const debouncedLog = debounce(log, 500);

window.addEventListener('resize', debouncedLog);
