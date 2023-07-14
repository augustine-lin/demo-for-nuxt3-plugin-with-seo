
// demo.api-platform.com/books
const baseURL = 'https://demo.api-platform.com/'


// 可以把API整理成一個物件，並且注入到Vue實例中
// 記得在nuxt.config.js中註冊這個plugin

const bookAPI = {
    getBooks: async (data = {}) => {
        const query = {
            page: data.page || 1,
            itemsPerPage: data.itemsPerPage || 10,
        }
        return $fetch('/books', { baseURL, method: 'GET', query })
    },
    // demo id is 01892da6-52ea-7289-88b7-8b3b2deb6fa0
    getBookById: async (id) => $fetch(`/books/${id}`, { baseURL, method: 'GET' })
}

  
export default defineNuxtPlugin(() => {
    console.log('hi bookAPI')
    return {
        provide: {
            bookAPI
        }
    }
})