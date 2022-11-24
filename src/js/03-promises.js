function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, 0);
});
  return promise;
}
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = e.target.elements.delay.value;
  const interval = e.target.elements.step.value;
  const amount = e.target.elements.amount.value;
  setTimeout(() => {
    let counter = 0;
    let timerId;
    timerId = setInterval(() => {
      const sumDelay = +delay + counter * +interval;
      createPromise(counter+1, sumDelay)
        .then(value => { console.log(value) })
        .catch(value => { console.log(value) });
        counter++;
      if (counter === +amount) {
        clearInterval(timerId);
      }
      }, interval)
  }, delay)
  e.target.reset();
});