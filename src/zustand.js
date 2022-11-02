import create from "zustand";
import { persist } from "zustand/middleware"

let loginStore = set => ({
    login: "",
    addLogin: (name) => set({ login: name }),
    removeLogin: () => set({ login: "" }),
})

loginStore = persist(loginStore, { name: "loginName" });

const useLogin = create(loginStore);

let todoStore = (set) => ({
    list: [],
    addList: (newTodo) => set(state => ({ list: [...state.list, { id: Date.now(), name: newTodo }] })),
    deleteItem: (id) => set(state => ({ list: state.list.filter(item => item.id != id) })),
    clear: () => set(state => ({ list: [] }))
})

todoStore = persist(todoStore, { name: "todolist" })

const useTodo = create(todoStore);

let dataFetch = set => ({
    fetchData: [],
    //loading, error and fetch
    loading: true,
    errorMSG: "",
    fetch: async (url) => {
        // const response = await fetch(url)
        // const data = await response.json()
        const response = await (await fetch(url)).json();
        set({ fetchData: response, loading: false })
    },
    setLoading: () => set(state => ({ loading: false }))
})

const useFetch = create(dataFetch)

let themeSelect = set => ({
    themeValDark: { bgColor: "bg-blue-200", textColor: "text-black" },
    themeValLight: { bgColor: "bg-black", textColor: "text-white" }
})

const useTheme = create(themeSelect);



export { useTodo, useLogin, useFetch, useTheme }