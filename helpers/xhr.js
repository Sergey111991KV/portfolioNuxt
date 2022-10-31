export function sendHttpRequest (method, url, cookie, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.responseType = 'json'

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json')
    }
    // xhr.setRequestHeader('Set-Cookie', `session=${cookie}`, 'httpOnly')
    xhr.withCredentials = true
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(new Error('Something went wrong!'))
    }

    xhr.send(JSON.stringify(data))
  })
}

export const getData = async function (url, cookie) {
  return await sendHttpRequest('GET', url, cookie).then((responseData) => {
    console.log(responseData)
    return responseData
  })
}

export const sendData = async function (url, cookie, data) {
  return await sendHttpRequest('POST', url, cookie, data)
    .then((responseData) => {
      console.log(responseData)
      return responseData
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}
