type Params = {
  list: string[];
  address: string;
  building: number;
};

function findFormattedAddress({ list, address, building }: Params) {
  const res = address + building;
  return list.find((item) => item === res);
}

function printResult(data: string) {
  return setTimeout(() => {
    console.log(`Result is: ${data}`);
  }, 3000);
}

function workerAndAdditionalProcessing(
  params: Params,
  worker: (params: Params) => string,
  callback: (a: string) => void // no error even we pass function with return value, it has madded on purpose. // but parameters are enforced - примусові
): string {
  let res = worker(params);
  callback(res);
  return res;
}

console.log(
  workerAndAdditionalProcessing(
    { list: ["sss1", "sss2", "sss3"], address: "sss", building: 2 },
    findFormattedAddress,
    printResult // function with return value
  )
);

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
