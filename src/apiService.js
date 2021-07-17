export default {
    BASE_URL: 'https://pixabay.com/api/',
    KEY: '22537564-562b41f5a862529ce217fabc6',
    PER_PAGE: 12,
    page: 1,
    fetchImageByKeyWord(query) {
        return fetch(`${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${this.page}&per_page=${this.PER_PAGE}&key=${this.KEY}`).then(response => {
            this.pageIncrease();
            return response.json()});
    },
    pageIncrease() {
        this.page += 1;
    },
    
    pageReset() {
        this.page = 1;
    }
}