import { useMediaQuery } from "react-responsive";

const MenuLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
        gap: isMobile ? "20px" : "30px",
      }}
    >
      {children}
    </section>
  );
};

export default MenuLayout;
