import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://jobtoday.com/wp-content/uploads/2016/02/getting-a-job-now-800x416.jpg",
          title: "Get Good Job",
          desc: "That is my Dream",
        },
        {
          id: "m2",
          image:
            "https://cdn.quotesgram.com/img/38/13/1137518253-hqdefault.jpg",
          title: "Get Marriage",
          desc: "Awesome",
        },
        {
          id: "m3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolMC7eTSFtEeeX6ijhUmB43schqmOm1nqlw&usqp=CAU",
          title: "Travel Abroad",
          desc: "Amazing",
        },
      ],
    };
  },

  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toDateString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        desc: memoryData.description
      };
      state.memories.unshift(newMemory);
    }
  },

  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    }
  },

  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
