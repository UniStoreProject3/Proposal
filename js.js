if (document.getElementById('nav-mobile-btn')) {
  document.getElementById('nav-mobile-btn').addEventListener('click', function () {
      if (this.classList.contains('close')) {
          document.getElementById('nav').classList.add('hidden');
          this.classList.remove('close');
      } else {
          document.getElementById('nav').classList.remove('hidden');
          this.classList.add('close');
      }
  });
}

// Mendapatkan referensi tombol HTML
const btnProposal = document.getElementById('btnProposal');


// Menambahkan event listener untuk mengarahkan pengguna ke halaman "Proposal" ketika tombol diklik
btnProposal.addEventListener('click', () => {
  // Mengubah URL halaman ke halaman "Proposal"
  window.location.href = 'proposal.html'; // Gantilah dengan URL sebenarnya
});




const dataIbrohim = document.querySelector('#ibrohim')
  fetch("ibrohim.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      dataIbrohim.insertAdjacentHTML('beforeend', `<div class="max-w-6xl mx-auto">
      <div class="flex-col items-center ">
          <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              <p class="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Profil Singkat Ibrohim
              </p>
              <h2
                  class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  ${post.nama}</h2>


          </div>
          <div class="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div class="w-full xl:w-1/2 xl:pr-8">
                  <blockquote
                      class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                      <div class="flex flex-col pr-8">
                          <div class="relative pl-12">
                              <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path
                                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                              </svg>
                              <p class="mt-2 text-base text-gray-600">Mahasiswa semester 5 di ${post.universitas} Fakultas ${post.fakultas} Prodi ${post.prodi} Kelas ${post.kelas}
                              </p>
                          </div>

                          <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">${post.nama} <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- ULBI</span></h3>
                          <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                      </div>
                      <img class="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                          src="./images/ibrohim.jpg"
                          alt="">
                  </blockquote>
              </div>
          </div>
          
      </div>
  </div>`)
    })
    
  })

  const dataAkbar = document.querySelector('#akbar')
  fetch("akbar.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      dataAkbar.insertAdjacentHTML('beforeend', `<div class="max-w-6xl mx-auto">
      <div class="flex-col items-center ">
          <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              <p class="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Profil Singkat Akbar
              </p>
              <h2
                  class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  ${post.nama}</h2>


          </div>
          <div class="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div class="w-full xl:w-1/2 xl:pr-8">
                  <blockquote
                      class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                      <div class="flex flex-col pr-8">
                          <div class="relative pl-12">
                              <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path
                                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                              </svg>
                              <p class="mt-2 text-base text-gray-600">Mahasiswa semester 5 di ${post.universitas} Fakultas ${post.fakultas} Prodi ${post.prodi} Kelas ${post.kelas}
                              </p>
                          </div>

                          <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">${post.nama} <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- ULBI</span></h3>
                          <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                      </div>
                      <img class="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                          src="./images/akbar.jpg"
                          alt="">
                  </blockquote>
              </div>
          </div>
          
      </div>
  </div>`)
    })
    
  })
  const about = document.querySelector('#about')
  fetch("about.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        about.insertAdjacentHTML('beforeend', `<div class="max-w-6xl mx-auto">
      <div class="flex-col items-center ">
          <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              
              <h2
                  class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  ABOUT US</h2>


          </div>
          <div class="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div class="w-full xl:w-1/2 xl:pr-8">
                  <blockquote
                      class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                      <div class="flex flex-col pr-8">
                          <div class="relative pl-12">
                              <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path
                                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                              </svg>
                              <p style="text-align: justify;class="mt-2 text-base text-gray-600">${post.about}
                              </p>
                          </div>

                          
                      </div>
                      
                  </blockquote>
              </div>
          </div>
          
      </div>
  </div>`)
    })
    
  })
