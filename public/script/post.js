const postButton = document.querySelector('#post-Button');
const postForm = document.querySelector('#post-Form');
const postSubmit = document.querySelector('#postSubmit');

const productImage = document.querySelector('#productImage');
const userName = document.querySelector('#inputName');
const userNumber = document.querySelector('#inputPhone');
const productName = document.querySelector('#inputItem');
const productPrice = document.querySelector('#inputPrice');
let productImagePath;

//Make Form Visible
const showForm = () => {
  if (postForm.classList.contains('hidden')) {
    postForm.classList.remove('hidden');
    postButton.innerHTML = 'Cancel';
  } else {
    postForm.classList.add('hidden');
    postButton.innerHTML = 'Create Post';
  }
};

const uploadImage = (uploadFile, productName) => {
  const [file] = uploadFile.files;
  if (file && file.type.includes('image')) {
    const formdata = new FormData();
    formdata.append('image', file);
    formdata.append('filename', productName)

    fetch('http://localhost:3000/upload', {
      method: 'post',
      body: formdata,
    })
      .then((res) => { return res.json()})
      .then((data) => { console.log(data)});
  } else {
    alert('upload Image only');
  }
};

postSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  path = uploadImage(productImage, productName.value);
  console.log(path);
});

postButton.addEventListener('click', showForm);
