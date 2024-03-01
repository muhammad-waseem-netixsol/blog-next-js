import {create } from 'zustand';


const reactionStore = create((set) => ({
    reactions: [],
    loading: false,
    error: false,
    getAllReactions: async () => {
        set({ loading: true, error: false, reactions: [] });
        try {
            const response = await fetch("https://blog-api-m5jf.vercel.app/get-reactions");
            const data = await response.json();
            set({ loading: false, error: false, reactions: data });
        } catch (error) {
            set({ loading: false, error: true, reactions: [] });
        }
    }
}));