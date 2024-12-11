import Card from "../Card";

const Mobile_layout = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Mobile_layout;
