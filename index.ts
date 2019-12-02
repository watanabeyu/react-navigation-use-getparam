import { useRoute } from '@react-navigation/core';

const useGetParam = () => {
  const route = useRoute();

  return (paramName: string, defaultValue: any) => {
    const { params } = route;

    if (params && paramName in params) {
      return params[paramName];
    }

    return defaultValue;
  };
};

export default useGetParam;
