const Base_API= 'https://api.jikan.moe/v3/anime';

class Api{
    async getSuggestion(id){
        const query = await fetch(`${Base_API}/${id}/episodes`);
        const {data} = await query.json();
        return data.episodes;
    }
}
export default new Api();