"use client"
import { create } from 'zustand';
import Cookies from 'js-cookie';
import blogStore from '../blogStore/Blog';
interface CommentsStore {
  loading: boolean;
  error: string;
  refetch: boolean;
  commentAddHandler: (comment: string, blogId: string) => Promise<void>;
}
const commentsStore = create<CommentsStore>((set) => ({
    loading: false,
    refetch: false,
    error: "",
    commentAddHandler: async (comment: string, blogId: string) => {
      const data = Cookies.get('token');
      if (!data) {
        set({ error: "You have to log in first!" });
        return;
      }
      const parsed = JSON.parse(data);
      const response = await fetch("https://blog-api-m5jf.vercel.app/comment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + parsed,
        },
        body: JSON.stringify({
          comment: comment,
          blog: blogId,
        }),
      });
      const resp = await response.json();
      console.log(resp);
      
      set((state) => ({ ...state, refetch: !state.refetch }));
    },
  }));
  
  export default commentsStore;
  
