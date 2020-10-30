const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const url = 'https://api.github.com/users/tryber/repos';

it('verifica a existência do primeiro repositórios', () => {
  return getRepos(url).then((result) => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
  });
});

it('verifica a existência do segundo repositórios', () => {
  return getRepos(url).then((result) => {
    expect(result).toContain("sd-01-week4-5-project-meme-generator");
  });
});
