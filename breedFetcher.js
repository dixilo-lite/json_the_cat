const needle = require("needle");
const args = process.argv;
let newArgs = args.slice(2);
let breed = newArgs[0];
let description = (data) => {
  console.log(data[0].description);
};
needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error,response,body) => {
 
  if (error)  {
    console.log(`${error} error encountered found`);
  } else  {
    try {
      description(body);
    } catch (error)  {
      console.log("breed not found");
    }
  }
});

