// useEffect(() => {
let coordinated = [];
if (temp.length > 0) {
  let elements = [];

  console.log(elements);
}

if (temp2.length > 0) {
  let elements = [];
  for (let i = 0; i < temp2.length; i++) {
    elements[i] = document.getElementById(`re${i + 1}`);
    const { left, top, width } = elements[i].getBoundingClientRect();
    const topCenterX = left + width / 2;
    const topCenterY = top;
    // createMarker2(topCenterX, topCenterY);
    console.log("Bottom Center Point:", topCenterX, topCenterY);

    // calculate here the bottom points of above row

    for (let i = 0; i < temp.length; i++) {
      elements[i] = document.getElementById(`ref${i + 1}`);
      const { left, top, width, height } = elements[i].getBoundingClientRect();
      const bottomCenterX = left + width / 2;
      const bottomCenterY = top + height;
      // createMarker1(bottomCenterX, bottomCenterY);
      console.log("Bottom Center Point:", bottomCenterX, bottomCenterY);
      coordinated.push({ x: bottomCenterX, y: bottomCenterY });
      // createCurvedLine(
      //   { x: bottomCenterX, y: bottomCenterY },
      //   { x: topCenterX, y: topCenterY }
      // );
      const angle = Math.atan2(
        topCenterY - bottomCenterY,
        topCenterX - bottomCenterX
      );
      const distance = Math.sqrt(
        Math.pow(topCenterX - bottomCenterX, 2) +
          Math.pow(topCenterY - bottomCenterY, 2)
      );
      const line = document.createElement("div");
      line.className = "absolute h-[1px] origin-left bg-black";
      line.style.width = `${distance}px`;
      line.style.transform = `rotate(${angle}rad)`;
      line.style.left = `${bottomCenterX}px`;
      line.style.top = `${bottomCenterY}px`;
      document.body.appendChild(line);
    }
  }

  console.log(elements);
}
// }, [temp, temp2]);
