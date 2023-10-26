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

const judul = document.querySelector('#judul')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      judul.insertAdjacentHTML('beforeend', `<h1 style="font-size:250%;" class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">${post.judul}</h1>`)
    })
    
  })

const Abstrak = document.querySelector('#abstrak')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        Abstrak.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.abstrak}</p>`)
    })
    
  })

  const latarBelakang = document.querySelector('#latar-belakang')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        latarBelakang.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.latar_belakang}</p>`)
    })
    
  })

  const identifikasiMasalah = document.querySelector('#identifikasi-masalah')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        identifikasiMasalah.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.indentifikasi_masalah}</p>`)
    })
    
  })

  const tujuan = document.querySelector('#tujuan')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        tujuan.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.tujuan}</p>`)
    })
    
  })

  const lingkupDokumentasi = document.querySelector('#lingkup-dokumentasi')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        lingkupDokumentasi.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.lingkup_dokumentasi}</p>`)
    })
    
  })
  const jadwalPelaksanaan = document.querySelector('#jadwal-pelaksanaan')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        jadwalPelaksanaan.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <img src="${post.jadwal_pelaksanaan}">`)
    })
    
  })

  const anggotaTim = document.querySelector('#anggota-tim')
  fetch("proposal.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
        anggotaTim.insertAdjacentHTML('beforeend', `<svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
        <path
            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
    </svg>
    <p style="text-align: justify;" class="mt-2 text-base text-gray-600">${post.anggota_tim}</p>`)
    })
    
  })