let about = document.getElementById("About-text");

about.innerHTML = window.matchMedia("(max-width: 768px)").matches
    ? `GreenAura is a youth-driven environmental initiative committed to tackling pressing ecological
challenges, with a particular focus on climate change. We believe in the power of collective
action and aim to create a unified community dedicated to protecting and preserving our planet.
Our approach<a href="#About-text" class="about-more">....</a>`
    : `GreenAura is a youth-driven environmental initiative committed to tackling pressing ecological
challenges, with a particular focus on climate change. We believe in the power of collective
action and aim to create a unified community dedicated to protecting and preserving our planet.
Our approach centers on fostering environmental awareness, promoting sustainable practices, and
inspiring individuals to take meaningful action for a greener future.

With a dynamic and passionate team, GreenAura works tirelessly to educate, empower, and engage
people from diverse backgrounds. We strive to make environmental conservation an accessible and
integral part of daily life by integrating creativity, innovation, and collaboration into
everything we do. At GreenAura, we envision a world where environmental responsibility is not
just a goal but a shared commitment across generations.
✨`;

let About_more = document.querySelector(".about-more");

window.matchMedia("(max-width: 768px)").matches ? About_more.addEventListener("click", () => {
    about.innerHTML = `GreenAura is a youth-driven environmental initiative committed to tackling pressing ecological
                        challenges, with a particular focus on climate change. We believe in the power of collective
                        action and aim to create a unified community dedicated to protecting and preserving our planet.
                        Our approach centers on fostering environmental awareness, promoting sustainable practices, and
                        inspiring individuals to take meaningful action for a greener future.

                        With a dynamic and passionate team, GreenAura works tirelessly to educate, empower, and engage
                        people from diverse backgrounds. We strive to make environmental conservation an accessible and
                        integral part of daily life by integrating creativity, innovation, and collaboration into
                        everything we do. At GreenAura, we envision a world where environmental responsibility is not
                        just a goal but a shared commitment across generations.
                        ✨`;
}) : null;

let Services = document.getElementById("Services-text");

Services.innerHTML = window.matchMedia("(max-width: 768px)").matches
    ? `<h2>Certified Training and Educational Programs:</h2> Offering a range of accredited workshops, courses, and summer programs that equip individuals with essential skills in environmental conservation while fostering a deeper understanding of sustainability. These initiatives combine hands-on training, interactive learning, and youth-focused activities to create impactful learning experiences.
<br/>
<h2>Youth Leadership and Engagement:</h2> Empowering young leaders through a variety of programs and competitions that encourage environmental responsibility, creative solutions, and active participation in community-based projects. These programs also provide opportunities for global exposure through conferences and international initiatives, enhancing their ability to make a worldwide impact.
<br/>
<h2>Awareness Campaigns and Events:</h2> Organizing educational campaigns, lectures, and community events in schools, universities, and public spaces to spread environmental knowledge and inspire action. These events, supported by multimedia tools, aim to engage diverse audiences and drive sustainable practices at the local level.
<br/>
<h2>Community Initiatives and Volunteer Opportunities:</h2> Implementing hands-on projects like cleanups, tree planting, and eco-activism that bring communities together to tackle ecological challenges. These initiatives combine sustainability with community development, creating a positive impact while fostering a sense of collective responsibility.

<a href="#Services-text" class="services-more">....</a>`
    : `
<h2 style="padding: 0.25em 0;">Certified Training and Educational Programs:</h2> Offering a range of accredited workshops, courses, and summer programs that equip individuals with essential skills in environmental conservation while fostering a deeper understanding of sustainability. These initiatives combine hands-on training, interactive learning, and youth-focused activities to create impactful learning experiences.
<br/>
<h2 style="padding: 0.25em 0;">Youth Leadership and Engagement:</h2> Empowering young leaders through a variety of programs and competitions that encourage environmental responsibility, creative solutions, and active participation in community-based projects. These programs also provide opportunities for global exposure through conferences and international initiatives, enhancing their ability to make a worldwide impact.
<br/>
<h2 style="padding: 0.25em 0;">Awareness Campaigns and Events:</h2> Organizing educational campaigns, lectures, and community events in schools, universities, and public spaces to spread environmental knowledge and inspire action. These events, supported by multimedia tools, aim to engage diverse audiences and drive sustainable practices at the local level.
<br/>
<h2 style="padding: 0.25em 0;">Community Initiatives and Volunteer Opportunities:</h2> Implementing hands-on projects like cleanups, tree planting, and eco-activism that bring communities together to tackle ecological challenges. These initiatives combine sustainability with community development, creating a positive impact while fostering a sense of collective responsibility.
<br/>
<h2 style="padding: 0.25em 0;">Competitions and Awards:</h2> Running innovative contests that inspire individuals to develop solutions for environmental challenges, with awards and recognition to encourage further creativity and problem-solving.
<br/>
<h2 style="padding: 0.25em 0;">Global Networking and Opportunities:</h2> Connecting participants with international conferences, programs, and projects, enabling them to engage in global sustainability efforts and broaden their impact on the world stage.
<br/>
<h2 style="padding: 0.25em 0;">Sustainability Consulting:</h2> Advising organizations on implementing eco-friendly practices and strategies to reduce their environmental footprint and promote long-term sustainability.
<br/>
<h2 style="padding: 0.25em 0;">Eco-Tours and Ecotourism Initiatives:</h2> Organizing trips to natural destinations that prioritize environmental conservation, support local communities, and promote eco-friendly travel experiences that contribute to the well-being of the planet.
<br/>
<h2 style="padding: 0.25em 0;">Collaborative Partnerships:</h2> Building strong alliances with like-minded organizations to enhance the impact of environmental initiatives and ensure sustainable development through joint efforts and shared resources.`;

