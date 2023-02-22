import Header from "../components/Header/Header";
import RobotList from "../components/ListRobot/RobotList";

const Layout = (): JSX.Element => {
  const isLogged = false;

  return (
    <div>
      <Header />
      {isLogged ?? <RobotList />}
    </div>
  );
};

export default Layout;
