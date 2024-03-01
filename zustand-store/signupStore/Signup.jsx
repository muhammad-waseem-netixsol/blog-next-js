import { create } from "zustand";

const useSignUp = create((set) => ({
  loading: false,
  success: false,
  httpReqError: null,
  signUpHandler: async (url, method, credentials) => {
    set({ loading: true, httpReqError: null });
    try {
      const response = await fetch("https://blog-api-m5jf.vercel.app/auth/signup", {
        method,
        body: credentials,
      });
      if (!response.ok) {
        const httpReqErrorData = await response.json();
        console.log(httpReqErrorData);
        set({ loading: false, success: false, httpReqError: httpReqErrorData });
        return;
      }
      const data = await response.json();
      console.log(data)
      // Handle successful response
      set({ loading: false, success: true, httpReqError: null });
    } catch (httpReqError) {
      // Handle other httpReqErrors
      set({
        loading: false,
        success: false,
        httpReqError: httpReqError.message,
      });
    }
  },
}));

export default useSignUp;
