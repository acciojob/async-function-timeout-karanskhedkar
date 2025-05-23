//your JS code here. If required.
const delayedPromise = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const text = document.getElementById("text")?.value;
  const delay = document.getElementById("delay")?.value;
  const output = document.getElementById("output");
  try {
    await delayedPromise(delay);
    output.innerText=text;
  } catch (err) {
    output.innerText="";
  }
};
