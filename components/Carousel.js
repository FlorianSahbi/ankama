import { useState } from "react";
import Image from "next/image";

const CarouselButton = ({ onClick, orientation }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={{
        cursor: "pointer",
        height: "60px",
        width: "60px",
        border: "4px solid white",
        padding: "10px",
        transform: "rotate(45deg)",
        margin: "18px"
      }}>
      {orientation === "left" && (
        <div
          style={{
            transition: "all .2s ease",
            left: onHover ? "-6px" : "0px",
            top: onHover ? "6px" : "0px",
            height: "100%",
            width: "100%",
            border: "4px solid orange",
            position: "relative",
          }}>
        </div>
      )}
      {orientation === "right" && (
        <div
          style={{
            transition: "all .2s ease",
            left: onHover ? "6px" : "0px",
            top: onHover ? "-6px" : "0px",
            height: "100%",
            width: "100%",
            border: "4px solid orange",
            position: "relative",
          }}>
        </div>
      )}
    </div>
  )
}

const CarouselIndicator = ({ index, active, onClick }) => {
  return (
    <div
      onClick={() => onClick(index)}
      style={{
        cursor: "pointer",
        boxShadow: "1px 1px 2px #000",
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        backgroundColor: active ? "#FA6767" : "white"
      }}
    />
  )
}

const CarouselInfo = ({ title, description }) => {
  return (
    <div style={{ position: "absolute", width: "fit-content", zIndex: "10", right: "230px", top: "130px" }}>
      <div style={{ textAlign: "right", fontFamily: "Lato", background: "white", width: "fit-content", boxShadow: "4px 4px 0 0px rgb(0 0 0 / 50%)", padding: "15px 15px 15px 20px" }}>
        <p style={{ fontSize: "25px", fontWeight: 800, marginBottom: "6px", textTransform: "uppercase" }}>{title}</p>
        <p style={{ fontSize: "15px" }}>{description}</p>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "flex-end", paddingTop: "12px" }}>
        <button type="button" style={{ background: "#e7431a", color: "white", textShadow: "0 1px 1px #333", fontFamily: "Lato", textTransform: "uppercase", padding: "12px 34px", fontSize: "11px", height: "46px", border: "none", outline: "none", cursor: "pointer" }}>Visiter le site</button>
      </div>
    </div>
  )
}

const Carousel = ({ data, hasInfo = false }) => {
  const [a, setA] = useState(0);

  const handleClick = (value, index) => {
    if (value === "-") {
      if (a === 0) {
        setA(data.length - 1)
      } else {
        setA(previousValue => previousValue - 1)
      }
    } else if (value === "+") {
      if (a === data.length - 1) {
        setA(0)
      } else {
        setA(previousValue => previousValue + 1)
      }
    } else if (value === "o") {
      setA(index)
    }
  }

  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }}>
      {data.map(({ id, img }, index) =>
        <div key={id} style={{ height: "100%", width: "100%", position: "absolute", transition: "opacity .5s ease", opacity: index === a ? "1" : "0" }}>
          <Image src={img} alt="test" layout='fill' objectFit='cover' quality='100' />
        </div>
      )}

      {hasInfo && <CarouselInfo title={data[a].title} description={data[a].description} />}

      <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute" }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: "60px" }}>
          <CarouselButton orientation="left" onClick={() => handleClick("-")} />
        </div>

        <div style={{ display: "flex", gap: "7px", alignSelf: "flex-end", marginBottom: "12px" }}>
          {data.map(({ id }, index) => <CarouselIndicator key={id} index={index} active={index === a} onClick={() => handleClick("o", index)} />)}
        </div>

        <div style={{ display: "flex", alignItems: "center", marginRight: "60px" }}>
          <CarouselButton orientation="right" onClick={() => handleClick("+")} />
        </div>
      </div>
    </div>
  )
}

export default Carousel;
