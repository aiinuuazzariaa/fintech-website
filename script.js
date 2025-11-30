const projects = [
  {
    "title": "Analisis Keberhasilan Transformasi Digital pada Platform P2P Lending (Mintos)",
    "description": "Studi kasus komprehensif tentang bagaimana Mintos menggabungkan teknologi, tata kelola, dan keamanan untuk memperkuat inklusi keuangan lintas negara.",
    "tags": ["322310016 - So Osvaldo", "322310017 - Stevan Dean Achmad Ngunardi"],
    "featured": false,
    "demoLink": "/materi/mintos",
    "repoLink": null
  },
  {
    "title": "LenDenClub: Platform P2P Lending Terpercaya dari India",
    "description": "LenDenClub adalah platform peer-to-peer (P2P) lending yang menghubungkan pemberi pinjaman individu dengan peminjam terverifikasi secara langsung tanpa bank sebagai perantara. Sejak didirikan pada 2015 dan dinaungi regulasi Reserve Bank of India (RBI) sebagai NBFC-P2P, LenDenClub menawarkan proses 100% digital, diversifikasi pinjaman, dan tingkat bunga menarik bagi pemberi pinjaman.",
    "tags": ["322310010 - Demitri Fernando Putra Aryandi Gledek", "322310021 - Ainu Azzaria"],
    "featured": false,
    "demoLink": "/materi/lendenclub",
    "repoLink": "https://github.com/aiinuuazzariaa/LenDenClub"
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
