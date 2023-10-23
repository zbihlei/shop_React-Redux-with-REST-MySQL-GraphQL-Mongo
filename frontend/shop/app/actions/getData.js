
export  async function getGeneral() {
   try {
     const res = await fetch("http://localhost:8800");
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }

 export  async function getSpecific(name) {
   try {
     const res = await fetch(`http://localhost:8800/${name}`);
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }