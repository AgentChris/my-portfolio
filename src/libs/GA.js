import ReactGA from "react-ga";

export const get_GA = () => {
  return ReactGA.initialize('UA-120608794-4');
};

const GA_OBJECT = get_GA();

export default GA_OBJECT;
