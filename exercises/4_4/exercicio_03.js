let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info["recorrente"] = "sim";
console.log(info);

for (let properties in info){
  console.log(properties);
};