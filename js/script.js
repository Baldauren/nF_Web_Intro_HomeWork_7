// * task 1
function delay(ms) {
  let promise = new Promise((resolve) => setTimeout(resolve, ms));
  return promise;
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

// * task 2
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  //екінші resolve игнор болады, өйткені промиста тек бір ғана жауап болады...
  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//! жауап: alert пен 1 шығады

// * task 3

promise.then(f1).catch(f2);

promise.then(f1, f2);

//! жоқ екеуі бірдей емес, өйткені алдыңғы оброботчикта қате шықса екінші көрсетілген метод бізде дұрыс жұмыс жасамай қалады.
