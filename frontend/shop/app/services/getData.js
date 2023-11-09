
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

  export  async function getSpecificItem(name, id) {
   try {
     const res = await fetch(`http://localhost:8800/${name}/${id}`);
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }

 export async function postData(url , data) {
  try {
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type" : "application/json"
      },
      body: data, 
    });
 
    return response.json(); 
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; 
  }
}

export  async function getOrdersByEmail(mail) {
  try {
    const res = await fetch(`http://localhost:8800/orders?mail=${mail}`);
      return res.json();
  } catch (error) {
    console.log(error);
  }
}

