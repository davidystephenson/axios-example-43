// import the package
const axios = require('axios')

// declare an async function
async function getUrl (url) {
  // wrap everything in try
  try {
    // await the call axios.get inside the async function
    // pass it a URL
    // returns the result
    const result = await axios.get(url)

    // console.log('result test:', result)
    console.log('done')

    // destructure the data from the result
    const { data } = result
    // const data = result.data

    // result.data is what you actually want
    console.log('data test:', data)
  } catch (error) { // catch the error
    // log the error's message
    console.log(error.message)
  }
}

// call the async function
console.log('before')
getUrl('cnn.com')
getUrl('http://nos.nl')
console.log('after')