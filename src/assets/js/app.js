const storage = window.localStorage

const renderEditor = () => {
  const userText = JSON.parse(storage.getItem('text'))

  let div = document.querySelector('#text-editor')
  if (userText) {

  } else {
    div.innerHTML = "<p>Go on, write something!</p>"
  }


}