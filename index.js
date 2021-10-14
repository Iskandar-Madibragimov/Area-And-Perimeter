function perimeterOfRectangle() {
  let height = document.querySelector(".recHeight").value;
  let width = document.querySelector(".recWidth").value;
  const operation = document.querySelector(".operationOfRectangle").value;

  perimeter = height * 2 + width * 2;
  area = height * width;

  let result = 0;
  switch (operation) {
    case "area":
      result = area;
      break;
    case "perimeter":
      result = perimeter;
      break;
  }

  document.querySelector(".resultOfRect").innerHTML = result.toFixed(2);
}

function perimeterOfTriangle() {
  let height = document.querySelector(".triHeight").value;
  let base = document.querySelector(".triWidth").value;
  const operation = document.querySelector(".operationOfTriangle").value;

  perimeter = Number(((base / 2) ** 2 + height ** 2) ** 0.5 * 2 + base);
  area = ((height * base) / 2);


  let result = 0;
  switch (operation) {
    case "area":
      result = area;
      break;
    case "perimeter":
      result = perimeter;
      break;
  }

  document.querySelector(".resultOfTri").innerHTML = result.toFixed(2);

}

function perimeterOfCircle() {
  let radius = document.querySelector(".radius").value;
  const operation = document.querySelector(".operationOfCircle").value;

  let pi = 3.14;
  perimeter = 2 * pi * radius;
  area = pi * radius ** 2;

  let result = 0;
  switch (operation) {
    case "area":
      result = area;
      break;
    case "perimeter":
      result = perimeter;
      break;
  }

  document.querySelector(".resultOfCir").innerHTML = result.toFixed(2);
}