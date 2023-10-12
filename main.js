// document.addEventListener('DOMContentLoaded', (e) => {
    /** Attempt 1 */
    // // Select the image element using its ID
    // const images = document.querySelector('div.content-wrapper img');
    
    // // Update the image source
    // images.forEach(image => {
    //     image.setAttribute('src', 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg');
    // });

    /** Attempt 2 */
    // select images to delete
    // const contents = document.querySelectorAll('div.content-wrapper img');
    
    // // iterate over the array of images
    // contents.forEach(img => {
    //     // check if the current img has a parentNode
    //     if (img.parentNode) {
    //         // initialize variable to store the parent of the current image
    //         const parent = img.parentNode.nodeName;

    //         // remove the child from parent
    //         parent.removeChild(img);

            
    //     }
    // })

    // use parent to delete images 
    // contents.parentNode.removeChild(contents);

    // const will = document.createElement('img');
    // will.setAttribute('img', 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg');

    // contentsParent.prepend(will)



    /** Attept 3 */
    // const body = document.querySelector('body');

    // body.addEventListener('click', (e) => {
    //     console.log('A div was clicked!');
    // });

// });





setTimeout(() => {
    const contents = document.querySelectorAll('div.content-wrapper img');
        
    // iterate over the array of images
    contents.forEach(img => {
        img.setAttribute('src', 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg');
    });    
}, 100);


