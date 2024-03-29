import axios from "axios";
import {create} from "zustand";

interface State {
  data: string[]; // Modify this type according to your API response
}

interface Actions {
  fetchData: () => Promise<void>;
}

const useStore = create<State & Actions>((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const data: any = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      //   const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useStore;
