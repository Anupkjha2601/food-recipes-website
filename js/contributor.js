const owner = 'Anupkjha2601';
const repo = 'food-recipes-website';
const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

fetch(url)
  .then(response => response.json())
  .then(async data => {
    const contributorsContainer = document.getElementById('contributors');

    for (const contributor of data) {
      const contributorCard = document.createElement('div');
      contributorCard.classList.add('p-4', 'lg:w-1/2', 'contributor-card');

      const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?author=${contributor.login}`;
      const commitsResponse = await fetch(commitsUrl);
      const commitsData = await commitsResponse.json();

      const contributorCommits = commitsData.length;

      const contributorRole = contributor.login === owner ? 'Project Admin' : 'Contributor';

      contributorCard.innerHTML = `
        <div class="h-full">
          <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
            <img alt="team" class="flex-shrink-0  w-48 h-44 object-cover object-center sm:mb-0 mb-4 contributor-image" src="${contributor.avatar_url}">
          </a>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-white">${contributor.login}</h2>
            <h3 class="text-gray-500 mb-1">${contributorRole}</h3>
            <p class="mb-1">Contributions: ${contributorCommits}</p>
          </div>
        </div>
      `;

      contributorsContainer.appendChild(contributorCard);
    }
  })
  .catch(error => console.error('Error fetching GitHub contributors:', error));
