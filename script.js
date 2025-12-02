const projects = [
  {
    "title": "Analisis Keberhasilan Transformasi Digital pada Platform P2P Lending (Mintos)",
    "description": "Studi kasus komprehensif tentang bagaimana Mintos menggabungkan teknologi, tata kelola, dan keamanan untuk memperkuat inklusi keuangan lintas negara.",
    "tags": ["322310016 - So Osvaldo", "322310017 - Stevan Dean Achmad Ngunardi"],
    "featured": false,
    "demoLink": "/materi/mintos",
    "repoLink": "https://github.com/Stevandean/Mintos-Latvia"
  },
  {
    "title": "Analisis Platform P2P Lending LenDenClub: Kinerja, Mekanisme, dan Potensi Risiko",
    "description": "Ringkasan ini membahas cara kerja LenDenClub sebagai platform P2P lending di India, meliputi model bisnis, mekanisme penilaian risiko, peluang imbal hasil bagi lender, serta potensi risiko yang perlu diperhatikan oleh investor.",
    "tags": ["322310010 - Demitri Fernando Putra Aryandi", "322310021 - Ainu Azzaria"],
    "featured": false,
    "demoLink": "/materi/lendenclub",
    "repoLink": "https://github.com/aiinuuazzariaa/LenDenClub"
  },
  {
    "title": "Transformasi Zopa: Evolusi P2P ke Bank Digital",
    "description": "Transformasi Zopa menunjukkan bagaimana inovasi teknologi seperti cloud, machine learning, dan security digital dapat meningkatkan efisiensi serta kepercayaan dalam layanan keuangan modern.",
    "tags": ["322310007 - Aveline Ong", "322310014 - Letsyia Agatha Surya Putri"],
    "featured": false,
    "demoLink": "/materi/zopa",
    "repoLink": null
  },
  {
    "title": "Merevolusi Pembiayaan UMKM di Asia Tenggara",
    "description": "Tunding Societies Malaysia, bagian dari grup Modalku, memimpin transformasi ini dengan mengandalkan teknologi digital, analitik data, dan sistem kredit berbasis AI (Artificial Intelligence).",
    "tags": ["322310012 - Felix Chrisyanto", "322310019 - Trevin Yoris Kenjiro"],
    "featured": false,
    "demoLink": "/materi/fsmalaysia",
    "repoLink": "https://github.com/FelixChrisyanto/Teknologi_Keuanganfelixtrevin"
  },
  {
    "title": "Merevolusi Pembiayaan UMKM di Asia Tenggara",
    "description": "Segala sesuatu yang perlu anda ketahui tentang perkembangan teknologi dan keuangan PeerBerry.",
    "tags": ["322310003 - Ruben Nathanael", "322310009 - David Augusto"],
    "featured": false,
    "demoLink": "/materi/peerberry",
    "repoLink": "https://github.com/breakthelimit775-cloud/FINTECH"
  },
  {
    "title": "Merevolusi Pembiayaan UMKM di Asia Tenggara",
    "description": "Analisis mengenai Funding Circle, salah satu platform P2P lending asal Inggris. Konten di dalamnya mencakup latar belakang perkembangan fintech, teori pendukung, hingga evaluasi keberhasilan dan tantangan Funding Circle.",
    "tags": ["322310015 - Marcell Chandra Kenchana", "322310020 - William Christoper Linardi"],
    "featured": false,
    "demoLink": "/materi/fundingcicrcle",
    "repoLink": "https://github.com/Marcell151/WebArtikel_P2P-Funding-Circle"
  },
];

function renderProjects(filtered) {
  const grid = document.getElementById('projectsGrid');
  const noProjects = document.getElementById('noProjects');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noProjects.classList.remove('hidden');
    return;
  }

  noProjects.classList.add('hidden');

  grid.innerHTML = filtered.map(project => `
        <div class="group relative flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
          <div class="flex flex-col flex-grow p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                ${project.title}
              </h3>
              ${project.featured ? '<span class="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">Featured</span>' : ''}
            </div>

            <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              ${project.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              ${project.tags.map(tag => `
                <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                  ${tag}
                </span>
              `).join('')}
            </div>

            <div class="flex items-center gap-4 mt-auto py-4 border-t border-slate-700/50">
              ${project.demoLink ? `
                <a href="${project.demoLink}" class="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors font-medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Lihat Materi
                </a>
              ` : ''}
              ${project.repoLink ? `
                <a href="${project.repoLink}" class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ${project.demoLink ? 'ml-auto' : ''}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Github
                </a>
              ` : ''}
              ${!project.demoLink && !project.repoLink ? '<span class="text-xs text-slate-500 italic">Coming soon</span>' : ''}
            </div>
          </div>
        </div>
      `).join('');
}

function searchProjects() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  const filtered = projects.filter(project => {
    const titleMatch = project.title.toLowerCase().includes(searchTerm);
    const descMatch = project.description.toLowerCase().includes(searchTerm);
    const tagsMatch = project.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    return titleMatch || descMatch || tagsMatch;
  });

  renderProjects(filtered);
}

// Initial render
renderProjects(projects);
