
const form=document.getElementById("user-form");
const msg=document.querySelector(".msg");
const postlist=document.querySelector(".user-post-all");


const showlatestpost=()=>{
    const posts=getDatals("posts");
    let content="";
    if(posts.length>0){
        posts.reverse().map((item,index)=>{
            content+= `
            <div class="linkeding-post-timeline my-3">
                                        <div class="post-timeline-detals">
          
                                                  <div class="time-line-header">
                                                      <div class="timeline-header-left">
                                                          <img src="${item.author_photo}" alt="">
                                                          <div class="profile-data">
                                                              <h6>${item.author_name}</h6>
                                                              <p>${item.author_skill}</p>
                                                              <span>${timeAgo(item.post_time)} .<i class="fa-solid fa-earth-oceania"></i></span>
                                                          </div>
                                                      </div>
                                                      <div class="timeline-header-right">
                                                              <h6><i class="fa-solid fa-plus"></i> Follow</h6>
                                                      </div>
                                                  </div>
                                                  <div class="post-content">
                                                      <p>${item.post_content}</p>
                                                  </div>
          
                                                  <div class="post-content-image">
                                                      <img src="${item.post_photo}" alt="">
                                                  </div>
          
                                                  <div class="timeline-bottom">
                                                      <div class="timeline-bottom-top">
                                                          <div class="timeline-bottom-top-left">
                                                              <a style="color: #2b6db0;" href="#"><i class="fa-regular fa-thumbs-up"></i></a>
                                                              <a style="color: #b35232;" href="#"><i class="fa-regular fa-heart"></i></a>
                                                              <a style="color: #6dae4f;" href="#"><i class="fa-solid fa-hands-clapping"></i></a>
                                                              <span>689</span>
                                                          </div>
                                                          <div class="timeline-bottom-top-right">
                                                              <span>100 coments 782 reposts</span>
                                                          </div>
                                                      </div>
                                                      <hr>
          
                                                      <div class="timeline-bottom-bottom">
                                                         <div class="all-items">
                                                          <a href="#"> <i class="fa-solid fa-thumbs-up"></i> <span>Like</span></a>
                                                          <a href="#"> <i class="fa-solid fa-message"></i><span>Coments</span></a>
                                                          <a href="#"> <i class="fa-solid fa-arrow-right-arrow-left"></i><span>Reposts</span></a>
                                                          <a href="#"> <i class="fa-regular fa-paper-plane"></i><span>Send</span></a>
                                                         </div>
                                                      </div>
                                                  </div>
                                                  
          
                                              </div> 
                                          </div>

            `
        });
    }else{
        content="<h2> No Post Found Here</h2>"
    }
    postlist.innerHTML=content;
}
showlatestpost();

// heare are the form submition ;
 form.onsubmit=(e)=>{
e.preventDefault();
const form_data=new FormData(e.target);
const data=Object.fromEntries(form_data.entries());
// add submistion here;

if(!data.author_name || !data.author_photo){
    msg.innerHTML=createAlert("Author name and author phoro is requred .");
}else{
    const prevdata=getDatals("posts");
    prevdata.push({
        author_name:data.author_name,
        author_skill:data.author_skill,
        author_photo:data.author_photo,
        post_content:data.post_content,
        post_photo:data.post_photo,
        post_time:Date.now(),
    });
    setDatals("posts",prevdata);
    showlatestpost();
    e.target.reset(); 
}


}