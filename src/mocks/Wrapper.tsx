import { Provider } from "react-redux";
import { mockStore } from "../store";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={mockStore}> {children}</Provider>
);

export default Wrapper;