let Services_more = document.querySelector(".services-more");

window.matchMedia("(max-width: 768px)").matches ? Services_more.addEventListener("click", () => {
    Services.innerHTML = `<h2 style="padding: 0.25em 0;">Certified Training and Educational Programs:</h2> Offering a range of accredited workshops, courses, and summer programs that equip individuals with essential skills in environmental conservation while fostering a deeper understanding of sustainability. These initiatives combine hands-on training, interactive learning, and youth-focused activities to create impactful learning experiences.
<br/>
<h2 style="padding: 0.25em 0;">Youth Leadership and Engagement:</h2> Empowering young leaders through a variety of programs and competitions that encourage environmental responsibility, creative solutions, and active participation in community-based projects. These programs also provide opportunities for global exposure through conferences and international initiatives, enhancing their ability to make a worldwide impact.
<br/>
<h2 style="padding: 0.25em 0;">Awareness Campaigns and Events:</h2> Organizing educational campaigns, lectures, and community events in schools, universities, and public spaces to spread environmental knowledge and inspire action. These events, supported by multimedia tools, aim to engage diverse audiences and drive sustainable practices at the local level.
<br/>
<h2 style="padding: 0.25em 0;">Community Initiatives and Volunteer Opportunities:</h2> Implementing hands-on projects like cleanups, tree planting, and eco-activism that bring communities together to tackle ecological challenges. These initiatives combine sustainability with community development, creating a positive impact while fostering a sense of collective responsibility.
<br/>
<h2 style="padding: 0.25em 0;">Competitions and Awards:</h2> Running innovative contests that inspire individuals to develop solutions for environmental challenges, with awards and recognition to encourage further creativity and problem-solving.
<br/>
<h2 style="padding: 0.25em 0;">Global Networking and Opportunities:</h2> Connecting participants with international conferences, programs, and projects, enabling them to engage in global sustainability efforts and broaden their impact on the world stage.
<br/>
<h2 style="padding: 0.25em 0;">Sustainability Consulting:</h2> Advising organizations on implementing eco-friendly practices and strategies to reduce their environmental footprint and promote long-term sustainability.
<br/>
<h2 style="padding: 0.25em 0;">Eco-Tours and Ecotourism Initiatives:</h2> Organizing trips to natural destinations that prioritize environmental conservation, support local communities, and promote eco-friendly travel experiences that contribute to the well-being of the planet.
<br/>
<h2 style="padding: 0.25em 0;">Collaborative Partnerships:</h2> Building strong alliances with like-minded organizations to enhance the impact of environmental initiatives and ensure sustainable development through joint efforts and shared resources.`;
}) : null;


let imgs_list = [
    "images/partners/Rise.jpg",
    "images/partners/Matrix.jpg",
    "images/partners/Netizens.jpg",
    "images/partners/Resala.jpg",
    "images/partners/Science_land.jpg",
    "images/partners/SkilSpire.jpg",
    "images/partners/Sultanate_Granada.jpg",
    "images/partners/Tech_stars.jpg",
    "images/partners/Techne.jpg",
    "images/partners/TEDxFayoum.jpg",
    "images/partners/Weptune.jpg",
    "images/partners/Food_bank.jpg",
    "images/partners/ScholarX.jpg",
    "images/partners/Girls_harvard.jpg",
    "images/partners/Microsoft.jpg",
];


let partners = document.getElementsByClassName("partner-img");


for (let i = 0; i < partners.length; i++) {
    partners[i].innerHTML = `<img src="${imgs_list[i]}" />`;
}