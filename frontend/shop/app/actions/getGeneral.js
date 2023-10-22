export default function getGeneral(){
   return  fetch("http://localhost:8800").then(res => res.json());
}