const fetchMeme = (topMemesRange: number) => {
    return fetch(`https://www.reddit.com/r/memes/top/.json?count=${topMemesRange}`)
        .then(res => res.json())
        .then(res => {
            // console.log(res.data.children[Math.floor(Math.random() * res.data.children.length)])
            return res.data.children[Math.floor(Math.random() * topMemesRange)].data.url;
        });
}

export const getRandomMeme = async () => {
    console.log('Request at /meme got!')
    let url = await fetchMeme(20);
    return url;
}