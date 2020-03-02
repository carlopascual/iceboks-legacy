import { WHITE, BLACK_10 } from "~/styles";
const Component = () => (
  <div
    style={{
      position: "fixed",
      right: 0,
      top: 0,
      height: "100vh",
      width: "180px",
      boxShadow: `-1px 0 0 0 ${BLACK_10}`,
      background: WHITE
    }}
  >
    menu
  </div>
);

export default Component;
