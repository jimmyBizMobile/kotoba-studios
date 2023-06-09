const testimonials = [
    {
        name: 'John Doe',
        position: 'IT',
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
        name: 'Mickael Cane',
        position: 'Sales',
        photo: "https://randomuser.me/api/portraits/men/28.jpg",
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        name: 'Jane Doe',
        position: 'Engineering',
        photo: "https://randomuser.me/api/portraits/women/17.jpg",
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    },
    {
        name: 'Takahashi Yuriko',
        position: 'Sales',
        photo: "https://randomuser.me/api/portraits/women/80.jpg",
        text: ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },

];

// create a variable for each DOM element we want to target
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo-user');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

// This idx act as a counter
let idx = 1;

function updateTestimonial() {
    // A little bit of desctructuring <img class="emoji-icon" alt="emoji-wink" data-icon="emoji-wink" style="display: inline; margin: 0; margin-top: 1px; position: relative; top: 5px; width: 25px" src="data:image/png;base64, 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" title="emoji-wink" />
    let { name, position, photo, text } = testimonials[idx];

    // Update the DOM elements
    testimonial.innerHTML = text;
    username.innerHTML = name;
    role.innerHTML = position;
    logo.src = photo;

    // Increment the counter
    idx++;

    // Reset the idx when it reaches the end of the array
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

// Call the updateTestimonial functions each 10000ms / 10s
setInterval(updateTestimonial, 10000);