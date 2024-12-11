import Card from "../Card";

const PC_layout = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        padding: "60px 30px",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default PC_layout;
