import { useSelector } from "react-redux";

export const useParamSelector = (selector, ...params) => {
  return useSelector((state) => selector(state, ...params));
};

export default useParamSelector;
