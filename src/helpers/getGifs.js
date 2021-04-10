export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=RNgBxbrK8QgOSe44uDPFH4CVHa13TnOD&limit=8`; 
    const response = await fetch(url);
    const { data } = await response.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.preview_gif.url
        }
    });

    return gifs;
}