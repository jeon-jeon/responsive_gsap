const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <img
        style={{ width: "70%", objectFit: "cover" }}
        src="https://mmthcoffee.com/files/menu/0659be6fc4c5072c504220c76144d0f8.png"
        alt=""
      />
      <strong>애플 모과차</strong>
    </div>
  );
};

export default Card;
