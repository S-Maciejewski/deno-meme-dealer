const fetchMeme = (topMemesRange: number) => {
  return fetch(`https://www.reddit.com/r/memes/top/.json?count=${topMemesRange}`)
    .then(res => res.json())
    .then(res => {
      // console.log(res.data.children[Math.floor(Math.random() * res.data.children.length)])
      return res.data.children[Math.floor(Math.random() * topMemesRange)].data.url;
    });
}

const getRandomMeme =  async() => {
  let url = await fetchMeme(20);
  console.log(url);
}

getRandomMeme()