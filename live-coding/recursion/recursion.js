const recursify = (num) => {
  if(num === 0) {
    return;
  }

  console.log(num);
  recursify((--num))
  console.log(num);

}

recursify(3)