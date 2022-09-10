async function getnews()

{
  try
   {
    var x = document.getElementById("search_input").innerText;
    console.log(x);
    var res = await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=in`);
    var data = await res.json();
   console.log(data)
   console.log(data.articles[0].title)
   data.articles.forEach(element =>
     {
    console.log(element)


  var div = document.getElementById("container");

   var div2 = `<div>
   <div><h2>Title: ${element.title}  </h2></div>

   <div><h2>Author:</h2>Author:${element.author}  </div>

   <div><h2>Content:</h2>Content ${element.content} </div>

   <div style="width: 580px;"><img style="width: 140%" src=" ${element.urlToImage} " alt=""></div>

   <div><h2>Discription:</h2>${element.description}</div>
  </div>`
  div.innerHTML += div2;
   });
  
  } catch (error) {
    console.log(error)
  }


  
}
getnews();