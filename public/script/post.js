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
    console.log('Hello');
    postButton.innerHTML = 'Cancel';
  } else {
    postForm.classList.add('hidden');
    postButton.innerHTML = 'Create Post';
  }
};

const uploadImage = (uploadFile, uploadType) => {
  const [file] = uploadFile.files;
  if (file && file.type.includes('image')) {
    const formdata = new FormData();
    formdata.append('image', file);

    fetch('http://localhost:3000/upload', {
      method: 'post',
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (uploadType == 'image') {
          addImage(data, file.name);
        } else {
          bannerPath = `${location.origin}/${data}`;
          banner.style.backgroundImage = `url("${bannerPath}")`;
        }
      });
    console.log('Puta madre');
  } else {
    alert('upload Image only');
  }
};

postSubmit.addEventListener('click', () => {
  uploadImage(productImage, 'image');
});

postButton.addEventListener('click', showForm);
