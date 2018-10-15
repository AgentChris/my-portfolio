import ReactGA from "react-ga";

export const get_GA = () => {
  ReactGA.initialize('UA-120608794-4');
  return ReactGA;
};

const GA_OBJECT = get_GA();

export default GA_OBJECT;
