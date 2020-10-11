async function postData  (src, data) {
    let response =  await fetch(src, {
        method: 'POST',
        body: data
    });
    return await response.text();
}

async function getResource  (url) {
    let response =  await fetch(url);

    if(!response.ok){
        throw new Error(`could not fetch ${url}, status ${response.status}`)
    }
    return await response.json();
}

export {postData, getResource};

