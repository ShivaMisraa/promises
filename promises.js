function updateLastUserActivityTime(userId, posts, createPost, deletePost) {
    // Record the current time as the user's last activity time
    const lastActivityTime = new Date().toISOString();
    // Call the createPost function to create a new post
    return createPost().then(() => {
      // Wait for 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }).then(() => {
      // Call the updateLastUserActivityTime function to update the user's last activity time
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }).then(() => {
      console.log('All promises resolved');
      // Log all the posts created and lastActivityTime of the user
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
      // Delete the last post
      return deletePost(posts[posts.length - 1].id);
    }).then(() => {
      console.log('Post deleted');
      // Log the new set of posts of the user
      console.log('New set of posts:', posts);
    });
  }
  

  async function fun1(){
    let delhiWeather= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('42C')
        },2000)
    })
}
    let bangaloreWeather= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('39C')
        },5000)
    })

console.log('Fetching Delhi weather...')
let delhiW= await delhiWeather
console.log('Fetched Weather:'+delhiW)
console.log('Fetching Bangalore weather...')
let BangaloreW= await bangaloreWeather
console.log('Fetched Bangalore Weather:'+BangaloreW)
return [delhiW, BangaloreW]