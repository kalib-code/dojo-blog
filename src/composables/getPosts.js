import { ref } from "vue";
import

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async() => {
        try {

        } catch (err) {
            error.value = err.message;
            console.log(err.value);
        }
    };

    return { posts, error, load }
}

export default getPosts