let count = 0;
function PrintName(name) {
  if (count !== 3) {
    count++;
    PrintName("Richa");
    console.log(name);
  }
}
PrintName("Richa");
