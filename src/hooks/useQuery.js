import { useMediaQuery } from "react-responsive";

const useQuery = () => {
  const sm = useMediaQuery({ query: "(max-width: 640px)" });
  const md = useMediaQuery({ query: "(max-width: 768px)" });
  const lg = useMediaQuery({ query: "(max-width: 1024px)" });
  const xl = useMediaQuery({ query: "(max-width: 1280px)" });
  const xxl = useMediaQuery({ query: "(min-width: 1281px)" });

  let size = "";

  if (sm) { size = "sm" }
  else if (md) { size = "md" }
  else if (lg) { size = "lg" }
  else if (xl) { size = "xl" }
  else { size = "xxl" }

  return size;
};

export default useQuery;
