const btn = document.getElementById("btn");
const joke = document.getElementById("jokes");


//for static...



// let count =0;
// btn.addEventListener("click", () => {

//     if(count==jokes.length){
//         count=0

//     }
   
//     joke.innerHTML=jokes[count]
//     count++
// });

// const jokes = [
//   "I used to work for an origami company but they folded.",
//   "What time did the man go to the dentist? Tooth hurt-y.",
//   "Where do sheep go to get their hair cut? The baa-baa shop."
// ];


//for dynamic data...


btn.addEventListener('click',async function getData(){
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
    
      const res = await fetch('https://icanhazdadjoke.com', config)
    
      const data = await res.json()
    
      joke.innerHTML = data.joke
})



